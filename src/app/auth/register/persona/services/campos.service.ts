import { Injectable } from "@angular/core"

@Injectable()
export class CamposService{

  private _tipoDocumentos: string[] = ['Pasaporte','Cédula de ciudadanía'];

  get tipoDocumentos(): string[]{
    return[...this._tipoDocumentos];
  }

  private _tipoUsuarios: string[] = ['Persona','Empresa'];

  get tipoUsuarios(): string[]{
    return[...this._tipoUsuarios];
  }

  private _especie: string[] = ['Perro','Gato'];

  get especie(): string[]{
    return[...this._especie];
  }

  private _caracteristica: string[] = ['Criollo','Raza'];

  get caracteristica(): string[]{
    return[...this._caracteristica];
  }

  private _sexo: string[] = ['Macho','Hembra'];

  get sexo(): string[]{
    return[...this._sexo];
  }

  private _pregunta: string[] = ['Si','No'];

  get pregunta(): string[]{
    return[...this._pregunta];
  }

  private _estado: string[] = ['Vivo','Muerto','Perdido','En Adopción'];

  get estado(): string[]{
    return[...this._estado];
  }

  private _adquisicion: string[] = ['Compra','Adopción'];

  get adquisicion(): string[]{
    return[...this._adquisicion];
  }

  private _habita: string[] = ['Casa','Finca','Apartamento'];

  get habita(): string[]{
    return[...this._habita];
  }


  private _alimentacion: string[] = ['Casero','Concentrado','Mixto']

  get alimentacion(): string[]{
    return[...this._alimentacion];
  }

  private _graficos: string[] = ['Barras','Circular']

  get graficos(): string[]{
    return[...this._graficos];
  }

  private _comunas: string[] = [
    'Comuna 1',
    'Comuna 2',
    'Comuna 3',
    'Comuna 4',
    'Comuna 5',
    'Comuna 6',
    'Comuna 7',
    'Comuna 8',
    'Comuna 9',
    'Comuna 10',
    'Comuna 11',
    'Comuna 12',
    'Comuna 13',
    'Comuna 14',
    'Comuna 15',
    'Comuna 16',
    'Comuna 50',
    'Comuna 60 - San Cristóbal',
    'Comuna 70',
    'Comuna 80',
    'Comuna 90',
  ];

  get comunas(): string[]{
    return[...this._comunas];
  }

  private _estadoUsuarios: string[] = ['Activo','Inactivo'];

  get estadosUsuario(): string[]{
    return[...this._estadoUsuarios];
  }

  private _variables: string[] = [
    'Tipo de mascota',
    'Adquisición',
    'Sexo',
    'Esterilización',
    'Tipo de Alimentación',
    'Esquema de vacunación',
    'Estado actual',

  ];

  get variables(): string[]{
    return[...this._variables];
  }

}
