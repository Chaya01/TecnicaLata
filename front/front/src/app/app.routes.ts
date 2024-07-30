import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasComponent } from './componentes/empresas/empresas.component';
import { EmpleadosComponent } from './componentes/empleados/empleados.component';

export const routes: Routes = [
    { path: 'empresas', component: EmpresasComponent },
    { path: 'empleados', component: EmpleadosComponent },
    { path: '', redirectTo: '/empresas', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }