import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { Operacion } from '../models/operacion';
import { OperacionImpl } from '../models/operacion-impl';

@Injectable({
  providedIn: 'root'
})

export class OperacionService {

  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}operaciones`

  constructor(private http: HttpClient,
              private auxService: AuxiliarService) { }

  getOperaciones(): Observable<any>{
    return this.http.get<any>(this.urlEndPoint);
  }

  extraerOperaciones(respuestaApi: any): Operacion[] {
    const operaciones: Operacion[] = [];
    respuestaApi.results.forEach((o: any) => {
      operaciones.push(this.mapearOperacion(o));

    });
    return operaciones;
  }

  mapearOperacion(operacionApi: any): OperacionImpl {
    return new OperacionImpl(
      operacionApi.nombre,
      operacionApi.descripcion
    );
  }

  create(operacion: Operacion): void {
    console.log(`Se ha creado la operacion ${JSON.stringify(operacion)}`)
  }

  getOperacionesPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  }

}
