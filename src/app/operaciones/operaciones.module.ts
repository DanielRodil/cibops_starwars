import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperacionesRoutingModule } from './operaciones-routing.module';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { OperacionItemComponent } from './operacion-item/operacion-item.component';


@NgModule({
  declarations: [
    OperacionesComponent,
    OperacionItemComponent
  ],
  imports: [
    CommonModule,
    OperacionesRoutingModule
  ]
})
export class OperacionesModule { }
