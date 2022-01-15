import { Component,  Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzServices } from '../services/dbz.service';

@Component({
  selector: 'app-formulario-perrsonaje',
  templateUrl: './formulario-perrsonaje.component.html',
  styleUrls: ['./formulario-perrsonaje.component.css']
})
export class FormularioPerrsonajeComponent{
  
  
  @Input() personaje: Personaje = {
    nombre : '',
    poder: 0
  }
  
  constructor(private dbzService: DbzServices){}
  
  agregar(){
    if(this.personaje.nombre){
      this.dbzService.agregarPersonajen(this.personaje);
      this.personaje = {
        nombre : '',
        poder: 0
      }
    }
  }

}
