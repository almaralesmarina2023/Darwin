import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListarRecetasComponent } from './listar-recetas/listar-recetas.component';
import { ContactosComponent } from './contactos/contactos.component';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';
import { InformacionComponent } from './informacion/informacion.component';
import { AdminComponent } from './admin/admin.component';



const appRoutes:Routes=[
  {path: '', component:ListarRecetasComponent},
  {path: 'Contacto', component:ContactosComponent},
  {path: 'quienes somos', component:QuienessomosComponent},
  {path: 'informacion/:id', component:InformacionComponent},
  {path: 'admin', component:AdminComponent},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule {

}
