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

  private _comunas: string[] = [
    'Comuna 1 - Popular',
    'Comuna 2 - Santa Cruz',
    'Comuna 3 - Marinque',
    'Comuna 4 - Aranjuez',
    'Comuna 5 - Castilla',
    'Comuna 6 - Doce de octubre',
    'Comuna 7 - Robledo',
    'Comuna 8 - Villa Hermosa',
    'Comuna 9 - Buenos Aires',
    'Comuna 10 - La Candelaria',
    'Comuna 11 - Laureles Estadio',
    'Comuna 12 - La América',
    'Comuna 13 - San Javier',
    'Comuna 14 - El Poblado',
    'Comuna 15 - Guayabal',
    'Comuna 16 - Belén',
    'Comuna 50 - San Sebastián de Palmitas',
    'Comuna 60 - San Cristóbal',
    'Comuna 70 - Altavista',
    'Comuna 80 - San Antonio de Prado',
    'Comuna 90 - Santa Elena',
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
    'Edad',
    'Estado actual',
    'Adquisición',
    'Esquema de vacunación',
    'Esterilizacion',
    'Sexo'
  ];

  get variables(): string[]{
    return[...this._variables];
  }

}
