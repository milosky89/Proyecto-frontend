import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CamposService } from 'src/app/auth/register/persona/services/campos.service';
import { Mascota } from 'src/app/models/mascota.model';
import { MascotasService } from 'src/app/services/mascotas.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {


  especie: string[] = [];
  caracteristica: string[] = [];
  sexo: string[] = [];
  pregunta: string[] = [];
  comuna: string[] = [];
  habita: string[] = [];
  alimentacion: string[] = [];
  adquisicion: string[] = [];
  estado: string[] = [];

  public mascota: Mascota;
  public id: string;
  public mascotaForm: FormGroup;
  public fomrSubmitted = false;

  constructor(public modalService: ModalService,
              private camposService:CamposService,
              private fb: FormBuilder,
              private mascotaService: MascotasService,
             ) {


            }

  ngOnInit(): void {

    this.especie = this.camposService.especie;
    this.caracteristica = this.camposService.caracteristica;
    this.sexo = this.camposService.sexo;
    this.pregunta = this.camposService.pregunta;
    this.comuna = this.camposService.comunas;
    this.habita = this.camposService.habita;
    this.alimentacion = this.camposService.alimentacion;
    this.adquisicion = this.camposService.adquisicion;
    this.estado = this.camposService.estado;

    this.mascotaForm = this.fb.group({
      nombreMascota: ['', Validators.required,],
      especie: ['', Validators.required,],
      caracteristica: ['', Validators.required,],
      sexo: ['', Validators.required,],
      microChip: ['', Validators.required,],
      edad: ['', Validators.required,],
      vacunacion: ['', Validators.required,],
      direccion: ['', Validators.required,],
      comuna: ['', Validators.required,],
      esterilizacion: ['', Validators.required,],
      habita: ['', Validators.required,],
      tipoAlimentacion: ['', Validators.required,],
      adquisicion: ['', Validators.required,],
      estado: ['', Validators.required,]
    });
  }

  cerrarModal() {
    this.modalService.cerrarModal();
  }

  campoNoValido(campo: string): boolean {

    if (this.mascotaForm.get(campo)?.invalid && this.fomrSubmitted) {
      return true;
    } else {
      return false;
    }
  }




}
