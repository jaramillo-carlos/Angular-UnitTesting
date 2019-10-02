import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MedicosComponent} from './medicos.component';
import {CreacionComponent} from './creacion/creacion.component';
import {FormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('MedicosComponent', () => {
    let component: MedicosComponent;
    let fixture: ComponentFixture<MedicosComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MedicosComponent, CreacionComponent],
            imports: [FormsModule, HttpClientTestingModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MedicosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
