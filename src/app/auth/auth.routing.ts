import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { PersonaComponent } from './register/persona/persona.component';
import { OlvidoContrasenaComponent } from './olvido-contrasena/olvido-contrasena.component';
import { NuevaClaveComponent } from './nueva-clave/nueva-clave.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'olvidoContrasena', component: OlvidoContrasenaComponent},
  {path: 'nuevaClave/:token', component: NuevaClaveComponent},
  {path: 'persona', component: PersonaComponent},
  {path: 'nuevaClave/:token', component: OlvidoContrasenaComponent},
  {path: 'persona', component: NuevaClaveComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
