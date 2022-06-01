import { Component, OnInit } from '@angular/core';
import { Operacion } from '../models/operacion';
import { faMagnifyingGlass, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { OperacionService } from '../service/operacion.service';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent implements OnInit {

  faMagnifyingGlass = faMagnifyingGlass;
  faPencil = faPencil;
  faTrashCan = faTrashCan;

  operaciones: Operacion[] = [];

  constructor(private operacionService: OperacionService) { }

  ngOnInit(): void {
      this.operacionService.getOperaciones().subscribe((response) => this.operaciones =
      this.operacionService.extraerOperaciones(response));
  }

}
