import { Operacion } from "./operacion";

export class OperacionImpl implements Operacion {
  nombre: string = '';
  descripcion: string = '';
  fechaApertura: string = '';
  fechaCierre: string = '';

  constructor(nombre: any, descripcion: any, fechaApertura: any, fechaCierre: any) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fechaApertura = fechaApertura;
    this.fechaCierre = fechaCierre;
  };

}
