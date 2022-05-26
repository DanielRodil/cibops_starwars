import { Component, OnInit } from '@angular/core';
import { Operacion } from '../models/operacion';
import { faMagnifyingGlass, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { OperacionService } from '../service/operacion.service';
import { AuxiliarService } from 'src/app/service/auxiliar.service';

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
  todasOperaciones: Operacion[] = [];
  numpaginas: number = 0;

  constructor(private operacionService: OperacionService,
              private auxService: AuxiliarService) { }

  ngOnInit(): void {
      this.operacionService.getOperaciones().subscribe((response) => this.operaciones =
      this.operacionService.extraerOperaciones(response));
      this.getTodasOperaciones();
  }

  getTodasOperaciones(): void {
    this.operacionService.getOperaciones().subscribe(r => {
      this.numpaginas = this.auxService.getPaginasResponse(r);
      for (let index = 1; index <= this.numpaginas; index++) {
        this.operacionService.getOperacionesPagina(index)
        .subscribe(response => {
          this.todasOperaciones.push(...this.operacionService.extraerOperaciones(response))
        });

      }
    })
  }

}
