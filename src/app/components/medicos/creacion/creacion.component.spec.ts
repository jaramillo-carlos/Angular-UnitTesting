import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreacionComponent} from './creacion.component';
import {FormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CreacionComponent', () => {
    let component: CreacionComponent;
    let fixture: ComponentFixture<CreacionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CreacionComponent],
            imports: [FormsModule, HttpClientTestingModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CreacionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
