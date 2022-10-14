import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { Mascota } from '../../models/mascota.model';
import { MascotasService } from '../../services/mascotas.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.scss']
})
export class InformacionComponent implements OnInit {

  public totalmascotas: number = 0;
  public mascotas:Mascota[] = [];
  public mascotasTemp:Mascota[] = [];
  public desde : number= 0;
  public cargando: boolean = true;

  constructor(private personaServices:PersonaService,
              private mascotaServices: MascotasService) { }

  ngOnInit(): void {

    this.cargarMascotas();

  }

  cargarMascotas(){
    this.cargando = true;
    this.personaServices.cargarMascotas(this.desde)
    .subscribe( ({total,mascotas}) =>{
        this.totalmascotas = total;
        this.mascotas = mascotas;
        this.mascotasTemp = mascotas;
        this.cargando = false;
    })
  }

  cambiarPagina(valor:number){
    this.desde += valor;

    if(this.desde < 0){
      this.desde = 0;
    }else if(this.desde >= this.totalmascotas){
      this.desde -= valor;
    }
    this.cargarMascotas();
  }

  buscar( termino: string){

    if( termino.length === 0){
        return this.mascotas = this.mascotasTemp;
    }

    this.mascotaServices.buscar('mascotas',termino)
          .subscribe(resultado => {
              this.mascotas = resultado;
          })
          return true
  }


}
