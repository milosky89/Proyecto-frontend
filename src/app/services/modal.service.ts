import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CargarMascotas } from '../interface/cargar-mascotas.interface';
import { Mascota } from '../models/mascota.model';
import { Persona } from '../models/persona.model';
import { MascotasService } from './mascotas.service';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private _ocultarModal:boolean = true;
  public mascota :Mascota;
  public persona: Persona;
  public id: string;

  get ocultarModal(){
      return this._ocultarModal;
  }

  abrirModal(){
    this._ocultarModal = false;

  }

  cerrarModal(){
    this._ocultarModal = true
  }

  constructor(private http: HttpClient,
    private mascotaService:MascotasService) {

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


  consultarMascota(id: string){
    this.id = id;
    const url = `${base_url}/mascotas/consulta/${id}`
    return this.http.get<any>(url, this.headers)

  }


}
