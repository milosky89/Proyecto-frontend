import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { PersonaService } from '../services/persona.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private personaService: PersonaService,
              private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

      return this.personaService.validarToken()
          .pipe(
              tap(estaAutenticado => {
                if(!estaAutenticado){
                  this.router.navigateByUrl('/login')
                }
              })
            );
  }

}
