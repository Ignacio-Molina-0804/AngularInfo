import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponente } from './components/nuevo-componente/nuevo-componente';
import { Directivas } from './components/directivas/directivas';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NuevoComponente, Directivas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = "Angular Info";
  description = "Esto es un archivo donde pruebo diferentes funciones de angular"
  autor = "Ignacio Molina"
}
