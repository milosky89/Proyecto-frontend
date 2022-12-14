import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { personaForm } from '../interface/registro-persona.interface';
import { environment } from '../../environments/environment';
import { LoginForm } from '../interface/login-form.interface';
import {catchError, tap} from 'rxjs/operators'
import { map, Observable, of } from 'rxjs';
import { Persona } from '../models/persona.model';
import { PerfilForm } from '../interface/mi-perfil.interface';
import { CargarMascotas } from '../interface/cargar-mascotas.interface';
import Swal from 'sweetalert2';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  public persona: Persona | undefined;
  public perro: any;
  public gato: any;

  constructor(private http: HttpClient) { }


  get token():string {
    return localStorage.getItem('token') || '';
  }

  get uid(): string {
    return this.persona.uid || '';
  }

  get headers() {
    return {
      headers:{
        'x-token': this.token,
      }
    }
  }


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

     return this.http.get(`${base_url}/login/renew`,{
          headers:{
            'x-token': this.token,
          }
      }).pipe(
          map((resp: any)=>{

            const {nombre,apellido,tipoDocumento,numeroDocumento,celular,tipoUsuario,email,role,estado,uid,img
                  } = resp.persona;

            this.persona = new Persona(nombre,apellido,tipoDocumento,numeroDocumento,tipoUsuario,celular,email,'',uid,img,role,estado);
            localStorage.setItem('token',resp.token);
            localStorage.setItem('email',this.persona.email);
            return true;
          }),

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

  actualizarPerfil(formData: PerfilForm){

    formData = {
      ...formData,
      role: this.persona.role,
      clave: this.persona.clave,
      tipoUsuario: this.persona.tipoUsuario

    }

    return this.http.put(`${base_url}/personas/${this.uid}`, formData,{
      headers:{
        'x-token': this.token,
      }
    })

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

  mascotasPersonas(){
    return this.http.get(`${base_url}/mascotas/count/${this.uid}`);
  }

  getMascotasPersonas(){
    return this.mascotasPersonas()
              .pipe(
                map(data => {
                  const values = Object.values(data);
                  return {values};
                })
                )

  }


  cargarMascotas(desde: number= 0){

    const url = `${base_url}/mascotas?desde=${desde}`;
    return this.http.get<CargarMascotas>(url, this.headers)
  }

  eliminarUsuario(persona:Persona){

    //http://localhost:3000/api/personas/630fc084dff8bee6e9526923
    const url = `${base_url}/personas/${persona.uid}`;
    return this.http.delete(url, this.headers)


  }

}

