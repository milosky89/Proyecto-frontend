import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class MailService {

  //mail: Mail;

  constructor(public http: HttpClient) { }

  sendMailForgetPassword( to: String ){

    let url = base_url + '/mail/cambiarPassword';
    return this.http.post(url, { to })
      .pipe(
        map(
          (resp: any) => {
            Swal.fire("Correo Enviado", "Por favor revise su correo", "success");
            console.log(resp);
            return resp.ok;

          }
        ));
  }
}
