import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordService } from '../../services/password/password.service';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-nueva-clave',
  templateUrl: './nueva-clave.component.html',
  styleUrls: ['./nueva-clave.component.scss']
})
export class NuevaClaveComponent implements OnInit {

  forma: FormGroup;
  token: string;

  constructor(public passwordService: PasswordService,
    private activatedRoute: ActivatedRoute) {
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
      .subscribe((resp: any) => resp);

  }
}

