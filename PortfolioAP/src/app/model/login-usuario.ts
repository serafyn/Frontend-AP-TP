import { ThisReceiver } from "@angular/compiler";

export class LoginUsuario {
    nombreUsuario: String;
    password: String;

    // constructor
    constructor(nombreUsuario: String, password: String) {
        this.nombreUsuario = nombreUsuario;
        this.password = password;
    }
}
