import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Medico} from '../models/medico';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  private _medicos: Medico[] = [];

  constructor(private api: ApiService) {
    this.obtenerMedicos();
  }

  agregarMedico(medico: Medico) {
    return this.api.agregarMedico(medico)
      .toPromise()
      .then(medicoCreado => {
        console.log(this._medicos);
        this._medicos.push(medicoCreado);
      });
  }

  eliminarMedico(medico: Medico) {
    return this.api.eliminarMedico(medico)
      .toPromise()
      .then(() => {
        this.obtenerMedicos();
      });
  }

  private obtenerMedicos() {
    return this.api.obtenerMedicos()
      .toPromise()
      .then(medicos => this._medicos = medicos);
  }

  get medicos(): Medico[] {
    return this._medicos;
  }
}
