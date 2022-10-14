import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CargarMascotas } from '../interface/cargar-mascotas.interface';
import { map } from 'rxjs';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  constructor(private http: HttpClient) { }

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


}

