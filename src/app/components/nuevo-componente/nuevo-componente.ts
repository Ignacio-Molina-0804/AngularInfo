import { Component } from '@angular/core';

@Component({
  selector: 'app-nuevo-componente',
  imports: [],
  templateUrl: './nuevo-componente.html',
  styleUrl: './nuevo-componente.css'
})
export class NuevoComponente {

  CreacionDeComponente = "Nuevo Componente"
  Descripcion = "Este Componente se creo en base a el comando ng generate component components/'Nombre de tu componente'"

}
