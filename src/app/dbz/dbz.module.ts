import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PerrsonajesComponent } from './perrsonajes/perrsonajes.component';
import { FormularioPerrsonajeComponent } from './formulario-perrsonaje/formulario-perrsonaje.component';
import { DbzServices } from './services/dbz.service';




@NgModule({
  declarations: [
    MainPageComponent,
    PerrsonajesComponent,
    FormularioPerrsonajeComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], 
  providers:[
    DbzServices
  ]
})
export class DbzModule { }
