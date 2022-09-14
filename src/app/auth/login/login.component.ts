import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { PersonaService } from '../../services/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  public fomrSubmitted = false;

  public loginForm:FormGroup = this.fb.group({

    email: [localStorage.getItem('email') || '',[Validators.required, Validators.minLength(3),Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    clave:['',[Validators.required, Validators.minLength(5),Validators.maxLength(8)]],
    recordarme: [false]
  });

  constructor(private router: Router,
              private fb: FormBuilder,
              private personaService: PersonaService) { }

  login(){

    this.personaService.login(this.loginForm.value).subscribe({
      next: (resp) =>{

        if( this.loginForm.get('recordarme')?.value){
          localStorage.setItem('email', this.loginForm.get('email')?.value)
        }else{
          localStorage.removeItem('email')
        }
        Swal.fire({
          icon: 'success',
          title: 'Bienvenido a Medellín Mascotas',
          showConfirmButton: false,
          timer: 1500
        })
        //Navegar al dashboard
        this.router.navigateByUrl('/');
        //console.log('Usuario autenticado'),
        //console.log(resp);
      },
      error: (err) => {
        Swal.fire('Error',err.error.msg, 'error');
        }})
    }

  }

