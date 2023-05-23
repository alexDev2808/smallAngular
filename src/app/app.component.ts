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
  completeName = this.firstName + " " + this.lastname;
  urlImg = 'https://images.unsplash.com/photo-1684720852626-84d28dbeabc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=798&q=80';
}
