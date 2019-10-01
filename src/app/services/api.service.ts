import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Medico} from '../models/medico';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  obtenerMedicos(): Observable<Medico[]> {
    return this.http.get(`${environment.api}/medicos`) as Observable<any>;
  }

  agregarMedico(medico: Medico): Observable<Medico> {
    return this.http.post(`${environment.api}/medicos`, medico) as Observable<any>;
  }

  eliminarMedico(medico: Medico) {
    return this.http.delete(`${environment.api}/medicos/${medico.id}`);
  }
}
