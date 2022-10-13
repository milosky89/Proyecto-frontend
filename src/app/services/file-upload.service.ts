import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor() { }

  async actualizarFoto(archivo: File,tipo: 'personas'|'mascotas', id: String,){

    try {

      const url = `${base_url}/upload/${tipo}/${id}`;
      const formData = new FormData();
      formData.append('imagen',archivo);

      const resp = fetch(url,{
        method: 'PUT',
        headers: {
          'x-token': localStorage.getItem('token')
        },
        body: formData
      });

      const data = await (await resp).json();
      if(data.ok){
        return data.nombreArchivo;
      }else{
        console.log(data.msg);
        return false
      }

    } catch (error) {
      console.log(error);

      return false
    }

  }
}
