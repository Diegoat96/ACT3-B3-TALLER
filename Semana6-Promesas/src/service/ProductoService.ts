import { ProductoRepository } from "../data/ProductoRepository";
import { Producto } from "../models/Producto/Producto";

export class ProductoService {
    private repository = new ProductoRepository();

    //Método para listar
    async listarProductos(): Promise<Producto[]> {
        return await this.repository.obtenerProductos();
    }

    //Método para agregar producto
    async agregarProducto(producto: Producto): Promise<void> {
        try {
            const creado = await this.repository.agregarProducto(producto);
            if (!creado) {
                console.log("El producto ya existe.");
                return;
            }
            console.log("Producto creado correctamente.");
        } catch (error) {
            console.error("Error al crear el producto.");
        }
    }

    //Método para actualizar producto
    async actualizarProducto(producto: Producto): Promise<void> {
        try {
            const actualizado = await this.repository.actualizarProducto(producto);
            if (!actualizado) {
                console.log("El producto no existe.");
                return;
            }
            console.log("Producto actualizado correctamente.");
        } catch (error) {
            console.error("Error al actualizar el producto.");
        }
    }

    //Método para eliminar producto
    async eliminarProducto(id: number): Promise<void> {
        try {
            const eliminado = await this.repository.eliminarProducto(id);
            if (!eliminado) {
                console.log("El producto no existe.");
                return;
            }
            console.log("Producto eliminado correctamente.");
        } catch (error) {
            console.error("Error al eliminar el producto.");
        }
    }

    //Método para buscar producto por id
    async buscarPorIdProducto(id: number): Promise<Producto | undefined> {
        try {
             return await this.repository.buscarPorId(id);
            
        } catch (error) {
            console.error("Error al buscar el producto.");
            return undefined;
        }
    }

}