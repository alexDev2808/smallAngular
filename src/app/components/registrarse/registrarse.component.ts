import { Component } from '@angular/core';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent {

  btnDeshabilitado = true;
  person = {
    nombre: '',
    correo: '',
    contrasena: '',
    repetir_contrasena: ''
  }

  registrarse() {
    console.log(this.person);

  }
}
