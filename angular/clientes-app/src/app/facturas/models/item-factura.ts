import { Producto } from './producto';

export class ItemFactura {
    id: number;
    producto: Producto;
    cantidad: number = 1;
    importe: number;

    // Solo para visualizar cambios en el FE, ya que el importe se calcula en el BE.
    public calcularImporte(): number {
        return this.cantidad * this.producto.precio;
    }
}
