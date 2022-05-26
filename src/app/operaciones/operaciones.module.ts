import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperacionesRoutingModule } from './operaciones-routing.module';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { OperacionItemComponent } from './operacion-item/operacion-item.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuxiliarService } from '../service/auxiliar.service';


@NgModule({
  declarations: [
    OperacionesComponent,
    OperacionItemComponent
  ],
  imports: [
    CommonModule,
    OperacionesRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [AuxiliarService]
})
export class OperacionesModule { }
