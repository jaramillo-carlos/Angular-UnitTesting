import {Component} from '@angular/core';
import {Medico} from '../../../models/medico';
import {MedicosService} from '../../../services/medicos.service';

@Component({
  selector: 'app-creacion-medicos',
  templateUrl: './creacion.component.html',
  styleUrls: ['./creacion.component.sass']
})
export class CreacionComponent {
  medico: Medico = {};

  constructor(public medicosSVC: MedicosService) {
  }

  agregarMedico() {
    if (!this.medico.nombre || !this.medico.titulo) {
      return alert('Campos incompletos');
    }
    this.medicosSVC.agregarMedico(this.medico).then();
  }
}
