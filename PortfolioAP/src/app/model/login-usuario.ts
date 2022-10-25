import { ThisReceiver } from "@angular/compiler";

export class LoginUsuario {
    nombreUsuario: string;
    password: string;

    // constructor
    constructor(nombreUsuario: string, password: string) {
        this.nombreUsuario = nombreUsuario;
        this.password = password;
    }
}
