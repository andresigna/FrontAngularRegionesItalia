import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionesComponent } from './regiones/regiones.component';
import { RegionComponent } from './region/region.component';

const routes: Routes = [
  {path:'', component: RegionesComponent},
  {path:'region/:id', component: RegionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
