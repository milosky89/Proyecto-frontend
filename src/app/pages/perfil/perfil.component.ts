import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { CamposService } from 'src/app/auth/register/persona/services/campos.service';
import { Persona } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { PerfilForm } from '../../interface/mi-perfil.interface';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FileUploadService } from '../../services/file-upload.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  public persona:Persona;
  public imgUrl = '';
  public prueba: string = "";
  public tipoDocumentos: string[] =[];
  public tipoUsuarios: string[] = [];
  public estadoUsuarios: string[] = [];

  public perfilForm: FormGroup;
  public fomrSubmitted = false;
  public imagenSubir: File;
  public imgTemp: string | ArrayBuffer;

  public perro: any;
  public gato: any;

  constructor(private personaService: PersonaService,
              private camposService:CamposService,
              private fb: FormBuilder,
              private fileUploadService: FileUploadService) {

    this.persona = personaService.persona;
    this.imgUrl = personaService.persona.imagenUrl;

  }

  ngOnInit(): void {

    this.consultarPersona()
    this.tipoDocumentos = this.camposService.tipoDocumentos;
    this.tipoUsuarios = this.camposService.tipoUsuarios;
    this.estadoUsuarios = this.camposService.estadosUsuario;
    this.contadorMascotas();


     this.perfilForm = this.fb.group({
        nombre: ['', Validators.required, ],
        apellido: ['',Validators.required],
        tipoDocumento: ['',Validators.required],
        numeroDocumento: ['',[Validators.required, Validators.minLength(3)]],
        tipoUsuario: [{value: '', disabled: true},],
        celular: ['',Validators.required],
        email: ['',[Validators.required, Validators.minLength(3),Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        clave:[{value: '', disabled: true},],
        estado: [{value: '', disabled: true},],
        role: [{value: '', disabled: true}, Validators.required, ],
      });


  }


  consultarPersona() {
    let email = localStorage.getItem('email');
    this.personaService.consultarPersona(email).subscribe(resp => {
      this.persona = resp.persona;
      let hola = this.persona.tipoUsuario;
    })
  }

  actualizarPerfil(){

    console.log(this.perfilForm.value);
    this.personaService.actualizarPerfil(this.perfilForm.value)
        .subscribe({next: (resp) =>{
          const { nombre,apellido} = this.perfilForm.value;
          this.persona.nombre = nombre;
          this.persona.apellido = apellido;

          Swal.fire({
            icon: 'success',
            title: 'Usuario modificado exitosamente',
            showConfirmButton: false,
            timer: 1500
          })
          window.location.reload();
        },
        error: (err) => {
          Swal.fire('Error',err.error.msg, 'error');
          }})

  }

  cambiarImagen(event){
    this.imagenSubir = event.target.files[0];
    console.log(event);

    if(!this.imagenSubir){
      return this.imgTemp = null;
    }
    const reader = new FileReader();
    reader.readAsDataURL(this.imagenSubir);
    reader.onloadend = () => {
      this.imgTemp = reader.result;
    }



  }


  campoNoValido(campo:string): boolean{

    if(this.perfilForm.get(campo)?.invalid && this.fomrSubmitted){
      return true;
    }else{
      return false;
    }
  }

  subirImagen(){
    this.fileUploadService.actualizarFoto(this.imagenSubir,'personas', this.persona.uid)
                          .then(img => this.persona.img = img),
                            Swal.fire({
                              icon: 'success',
                              title: 'Imagen cargada exitosamente',
                              showConfirmButton: false,
                              timer: 1500
                            });
                            window.location.reload();
  }

  public contadorMascotas(){
    this.personaService.getMascotasPersonas()
        .subscribe(({values})=>{

          this.perro = values[0];
          this.gato = values[1]
        })


  }

}
