import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import Swal from 'sweetalert2';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  paginador: any;
  clienteSeleccionado: Cliente;

  constructor(private clienteService: ClienteService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let page: number = params.get('page') ? +params.get('page') : 0;

      this.clienteService.getClientes(page)
        .pipe(
          tap(response => {
            console.log('ClientesComponent: tap 3');
            (response.content as Cliente[]).forEach(cliente => {
              console.log(cliente.nombre);
            });
            this.paginador = response;
          }))
        .subscribe(response => this.clientes = response.content as Cliente[]);
    });
  }

  delete(cliente: Cliente) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Está seguro?',
      text: `Seguro que desea eliminar al cliente ${cliente.nombre} ${cliente.apellido}`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.clienteService.delete(cliente.id).subscribe(response => {
          this.clientes = this.clientes.filter(cli => cli !== cliente);
          swalWithBootstrapButtons.fire(
            'Cliente Eliminado!',
            `Cliente ${cliente.nombre} eliminado con exito.`,
            'success'
          )
        }
        );
      }
    })
  }

  abrirModal(cliente: Cliente){
    this.clienteSeleccionado = cliente;
  }
}
