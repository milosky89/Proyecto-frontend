import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { PersonaComponent } from './register/persona/persona.component';
import { OlvidoContrasenaComponent } from './olvido-contrasena/olvido-contrasena.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'olvidoContrasena', component: OlvidoContrasenaComponent},
  {path: 'persona', component: PersonaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
