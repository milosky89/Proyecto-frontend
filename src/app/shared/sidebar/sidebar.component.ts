import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona.model';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {

  public persona : Persona;

  constructor(private personaService: PersonaService) {

    this.persona = personaService.persona;
    console.log(this.persona.role);

  }

  ngOnInit(): void {
  }

}
