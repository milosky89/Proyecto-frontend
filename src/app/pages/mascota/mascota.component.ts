import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CamposService } from 'src/app/auth/register/persona/services/campos.service';
import { Mascota } from '../../models/mascota.model';
import Swal from 'sweetalert2';
import { MascotasService } from '../../services/mascotas.service';

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
              private masctoService: MascotasService,
              private fb: FormBuilder) { }

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

  limpiar(){
    this.mascotaForm = this.fb.group({
      nombreMascota: '',
      especie: '',
      caracteristica: '',
      sexo: '',
      microChip: '',
      edad: '',
      vacunacion: '',
      direccion: '',
      comuna: '',
      esterilizacion: '',
      habita: '',
      tipoAlimentacion: '',
      adquisicion: '',
      estado: '',
    });
  }

  crearMascota(){
    this.fomrSubmitted = true;

    if(this.mascotaForm.invalid){
      console.log('invalido');
      return;
    }
    //Realizar posteo
    this.masctoService.crearMascota(this.mascotaForm.value).subscribe({
      next: (resp) =>{
        Swal.fire({
          icon: 'success',
          title: 'Mascota Creada exitosamente',
          showConfirmButton: false,
          timer: 1500
        })

        this.limpiar()
      },
      error: (err) => {
        Swal.fire('Error',err.error.msg, 'error');
        }})


    }

  campoNoValido(campo:string): boolean{

    if(this.mascotaForm.get(campo)?.invalid && this.fomrSubmitted){
      return true;
    }else{
      return false;
    }
  }

}
