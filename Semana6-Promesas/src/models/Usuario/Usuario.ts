import { Rol } from "./Rol";
import { Estado } from "./Estado";

export interface Usuario {
  id: number;
  nome: string;
  apellido: string;
  edad: number;
  correo: string;
  contrasena: string;
  rol: Rol;
  estado: Estado;
}