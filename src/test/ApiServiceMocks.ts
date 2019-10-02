import {Observable, of} from 'rxjs';
import {Medico} from '../app/models/medico';

export class ApiServiceMock {
  private medicos: Medico[] = [];
  private id = 0;

  constructor() {
    this.load();
  }

  obtenerMedicos(): Observable<Medico[]> {
    return of(this.medicos.filter(() => true));
  }

  agregarMedico(medico: Medico): Observable<Medico> {
    medico = Object.assign({}, medico);
    medico.id = `${this.id += 1}`;
    this.medicos.push(medico);
    this.save();
    return of(medico);
  }

  eliminarMedico(medico: Medico) {
    this.medicos = this.medicos.filter(m => m.id !== medico.id);
    this.save();
    return of();
  }

  private load() {
    const cache = sessionStorage.getItem('cached');
    if (cache) {
      this.medicos = JSON.parse(cache);
      this.id = this.medicos.length ? parseFloat(this.medicos[this.medicos.length - 1].id) : 0;
    }
  }

  private save() {
    sessionStorage.setItem('cached', JSON.stringify(this.medicos));
  }
}
