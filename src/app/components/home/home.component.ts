import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  name = 'Usuario';

  peliculas = [
    {
      title: "John Wick 4",
      overview: "John Wick descubre un camino para derrotar a la Alta Mesa. Pero para poder ganar su libertad, Wick deberá enfrentarse a un nuevo rival con poderosas alianzas en todo el mundo, capaz de convertir a viejos amigos en enemigos.",
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gh2bmprLtUQ8oXCSluzfqaicyrm.jpg"
    },
    {
      title: "Fast & Furious X",
      overview: "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.",
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jmdi62j5uJV60EtYY8zsE1LRYEf.jpg"
    },
    {
      title: "Super Mario Bros.",
      overview: "Mientras trabajan en una avería subterránea, los fontaneros de Brooklyn, Mario y su hermano Luigi, viajan por una misteriosa tubería hasta un nuevo mundo mágico. Pero, cuando los hermanos se separan, Mario deberá emprender una épica misión para encontrar a Luigi.",
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zNKs1T0VZuJiVuhuL5GSCNkGdxf.jpg"
    },
    {
      title: "La sirenita",
      overview: "Ariel es una joven y soñadora sirena, hija del Rey Tritón, que está cansada de su vida como princesa bajo el mar. Su mayor deseo es abandonar el fondo marino y tener una vida normal y apacible en la superficie. La bruja Úrsula descubre su anhelo y, por eso, a cambio de su preciosa voz le ofrece un cuerpo totalmente humano. Ariel acepta, movida por su pasión por conocer el mundo terrestre y porque está enamorada de un apuesto príncipe humano. Pero las cosas no serán fáciles para Ariel, ya que la bruja Úrsula esconde oscuras intenciones.",
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/goX6Pcb7fugl9ADfg3Ns1OnuIYY.jpg"
    },
    {
      title: "Guardianes de la Galaxia",
      overview: "Star-Lord, todavía recuperándose de la pérdida de Gamora, debe reunir a su equipo para defender el universo junto con la protección de uno de los suyos. Una misión que, si no se completa, podría llevar al final de los Guardianes tal como los conocemos.",
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/voAxRv011XHK2qFBXmZKXPj2wWB.jpg"
    }
  ]
}
