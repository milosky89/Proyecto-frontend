import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CamposService } from 'src/app/auth/register/persona/services/campos.service';
import { Persona } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

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

  constructor(private personaService: PersonaService,
              private camposService:CamposService,
              private fb: FormBuilder) {

    this.persona = personaService.persona;
    this.imgUrl = personaService.persona.imagenUrl;

  }

  ngOnInit(): void {

    this.consultarPersona()
    this.tipoDocumentos = this.camposService.tipoDocumentos;
    this.tipoUsuarios = this.camposService.tipoUsuarios;
    this.estadoUsuarios = this.camposService.estadosUsuario;



     this.perfilForm = this.fb.group({
        nombre: ['', Validators.required, ],
        apellido: ['',Validators.required],
        tipoDocumento: ['',Validators.required],
        numeroDocumento: ['',[Validators.required, Validators.minLength(3)]],
        tipoUsuario: [{value: '', disabled: true},Validators.required],
        celular: ['',Validators.required],
        email: ['',[Validators.required, Validators.minLength(3),Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        clave:['',[Validators.required, Validators.minLength(5),Validators.maxLength(8)]],
        estado: ['', Validators.required,],
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

  }


  campoNoValido(campo:string): boolean{

    if(this.perfilForm.get(campo)?.invalid && this.fomrSubmitted){
      return true;
    }else{
      return false;
    }
  }



}
