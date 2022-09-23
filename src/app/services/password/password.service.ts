import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(public http: HttpClient) { }


  reestablecerContrasena( password: string, token: string){

    let url = base_url + '/resetpass/a';

    let headers: HttpHeaders = new HttpHeaders({
      'x-token': token
    })

    let body = {'clave':password};
    //let body = JSON.stringify(datos)

    console.log(body)
    return this.http.put(url, body, {headers:headers})
      .pipe(
        map(
          (resp: any) => {
            console.log(body)
            Swal.fire("Contraseña Modificada", "Su contraseñaa fue modificada exitosamente", "success");
            console.log(resp);
            return resp.ok;

          }
        ));

  }
}
