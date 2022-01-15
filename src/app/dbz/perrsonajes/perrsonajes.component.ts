import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzServices } from '../services/dbz.service';

@Component({
  selector: 'app-perrsonajes',
  templateUrl: './perrsonajes.component.html',
  styleUrls: ['./perrsonajes.component.css']
})
export class PerrsonajesComponent {
  constructor(private dbzService: DbzServices){

  }

  get personajes(){
    return this.dbzService.personajes;
  }

}
