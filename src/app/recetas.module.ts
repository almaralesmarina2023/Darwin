export class Recetas{
  nombre:string=""
  ingredientes:string[]=[];
  preparacion:string="";

  constructor(nombre:string="",ingredientes:string[]=[],preparacion:string=""){
    this.nombre=nombre;
    this.ingredientes=ingredientes;
    this.preparacion=preparacion
  }
}
