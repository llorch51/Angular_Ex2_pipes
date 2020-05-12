import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre = "nIrVaNa";
  nombre2="nirVAna eliZAbeth guZman florEs";

  arreglo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  vidio="RoQL1qpQeGo";

  activar:boolean=true;

  heroe = {
    nombre: "Fidel",
    clave: "chingon",
    edad: "90",
    direccion: {
      calle: "libertad",
      casa: "666"
    }
  }

  
  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('llegó la data!'), 3500);
  });

  fecha=new Date();
}
