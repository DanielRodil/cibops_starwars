import { Operacion } from "./operacion";

export class OperacionImpl implements Operacion {
  nombre: string = '';
  descripcion: string = '';

  constructor(nombre: any, descripcion: any) {
    this.nombre = nombre;
    this.descripcion = descripcion;
  };

}
