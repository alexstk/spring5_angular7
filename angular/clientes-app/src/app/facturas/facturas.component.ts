import { Component, OnInit } from '@angular/core';
import { Factura } from './models/factura'
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../clientes/cliente.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, flatMap, startWith } from 'rxjs/operators';
import { FacturaService } from './services/factura.service';
import { Producto } from './models/producto';


@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html'
})
export class FacturasComponent implements OnInit {

  titulo: string = 'Nueva Factura';
  factura: Factura = new Factura();

  autocompleteControl = new FormControl();
  productosFiltrados: Observable<Producto[]>;

  constructor(private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService,
    private facturaService: FacturaService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let clienteId = +params.get('clienteId');
      this.clienteService.getCliente(clienteId).subscribe(cliente => this.factura.cliente = cliente);
    });

    this.productosFiltrados = this.autocompleteControl.valueChanges
      .pipe(
        map(value => typeof value === 'string' ? value : value.nombre),
       // startWith('a'),
        flatMap(value => value ? this._filter(value) : [])
      );
  }

  private _filter(value: string): Observable<Producto[]> {
    const filterValue = value.toLowerCase();

    return this.facturaService.filtrarProductos(filterValue);
  }

  mostrarNombre(producto ? : Producto ): string | undefined {
    return producto ? producto.nombre : undefined;
  }

}
