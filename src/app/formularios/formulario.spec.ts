import {FormularioRegister} from './formulario';
import {FormBuilder} from '@angular/forms';

describe('Formularios', () => {

    let component: FormularioRegister;
    beforeEach(() => {
        component = new FormularioRegister(new FormBuilder());
    });

    it('Debe de crear un formulario con 2 campos', () => {
        // Arrange
        // Act
        // Assert
        expect(component.form.contains('email')).toBeTruthy();
        expect(component.form.contains('pass')).toBeTruthy();
    });

    it('Email obligatorio', () => {
        // Arrange
        const control = component.form.get('email');
        // Act
        control.setValue('');
        // Assert
        expect(control.valid).toBeFalsy();
    });

    it('Email valido', () => {
        // Arrange
        const control = component.form.get('email');
        // Act
        control.setValue('sasa@wqq.co');
        // Assert
        expect(control.valid).toBeTruthy();
    });
});
