import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CamposService } from 'src/app/auth/register/persona/services/campos.service';
import { Mascota } from '../../models/mascota.model';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.scss']
})
export class MascotaComponent implements OnInit {

  especie: string[] = [];
  caracteristica: string[] = [];
  sexo: string[] = [];
  pregunta: string[] = [];
  comuna: string[] = [];
  habita: string[] = [];
  alimentacion: string[] = [];
  adquisicion: string[] = [];
  estado: string[] = [];

  public mascotaForm: FormGroup;
  public fomrSubmitted = false;
  public imagenSubir: File;
  public imgTemp: string | ArrayBuffer;
  public mascota:Mascota;

  constructor(private camposService: CamposService,
              private fb: FormBuilder) { }

  ngOnInit(): void {

      this.mascotaForm = this.fb.group({
        nombreMascota: [""],
        especie: [""],
        caracteristica: [""],
        sexo: [""],
        microchip: [""],
        edad: [""],
        vacunacion: [""],
        direccion: [""],
        comuna: [""],
        esterilizacion: [""],
        habita: [""],
        tipoAlimentacion: [""],
        adquisicion: [""],
        estado: [""]
      });

  }

}
