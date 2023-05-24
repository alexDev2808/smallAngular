import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // props para compartir al template deben ser publicas
  title = 'Mi tienda En Linea!';
  btnDisabled = true;
  width = 10;
  person = {
    name: "Alexis",
    age: 22,
    carrera: 'TI',
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=288&q=80"
  }

  vipContent = [
    {
      name: "Imagen VIP 01",
      img: 'https://images.unsplash.com/photo-1627924531443-5a3261bcac81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=365&q=80'

    }
  ]

  nombres: string[] = ["Alexis", "Juli", "Fernanda", "Martha", "Mariela", "Ruby"];
  nuevoNombre = '';


  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=620&q=80'
    },
    {
      name: 'Colleción de albums',
      price: 34,
      image: 'https://images.unsplash.com/photo-1587731556938-38755b4803a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWxidW1zfGVufDB8fDB8fHww&auto=format&fit=crop&w=620&q=80'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=620&q=80'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: 'https://images.unsplash.com/photo-1520038410233-7141be7e6f97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=620&q=80'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=620&q=80'
    }
  ]

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }
  increaseAge() {
    this.person.age += 1;
  }
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);

  }
  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  agregarNombre() {
    this.nombres.push(this.nuevoNombre);
    this.nuevoNombre = '';
  }
  borrarNombre(index: number) {
    this.nombres.splice(index, 1);
  }
}
