import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = "Angular Info";
  description = "Esto es un archivo donde pruebo diferentes funciones de angular"
  autor = "Ignacio Molina"
}
