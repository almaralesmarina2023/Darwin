import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {

constructor(private route: ActivatedRoute){}
indice:number=0;

ngOninit(){
  this.indice=this.route.snapshot.params['id'];
}


}
