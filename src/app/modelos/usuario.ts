import { EmailValidator } from "@angular/forms";

export interface Usuario {
    id: string,
    nombre: string,
    correo: string,
    password: string,
}