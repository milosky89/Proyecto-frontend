import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordService } from '../../services/password/password.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-nueva-clave',
  templateUrl: './nueva-clave.component.html',
  styleUrls: ['./nueva-clave.component.scss']
})
export class NuevaClaveComponent implements OnInit {

  forma: FormGroup;
  token: string;

  constructor(public passwordService: PasswordService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.forma = new FormGroup({
      'password': new FormControl()
    });


  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) =>{
      console.log(params['token']);
      this.token = params['token'];

    })
  }

  resetPassword() {
    let password = this.forma.value.password;
    let token = this.token;
    this.passwordService.reestablecerContrasena(password, token)
      .subscribe({
        next:(resp: any) =>{
          resp
          Swal.fire({
            icon: 'success',
            title: 'Cambio de contraseña exitoso',
            showConfirmButton: false,
            timer: 3000
          })
          this.router.navigateByUrl('/login');
        },
        error: (err) => {
          Swal.fire('Error',err.error.msg, 'error');
          }})
      }
    }

