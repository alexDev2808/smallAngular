import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // props para compartir al template deben ser publicas
  title = 'Mi tienda En Linea!';
  private firstName = "J. Alexis";
  private lastname = "Tenorio";
  age = 82;
  completeName = this.firstName + " " + this.lastname;
  urlImg = 'https://images.unsplash.com/photo-1684720852626-84d28dbeabc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80';
  btnDisabled = true;
  person = {
    name: "Alexis",
    age: 22,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=288&q=80"
  }
}
