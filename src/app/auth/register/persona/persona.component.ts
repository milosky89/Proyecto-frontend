import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { CamposService } from './services/campos.service';
import { PersonaService } from '../../../services/persona.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  public fomrSubmitted = false;

  public usuarioForm:FormGroup = this.fb.group({

    nombre: ['', Validators.required,],
    apellido: ['',Validators.required],
    tipoDocumento: ['',Validators.required],
    numeroDocumento: ['',[Validators.required, Validators.minLength(3)]],
    ciudad: ['',Validators.required,],
    direccion: ['',Validators.required],
    comuna: ['',Validators.required],
    celular: ['',Validators.required],
    email: ['',[Validators.required, Validators.minLength(3),Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    clave:['',[Validators.required, Validators.minLength(5),Validators.maxLength(8)]]
  });


  //Llenar selectores
  tipoDocumentos: string[] =[];
  comunas: String[] = [];

  constructor(private fb: FormBuilder,
              private camposService:CamposService,
              private personaService: PersonaService,
              private router: Router) { }

  ngOnInit(): void {
      this.tipoDocumentos = this.camposService.tipoDocumentos;
      this.comunas = this.camposService.comunas;
  }

  crearPersona(){
    this.fomrSubmitted = true;
    console.log(this.usuarioForm.value);

    if(this.usuarioForm.invalid){
      console.log('invalido');
      return;
    }
    //Realizar posteo
    this.personaService.crearPersona(this.usuarioForm.value).subscribe({
      next: (resp) =>{
        //console.log('Usuario persona creado exitosamente'),
        //console.log(resp);
        Swal.fire({
          icon: 'success',
          title: 'Usuario Creado exitosamente',
          showConfirmButton: false,
          timer: 1500
        })

        //Navegar al dashboard
        this.router.navigateByUrl('/');
      },
      error: (err) => {
        Swal.fire('Error',err.error.msg, 'error');
        }})
    }


  campoNoValido(campo:string): boolean{

    if(this.usuarioForm.get(campo)?.invalid && this.fomrSubmitted){
      return true;
    }else{
      return false;
    }
  }


}


