import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CamposService } from 'src/app/auth/register/persona/services/campos.service';
import { Mascota } from '../../models/mascota.model';
import Swal from 'sweetalert2';
import { MascotasService } from '../../services/mascotas.service';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { CargarMascotas } from '../../interface/cargar-mascotas.interface';
import { Persona } from '../../models/persona.model';
import { Subscription } from 'rxjs';
import { PersonaService } from '../../services/persona.service';

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
  public imgUrl = '';
  public imgTemp: string | ArrayBuffer;
  public mascota: Mascota;
  public cargando: boolean = true;
  public persona: Persona;
  public id: string;
  public mascotas: Mascota[] = [];





  constructor(private camposService: CamposService,
    private masctoService: MascotasService,
    private fb: FormBuilder,
    private fileUploadService: FileUploadService,
    private personaService: PersonaService) {
    this.id = personaService.persona.uid

  }

  ngOnInit(): void {
    this.cargarMascotas();

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

  cargarMascotas() {
    this.masctoService.cargarMascotas(this.id).subscribe(({mascotas}) => {
      this.mascotas = mascotas
    })
  }

  limpiar() {
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



  crearMascota() {
    this.fomrSubmitted = true;

    if (this.mascotaForm.invalid) {
      console.log('invalido');
      return;
    }
    //Realizar posteo
    this.masctoService.crearMascota(this.mascotaForm.value).subscribe({
      next: (resp) => {
        Swal.fire({
          icon: 'success',
          title: 'Mascota Creada exitosamente',
          showConfirmButton: false,
          timer: 1500
        })

        this.limpiar()
      },
      error: (err) => {
        Swal.fire('Error', err.error.msg, 'error');
      }
    })


  }

  campoNoValido(campo: string): boolean {

    if (this.mascotaForm.get(campo)?.invalid && this.fomrSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  cambiarImagen(event) {
    this.imagenSubir = event.target.files[0];
    console.log(event);

    if (!this.imagenSubir) {
      return this.imgTemp = null;
    }
    const reader = new FileReader();
    reader.readAsDataURL(this.imagenSubir);
    reader.onloadend = () => {
      this.imgTemp = reader.result;
    }
  }

  subirImagen() {
    this.fileUploadService.actualizarFoto(this.imagenSubir, 'mascotas', this.mascota._id)
      .then(img => this.mascota.img = img),
      Swal.fire({
        icon: 'success',
        title: 'Imagen cargada exitosamente',
        showConfirmButton: false,
        timer: 1500
      });
    window.location.reload();
  }


}
