import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmpresasComponent } from './componentes/empresas/empresas.component';
import { EmpleadosComponent } from './componentes/empleados/empleados.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmpresasComponent,
    EmpleadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }