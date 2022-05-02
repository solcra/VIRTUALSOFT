import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormularioComponent } from './components/formulario/formulario.component';
import { FormatTitlePipe } from './pipes/format-title.pipe';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    FormatTitlePipe,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
