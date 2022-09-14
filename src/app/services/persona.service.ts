import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { personaForm } from '../interface/registro-persona.interface';
import { environment } from '../../environments/environment';


const base_url = environment;

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  crearPersona(formData: personaForm){

    console.log('Creando usuario persona');

      return this.http.post(`${base_url}/personas`, formData)


  }
}
