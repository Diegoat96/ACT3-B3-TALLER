import { VehiculoRepository } from "../data/VehiculoRepository";
import { Vehiculo } from "../models/Vehiculo/Vehiculo";

export class VehiculoService {
    private repository = new VehiculoRepository();

    //Método para listar
    async listarVehiculos(): Promise<Vehiculo[]> {
        return await this.repository.obtenerVehiculos();
    }

    //Método para agregar vehiculo
    async agregarVehiculo(vehiculo: Vehiculo): Promise<void> {
        try {
            const creado = await this.repository.agregarVehiculo(vehiculo);
            if (!creado) {
                console.log("El vehiculo ya existe.");
                return;
            }
            console.log("Vehiculo creado correctamente.");
        } catch (error) {
            console.error("Error al crear el vehiculo.");
        }
    }

    //Método para actualizar vehiculo
    async actualizarVehiculo(vehiculo: Vehiculo): Promise<void> {
        try {
            const actualizado = await this.repository.actualizarVehiculo(vehiculo);
            if (!actualizado) {
                console.log("El vehiculo no existe.");
                return;
            }
            console.log("Vehiculo actualizado correctamente.");
        } catch (error) {
            console.error("Error al actualizar el vehiculo.");
        }
    }

    //Método para eliminar vehiculo
    async eliminarVehiculo(id: number): Promise<void> {
        try {
            const eliminado = await this.repository.eliminarVehiculo(id);
            if (!eliminado) {
                console.log("El vehiculo no existe.");
                return;
            }
            console.log("Vehiculo eliminado correctamente.");
        } catch (error) {
            console.error("Error al eliminar el vehiculo.");
        }
    }

    //Método para buscar vehiculo por id
    async buscarPorIdVehiculo(id: number): Promise<Vehiculo | undefined> {
        try {
            return await this.repository.buscarPorId(id);

        } catch (error) {
            console.error("Error al buscar el vehiculo.");
        }
    }
}