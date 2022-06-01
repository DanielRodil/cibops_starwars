import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperacionFormComponent } from './operacion-form/operacion-form.component';
import { OperacionesComponent } from './operaciones/operaciones.component';

const routes: Routes = [
  {
    path: '',
    component: OperacionesComponent
  },
  {
    path: 'formularioOperacion',
    component: OperacionFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperacionesRoutingModule { }
