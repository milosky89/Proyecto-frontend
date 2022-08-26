import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { PersonaComponent } from './register/persona/persona.component';
import { EmpresaComponent } from './register/empresa/empresa.component';
import { TipoUsuarioComponent } from './register/tipo-usuario/tipo-usuario.component';
import { OlvidoContrasenaComponent } from './olvido-contrasena/olvido-contrasena.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'olvidoContrasena', component: OlvidoContrasenaComponent},
  {path: 'tipoUsuario', component: TipoUsuarioComponent},
  {path: 'persona', component: PersonaComponent},
  {path: 'empresa', component: EmpresaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
