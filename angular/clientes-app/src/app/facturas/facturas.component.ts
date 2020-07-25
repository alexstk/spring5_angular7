import { Component, OnInit } from '@angular/core';
import { Factura } from './models/factura'
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../clientes/cliente.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html'
})
export class FacturasComponent implements OnInit {

  titulo: string = 'Nueva Factura';
  factura: Factura = new Factura();

  constructor(private activatedRoute: ActivatedRoute, private clienteService: ClienteService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let clientId = +params.get('clientId');
      this.clienteService.getCliente(clientId).subscribe(cliente => this.factura.cliente = cliente);
    });
  }

}
