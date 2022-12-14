import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CamposService } from 'src/app/auth/register/persona/services/campos.service';
import { Mascota } from 'src/app/models/mascota.model';
import { MascotasService } from 'src/app/services/mascotas.service';
import { ModalService } from '../../services/modal.service';
import Swal from 'sweetalert2';


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
  idMas: string;

  public mascota: Mascota;
  public mascotaForm: FormGroup;
  public fomrSubmitted = false;

  constructor(public modalService: ModalService,
    private camposService: CamposService,
    private fb: FormBuilder,
    private mascotaService: MascotasService,
  ) {
    this.mascota = mascotaService.mascota;
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

  consultaMascota(mascota: Mascota) {
    this.mascota = mascota;
    this.modalService.abrirModal();
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
  actualizarMascota() {
    console.log(this.mascotaForm.value);
    this.mascotaService.actualizarMascota(this.mascotaForm.value, this.mascota._id)
      .subscribe({
        next: (resp) => {
          this.cerrarModal();
          Swal.fire({
            icon: 'success',
            title: 'mascota modificada exitosamente',
            showConfirmButton: false,
            timer: 1500
          })
        },
        error: (err) => {
          this.cerrarModal();
          Swal.fire('Error', err.error.msg, 'error');
        }
      })
  }
}
