import { Injectable } from "@angular/core"

@Injectable()
export class CamposService{

  private _tipoDocumentos: string[] = ['Pasaporte','Cédula de ciudadanía'];

  get tipoDocumentos(): string[]{
    return[...this._tipoDocumentos];
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

}
