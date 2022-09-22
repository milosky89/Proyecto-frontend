import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PersonaComponent } from './register/persona/persona.component';
import { OlvidoContrasenaComponent } from './olvido-contrasena/olvido-contrasena.component';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CamposService } from './register/persona/services/campos.service';
import { HttpClientModule } from '@angular/common/http';
import { NuevaClaveComponent } from './nueva-clave/nueva-clave.component'


@NgModule({
  declarations: [
    LoginComponent,
    PersonaComponent,
    OlvidoContrasenaComponent,
    NuevaClaveComponent,
  ],
  exports:[
    LoginComponent,
    LoginComponent,
    PersonaComponent,
    OlvidoContrasenaComponent,
    NuevaClaveComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    CamposService
  ]
})
export class AuthModule { }
