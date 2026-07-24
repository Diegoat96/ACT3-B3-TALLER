import { UsuarioRepository } from "../data/UsuarioRepository";
import { Usuario } from "../models/Usuario/Usuario";

export class UsuarioService {
    private repository = new UsuarioRepository();

    //Método para listar 
    async listar(): Promise<Usuario[]> {
        return await this.repository.obtenerUsuarios();
    }

    async agregar(usuario: Usuario): Promise<void> {
        try {
            const esDominioValido = await this.validarDominio(usuario.correo);
            if (!esDominioValido) {
                console.log("Error: El correo debe ser gmail.com, outlook.com o hotmail.com.");
                return;
            }
            const creado = await this.repository.agregarUsuario(usuario);
            if (!creado) {
                console.log("El usuario ya existe.");
                return;
            }
            console.log("Usuario creado correctamente.");
        } catch (error) {
            console.error("Error al crear el usuario.");
        }
    }

    async actualizar(usuario: Usuario): Promise<void> {
        try {

            const esDominioValido = await this.validarDominio(usuario.correo);
            if (!esDominioValido) {
                console.log("Error: El correo debe ser gmail.com, outlook.com o hotmail.com.");
                return;
            }
            
            const actualizado = await this.repository.actualizarUsuario(usuario);
            if (!actualizado) {
                console.log("El usuario no existe.");
                return;
            }
            console.log("Usuario actualizado correctamente.");
        } catch (error) {
            console.error("Error al actualizar el usuario.");
        }
    }

    async eliminar(id: number): Promise<void> {
        try {
            const eliminado = await this.repository.eliminarUsuario(id);
            if (!eliminado) {
                console.log("El usuario no existe.");
                return;
            }
            console.log("Usuario eliminado correctamente.");
        } catch (error) {
            console.error("Error al eliminar el usuario.");
        }
    }

    async buscarPorId(id: number): Promise<Usuario | undefined> {
        try {
            return await this.repository.buscarPorId(id);
            
        } catch (error) {
            console.error("Error al buscar el usuario por ID.");
            return undefined;
        }
    }

    async login(correo: string, contrasena: string): Promise<Usuario | undefined> {
        try {
            return await this.repository.buscarPorCredenciales(correo, contrasena);
        } catch (error) {
            console.error("Error al iniciar sesión.");
            return undefined;
        }
    }

    async validarDominio(correo: string): Promise<boolean> {
        const dominio = correo.split("@")[1];
        return dominio === "gmail.com" || dominio === "outlook.com" || dominio === "hotmail.com";
    }
}
