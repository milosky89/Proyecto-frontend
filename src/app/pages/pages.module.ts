import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { MascotaComponent } from './mascota/mascota.component';
import { AnalisisComponent } from './analisis/analisis.component';
import { InformacionComponent } from './informacion/informacion.component';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    PerfilComponent,
    MascotaComponent,
    InformacionComponent,
    AnalisisComponent,
    ModalComponent,
  ],
  exports:[
    DashboardComponent,
    PagesComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    NgChartsModule,
    ReactiveFormsModule,
    FormsModule
]
})
export class PagesModule { }
