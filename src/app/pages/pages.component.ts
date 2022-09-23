import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona.model';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
})
export class PagesComponent implements OnInit {

  public usuario:Persona|undefined;

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.consultarPersona();
  }

  consultarPersona(){
    let email = localStorage.getItem('email')
    this.personaService.consultarPersona(email)
    .subscribe(res =>{
      this.usuario = res.persona
    })
  }

}

