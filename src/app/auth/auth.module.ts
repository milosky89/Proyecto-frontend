import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { EmpresaComponent } from './register/empresa/empresa.component';
import { PersonaComponent } from './register/persona/persona.component';
import { TipoUsuarioComponent } from './register/tipo-usuario/tipo-usuario.component';
import { OlvidoContrasenaComponent } from './olvido-contrasena/olvido-contrasena.component';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CamposService } from './register/persona/services/campos.service';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    LoginComponent,
    EmpresaComponent,
    PersonaComponent,
    TipoUsuarioComponent,
    OlvidoContrasenaComponent,
  ],
  exports:[
    LoginComponent,
    LoginComponent,
    EmpresaComponent,
    PersonaComponent,
    TipoUsuarioComponent,
    OlvidoContrasenaComponent,
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
