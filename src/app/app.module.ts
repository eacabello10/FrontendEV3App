import { BrowserModule } from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import {MediatorService} from './mediator.service';
import { MediatorFormComponent } from './mediator-form/mediator-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MediatorFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     HttpClientModule
  ],
  providers: [MediatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
