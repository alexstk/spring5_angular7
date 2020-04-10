import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { Region } from './region';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private cliente: Cliente = new Cliente();
  private regiones: Region[];
  private titulo: string = 'Crear Cliente';

  private errores: string[];

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.cargarCliente();

  }

  cargarCliente(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id){
        this.clienteService.getCliente(id).subscribe(cliente => this.cliente = cliente);
      }
    });
    this.clienteService.getRegiones().subscribe(regiones => this.regiones = regiones);
  }

  //Con o sin public es public
  create(): void {
    console.log(this.cliente);
    this.clienteService.create(this.cliente).subscribe(
      cliente => {
        this.router.navigate(['/clientes']);
        Swal.fire('Nuevo Cliente', `El cliente ${cliente.nombre} ha sido creado con éxito!`, 'success');
      },
      err => {
        this.errores = err.error.errors as string[]; 
        console.error('Codigo del error desde el backend: ' + err.status);
        console.error(err.error.errors);
      }
    );
  } 

  update(): void {
    console.log(this.cliente);
    this.clienteService.update(this.cliente)
      .subscribe(json => {
          this.router.navigate(['/clientes'])
          Swal.fire('Cliente Actualizado', `${json.mensaje}: ${json.cliente.nombre} actualizado  con exito.`, 'success')
        },
        err => {
          this.errores = err.error.errors as string[]; 
          console.error('Codigo del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      );
  }

  // o1 es el objeto del option, o2 el del select (el del cliente)
  compararRegion(o1: Region, o2: Region): boolean {
    return o1 === undefined || o2 === undefined ? false : o1.id === o2.id;  // suficiente para mi
    //return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false : o1.id === o2.id;  // propuesta profe
  }
}
