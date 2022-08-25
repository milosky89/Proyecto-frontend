import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PromesasComponent } from './promesas/promesas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MascotaComponent } from './mascota/mascota.component';
import { AnalisisComponent } from './analisis/analisis.component';
import { InformacionComponent } from './informacion/informacion.component';



const routes: Routes = [
    {
      path: '',
      component: PagesComponent,
      children: [
        {path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'}},
        {path: 'perfil', component: PerfilComponent,data: {titulo: 'Mi Perfil'}},
        {path: 'mascota', component: MascotaComponent,data: {titulo: 'Mis Mascotas'}},
        {path: 'informacion', component: InformacionComponent,data: {titulo: 'Consulta Mascotas'}},
        {path: 'analisis', component: AnalisisComponent,data: {titulo: 'Análisis Gráfico'}},
        {path: 'progress', component: ProgressComponent,data: {titulo: 'progress'}},
        {path: 'grafica1', component: Grafica1Component,data: {titulo: 'Dashboard'}},
        {path: 'promesas', component: PromesasComponent,data: {titulo: 'progress'}},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full',data: {titulo: 'Dashboard'}},
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
