import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Operacion } from '../models/operacion';
import { OperacionImpl } from '../models/operacion-impl';

@Injectable({
  providedIn: 'root'
})

export class OperacionService {

  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}operaciones`

  constructor(private http: HttpClient) { }

  getOperaciones(): Observable<any>{
    return this.http.get<any>(this.urlEndPoint);
  }

  extraerOperaciones(respuestaApi: any): Operacion[] {
    const operaciones: Operacion[] = [];
    respuestaApi._embedded.operaciones.forEach((p: any) => {
      operaciones.push(this.mapearOperacion(p));

    });
    return operaciones;
  }

  mapearOperacion(operacionApi: any): OperacionImpl {
    return new OperacionImpl(
      operacionApi.nombre,
      operacionApi.descripcion
    );
  }

  createOp(operacion: Operacion): Observable<any> {
    return this.http.post(`${this.urlEndPoint}`, operacion);
  }

}
