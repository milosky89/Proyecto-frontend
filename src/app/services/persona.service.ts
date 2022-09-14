import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { personaForm } from '../interface/registro-persona.interface';
import { environment } from '../../environments/environment';
import { LoginForm } from '../interface/login-form.interface';
import {catchError, tap} from 'rxjs/operators'
import { map, Observable, of } from 'rxjs';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  validarToken(): Observable<boolean>{
      const token = localStorage.getItem('token') || '';

     return this.http.get(`${base_url}/login/renew`,{
          headers:{
            'x-token': token
          }
      }).pipe(
          tap((resp: any)=>{
            localStorage.setItem('token',resp.token);
          }),
          map( resp => true),
          catchError(error => of(false))
        )
  }

  crearPersona(formData: personaForm){

    return this.http.post(`${base_url}/personas`, formData)
              .pipe(
                tap((resp: any) =>{
                  localStorage.setItem('token',resp.token)
                })
              )
}

  login(formData: LoginForm){

    return this.http.post(`${base_url}/login`, formData)
              .pipe(
                  tap((resp: any) =>{
                    localStorage.setItem('token',resp.token)
                  })
                )

  }
}
