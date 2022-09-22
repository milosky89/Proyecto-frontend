import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  public persona:Persona;

  constructor(private personaService: PersonaService) {

    this.persona = personaService.persona;
  }

  ngOnInit(): void {
  }

}
