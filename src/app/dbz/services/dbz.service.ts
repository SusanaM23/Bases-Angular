import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzServices{

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder:7000
        },
        {
            nombre: 'Vegeta',
            poder:6999
        }
    ];

    get personajes(): Personaje[] {
        return [...this._personajes]
    }
    personaje: Personaje ={
        nombre: '',
        poder: 0
    }

    constructor(){
        console.log("DbzServices")
    }

    agregarPersonajen(payload:Personaje){
        this._personajes.push(payload)

    }

}