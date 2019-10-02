import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CreacionComponent} from './components/medicos/creacion/creacion.component';
import {FormsModule} from '@angular/forms';
import {ApiService} from './services/api.service';
import {ApiServiceMock} from '../test/ApiServiceMocks';
import {MedicosComponent} from './components/medicos/medicos.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    CreacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [{provide: ApiService, useClass: ApiServiceMock}],
  bootstrap: [AppComponent]
})
export class AppModule { }
