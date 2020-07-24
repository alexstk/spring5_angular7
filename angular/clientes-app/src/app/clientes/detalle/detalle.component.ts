import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ModalService } from './modal.service';
import swal from 'sweetalert2';
import { HttpEventType } from '@angular/common/http';
import { AuthService } from '../../usuarios/auth.service';
import { Factura } from '../../facturas/models/factura';
import { FacturaService } from '../../facturas/services/factura.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'detalle-cliente',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  
  @Input() cliente: Cliente;
  titulo: string = 'Detalle del Cliente';
  private fotoSeleccionada: File;
  private progreso: number = 0;

  constructor(private clienteService: ClienteService,
    private facturaService: FacturaService,
    private authService: AuthService,
    private modalService: ModalService) { }

  ngOnInit() {
    
  }

  seleccionarFoto(event) {
    this.fotoSeleccionada = event.target.files[0];
    this.progreso = 0;
    console.log(this.fotoSeleccionada);
    if(this.fotoSeleccionada.type.indexOf('image') < 0){
      swal.fire('Error al seleccionar la imagen', 'El archivo debe ser del tipo imagen', 'error');
      this.fotoSeleccionada = null;
    }
  }

  subirFoto() {
    if (!this.fotoSeleccionada) {
      swal.fire('Error Upload: ', 'Debe seleccionar una foto', 'error');
    } else {
      this.clienteService.subirFoto(this.fotoSeleccionada, this.cliente.id)
        .subscribe(event => {
          if (event.type === HttpEventType.UploadProgress){
            this.progreso = Math.round((event.loaded / event.total) * 100);
          }else if(event.type === HttpEventType.Response){
            let response: any = event.body;
            this.cliente = response.cliente as Cliente;
            
            this.modalService.notificarUpload.emit(this.cliente);
            swal.fire('La foto se ha subido completamente!', response.mensaje, 'success');
          }
        });
    }
  }

  cerrarModal() {
    this.modalService.cerrarModal();
    this.fotoSeleccionada = null;
    this.progreso = 0;
  }

  delete(factura: Factura) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Está seguro?',
      text: `Seguro que desea eliminar la factura ${factura.descripcion}`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.facturaService.delete(factura.id).subscribe(response => {
          this.cliente.facturas = this.cliente.facturas.filter(f => f !== factura);
          swalWithBootstrapButtons.fire(
            'Factura Eliminada!',
            `Factura ${factura.descripcion} eliminada con exito.`,
            'success'
          )
        }
        );
      }
    })
  }

}
