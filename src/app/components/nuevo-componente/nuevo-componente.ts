import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nuevo-componente',
  imports: [FormsModule],
  templateUrl: './nuevo-componente.html',
  styleUrl: './nuevo-componente.css'
})
export class NuevoComponente {

  CreacionDeComponente = "Nuevo Componente"
  Descripcion = "Este Componente se creo en base a el comando `ng generate component components/(Nombre de tu componente)`"

  objetos: string[] = [];
  nuevoObjeto: string = "";

  addObjeto(){

    if(this.nuevoObjeto && this.nuevoObjeto.trim()){

      this.objetos.push(this.nuevoObjeto.trim());

      this.nuevoObjeto = "";

    }

  }


}
