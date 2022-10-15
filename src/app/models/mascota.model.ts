import { environment } from "src/environments/environment";

interface _PropietarioMascota {
    _id: string,
    nombre: string,
    apellido: string,
    celular: string,
    img: string,
}

const base_url = environment.base_url;

export class Mascota {

constructor(

      public _id: string,
      public nombreMascota: string,
      public especie:string,
      public caracteristica:string,
      public sexo:string,
      public microChip:string,
      public edad:  number,
      public vacunacion:  string,
      public direccion:string,
      public comuna: string,
      public esterilizacion:string,
      public habita:string,
      public tipoAlimentacion:string,
      public adquisicion:string,
      public estado: string,
      public img:string,
      public persona?: _PropietarioMascota,
  ){}

  get imagenMascotaUrl() {
    // /upload/personas/no-image

    /*
    if(this.img){
      return `${base_url}/upload/mascotas/${this.img}`;
    }else{
      return `${base_url}/upload/mascotas/no-image`;
    }
*/

    return this.img = `${base_url}/upload/mascotas/no-image`;

  }

}



