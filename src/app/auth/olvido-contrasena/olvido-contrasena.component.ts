import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MailService } from '../../services/mail/mail.service';

@Component({
  selector: 'app-olvido-contrasena',
  templateUrl: './olvido-contrasena.component.html',
  styleUrls: ['./olvido-contrasena.component.scss']
})
export class OlvidoContrasenaComponent implements OnInit {

  forma: FormGroup;

  constructor(public mailService: MailService,
              private router: Router) { }

  ngOnInit() {

    this.forma = new FormGroup({
      'email': new FormControl('', Validators.required)
    });
  }
  enviarCorreo() {

    console.log('email', this.forma.value.email);


    this.mailService.sendMailForgetPassword(this.forma.value.email)
      .subscribe((resp: any) =>
      {
        console.log(resp)
        this.router.navigateByUrl('/login');
      });



  }
}
