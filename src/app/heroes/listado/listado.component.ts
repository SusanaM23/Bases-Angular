import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = [
    'Spiderman',
    'Iron Man',
    'Deku',
    'Endevour',
    'Urabity'
  ];
  
  heroeBorrado: string ='';

  borrarHeroe(): void{
    let longitud: number = this.heroes.length;
    let borrado = this.heroes.splice(longitud - 1, 1) || '';
    // this.heroes.filter(heroe => heroe !== borrado[0]);
    this.heroeBorrado = borrado[0];
  }
}
