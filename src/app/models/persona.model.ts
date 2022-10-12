import { environment } from '../../environments/environment';

const base_url = environment.base_url;

export class Persona {

    constructor(

      public nombre: string,
      public apellido: string,
      public tipoDocumento: string,
      public numeroDocumento: string,
      public tipoUsuario: string,
      public celular: string,
      public email: string,
      public clave: string,
      public uid?: string,
      public img? : string,
      public role?: string,
      public estado?:string,
      ){}

      get imagenUrl() {
        // /upload/personas/no-image
        if(this.img){
          return `${base_url}/upload/personas/${this.img}`;
        }else{
          return `${base_url}/upload/personas/no-image`;
        }

      }
}
