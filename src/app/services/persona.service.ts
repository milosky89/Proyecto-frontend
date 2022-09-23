import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { personaForm } from '../interface/registro-persona.interface';
import { environment } from '../../environments/environment';
import { LoginForm } from '../interface/login-form.interface';
import {catchError, tap} from 'rxjs/operators'
import { map, Observable, of } from 'rxjs';
import { Persona } from '../models/persona.model';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  public persona: Persona | undefined;

  constructor(private http: HttpClient) { }

  logout(){
    const bandera = localStorage.getItem('bandera')

    if(bandera){
      localStorage.removeItem('token')
      localStorage.removeItem('bandera')

    }else{
      localStorage.removeItem('token')
      localStorage.removeItem('email')
    }

  }

  validarToken(): Observable<boolean>{
      const token = localStorage.getItem('token') || '';
     return this.http.get(`${base_url}/login/renew`,{
          headers:{
            'x-token': token,
          }
      }).pipe(
          tap((resp: any)=>{

            const {nombre,apellido,tipoDocumento,numeroDocumento,celular,tipoUsuario,email,role,estado,uid,img
                  } = resp.persona;

            this.persona = new Persona(nombre,apellido,tipoDocumento,numeroDocumento,tipoUsuario,celular,email,'',uid,img,role,estado);
            localStorage.setItem('token',resp.token);
            localStorage.setItem('email',this.persona.email);
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

  consultarPersona(email: string){
    const token = localStorage.getItem('token') || '';
    return this.http.get<any>(`${base_url}/personas/${email}`,{
      headers:{
        'x-token': token
      }
    });
  }
}

