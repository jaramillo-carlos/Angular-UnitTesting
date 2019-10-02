import {Component, OnInit} from '@angular/core';
import {MedicosService} from '../../services/medicos.service';

@Component({
    selector: 'app-medicos',
    templateUrl: './medicos.component.html',
    styleUrls: ['./medicos.component.sass']
})
export class MedicosComponent implements OnInit {

    constructor(public medicosSVC: MedicosService) {
    }

    ngOnInit() {
    }


}
