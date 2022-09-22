import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  nombreUsuario:Persona| undefined;

  constructor(private personaService: PersonaService,
              private router: Router) { }


    ngOnInit(): void {
    }


    logout(){

        Swal.fire({
          title: 'Información',
          text: "¿Desea salir de la plataforma?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Cerrar sesión'
        }).then((result) => {
          if (result.isConfirmed) {
           this.personaService.logout();
           this.router.navigateByUrl('/login');
          }
        })
    }

}
