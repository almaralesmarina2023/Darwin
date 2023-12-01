import { Component, OnInit } from '@angular/core';
import { DsRecetasService } from '../ds-recetas.service';
import { Recetas } from '../recetas.module';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  listadorecetas:Recetas[]=[]
  constructor(private servicio: DsRecetasService){}
  ngOnInit(){
    this.listadorecetas=this.servicio.dsrecetas;

  }
}
