import { Injectable } from '@angular/core';
import { Recetas } from './recetas.module';

@Injectable({
  providedIn: 'root'
})
export class DsRecetasService {
receta1:Recetas=new Recetas("receta 1",["agua","azucar","frijoles"],"Batir bastante");
receta2:Recetas=new Recetas("receta 2",["mermelada","azucar","quimbobo"],"Batir un poquito");

dsrecetas:Recetas[]=[this.receta1 , this.receta2];

agregar(receta:Recetas){
  this.dsrecetas.push(receta);
}

findreceta(index:number):Recetas{
  return this.dsrecetas[index]
}

  constructor() { }
}
