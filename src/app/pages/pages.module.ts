import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PromesasComponent } from './promesas/promesas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MascotaComponent } from './mascota/mascota.component';
import { AnalisisComponent } from './analisis/analisis.component';
import { InformacionComponent } from './informacion/informacion.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    PromesasComponent,
    PerfilComponent,
    MascotaComponent,
    InformacionComponent,
    AnalisisComponent,
    RxjsComponent,
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    NgChartsModule,
]
})
export class PagesModule { }
