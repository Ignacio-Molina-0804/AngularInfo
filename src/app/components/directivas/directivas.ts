import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  imports: [],
  templateUrl: './directivas.html',
  styleUrl: './directivas.css'
})
export class Directivas {

  //Modificar esto en el caso de que quieras que el @if cambie su informacion
  isLoggedIn = true;
  username = 'Juan';

  //Modificar esto en el caso de que quieras que el @for cambie su informacion  
  frutas = ['Manzana', 'Banana', 'Naranja', 'Uva'];

  //Modificar esto en el caso de que quieras que el @switch cambie su informacion
  dia = 'Viernes';

}
