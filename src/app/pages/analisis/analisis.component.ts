import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChartConfiguration, ChartData, ChartEvent, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CamposService } from 'src/app/auth/register/persona/services/campos.service';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { AnalisisService } from '../../services/analisis.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.scss']
})
export class AnalisisComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public fomrSubmitted = false;
  //public variable : string;
  public argumento1: any [] = []
  public argumento2: any [] = [];
  public argumento3: any [] = [];


  public graficaForm:FormGroup = this.fb.group({

    listaVariables: ['', Validators.required,],

  });

  //Llenar selectores
  listaVariables: string[] =[];

  constructor(private fb: FormBuilder,
              private camposService: CamposService,
              private analisisGrafico: AnalisisService) {

              }

  ngOnInit(): void {
    this.listaVariables = this.camposService.variables;
  }




  grafica(){
    this.fomrSubmitted = true;
    this.graficaForm.value;

     this.graficaForm.value
    console.log('tipo', this.graficaForm.value);


      this.analisisGrafico.getTipo()
      .subscribe(({labels,values,}) =>{
        this.argumento1 = values[0];
        this.argumento2 = values[1];
        this.argumento3 = values[2];


          console.log('Comunas',this.argumento1);
          console.log('perros',this.argumento2);
          console.log('gatos',this.argumento2);



      })



  }

  grafica2(){

      this.analisisGrafico.getTipo()
      .subscribe(data =>{
        this.argumento1 = data.values[0];
        this.argumento2 = data.values[1];
        this.argumento3 = data.values[2];
        //let lista1 = (JSON.stringify(this.argumento1));
        //let lista2 = (JSON.stringify(this.argumento2));
        //let lista3 = (JSON.stringify(this.argumento3));
        //let resultado :any [] = []
        this.argumento1.forEach(res => {
        console.log(this.argumento1);

        })

      })

    }

    prueba(){

    }

}




