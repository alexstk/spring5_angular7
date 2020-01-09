import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'paginator-nav',
  templateUrl: './paginator.component.html'
})
export class PaginatorComponent implements OnInit, OnChanges {

  @Input() paginador: any;
  paginas: number[];
  desde: number;
  hasta: number;
  

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(){
    var pagina: number = this.paginador.number + 1;
    var totalPaginas = this.paginador.totalPages;

    // Mostrando de a 9 paginas en el paginador
    this.desde = Math.min(Math.max(1, pagina - 5), totalPaginas - 5);
    this.hasta = Math.max(Math.min(pagina + 3, totalPaginas), 9);
    
    if (totalPaginas > 9) {
      this.paginas = new Array(this.hasta - this.desde + 1).fill(0).map((valor, indice) => indice + this.desde); //valor = indice + 1
    } else {
      this.paginas = new Array(this.paginador.totalPages).fill(0).map((valor, indice) => indice + 1); //valor = indice + 1
    }

  }
}
