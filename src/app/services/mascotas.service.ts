import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CargarMascotas } from '../interface/cargar-mascotas.interface';
import { map, tap } from 'rxjs';
import { mascotaForm } from '../interface/registro-mascota.interface';
import { Mascota } from '../models/mascota.model';
import { Persona } from '../models/persona.model';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  public mascota :Mascota;
  public persona: Persona;

  constructor(private http: HttpClient) {


  }

  get uid(): string {
    return this.mascota._id || '';
  }
  get token():string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
      headers:{
        'x-token': this.token,
      }
    }
  }

  buscar(tipo: 'mascotas', termino: string ){

    const url = `${base_url}/todo/coleccion/${tipo}/${termino}`;
    //return this.http.get<CargarMascotas>(url, this.headers)
    return this.http.get<any[]>(url, this.headers)
              .pipe(
                  map( (resp : any) => resp.resultados)
                )

  }

  crearMascota(formData: mascotaForm){

    const url =  `${base_url}/mascotas `
    return this.http.post(url, formData , this.headers)

  }

  cargarMascotas(id: string){

    const url = `${base_url}/mascotas/registro/${id}`
    return this.http.get<CargarMascotas>(url, this.headers)
  }

  actualizarMascota(formData: mascotaForm, id: string){
    formData = {
      ...formData
    }
    const url = `${base_url}/mascotas/${id}`
    return this.http.put(url, formData, this.headers)

  }


}
