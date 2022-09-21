import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators'


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) { }


  contadorUsuarios(){
    return this.http.get(`${base_url}/personas/tipoUsuario/usuarios`);
  }



  getUsuarios(){
    return this.contadorUsuarios()
              .pipe(
                  map(data => {
                    const labels = Object.keys(data)
                    const values = Object.values(data);
                    return { labels,values};
                  })
                );
  }


}
