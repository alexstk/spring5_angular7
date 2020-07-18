import { Producto } from './producto';

export class ItemFactura {
    id: number;
    producto: Producto;
    cantidad: number = 1;
    importe: number;

    // Solo para mostrar que se puede, ya que el importe viene calculado desde el backend.
    public calcularImporte(): number {
        return this.cantidad * this.producto.precio;
    }
}
