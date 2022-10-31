import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChartConfiguration, ChartData, ChartEvent, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CamposService } from 'src/app/auth/register/persona/services/campos.service';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.scss']
})
export class AnalisisComponent implements OnInit {

  public fomrSubmitted = false;

  public graficaForm:FormGroup = this.fb.group({

    listaVariables: ['', Validators.required,],

  });

  //Llenar selectores
  listaVariables: string[] =[];

  constructor(private fb: FormBuilder,
              private camposService: CamposService,) { }

  ngOnInit(): void {
    this.listaVariables = this.camposService.variables;
  }



  // grafica Barras

  title = 'chartAngular';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [
    'Comuna 1 - Popular',
    'Comuna 2 - Santa Cruz',
    'Comuna 3 - Marinque',
    'Comuna 4 - Aranjuez',
    'Comuna 5 - Castilla',
    'Comuna 6 - Doce de octubre',
    'Comuna 7 - Robledo',
    'Comuna 8 - Villa Hermosa',
    'Comuna 9 - Buenos Aires',
    'Comuna 10 - La Candelaria',
    'Comuna 11 - Laureles Estadio',
    'Comuna 12 - La América',
    'Comuna 13 - San Javier',
    'Comuna 14 - El Poblado',
    'Comuna 15 - Guayabal',
    'Comuna 16 - Belén',
    'Comuna 50 - San Sebastián de Palmitas',
    'Comuna 60 - San Cristóbal',
    'Comuna 70 - Altavista',
    'Comuna 80 - San Antonio de Prado',
    'Comuna 90 - Santa Elena', ],
    datasets: [
      { data: [330, 600, 260, 700,567,345,120, 455, 100, 340,678,567,120,140,500,700,900,78,366,669,758], label: 'Perros' },
      { data: [120, 455, 100, 340,678,567,330, 600, 260, 700,567,345,140,40,200,150,90,78,66,619,458], label: 'Gatos' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };
/*
  //contenido
  chartData = [
    {
      data: [330, 600, 260, 700,567,345,120, 455, 100, 340,678,567,120,140,500,700,900,78,366,669,758],
      label: 'Perros'
    },
    {
      data: [120, 455, 100, 340,678,567,330, 600, 260, 700,567,345,140,40,200,150,90,78,66,619,458],
      label: 'Gatos'
    },

  ];

  //Etiquetas
  chartLabels = [
    'Comuna 1 - Popular',
    'Comuna 2 - Santa Cruz',
    'Comuna 3 - Marinque',
    'Comuna 4 - Aranjuez',
    'Comuna 5 - Castilla',
    'Comuna 6 - Doce de octubre',
    'Comuna 7 - Robledo',
    'Comuna 8 - Villa Hermosa',
    'Comuna 9 - Buenos Aires',
    'Comuna 10 - La Candelaria',
    'Comuna 11 - Laureles Estadio',
    'Comuna 12 - La América',
    'Comuna 13 - San Javier',
    'Comuna 14 - El Poblado',
    'Comuna 15 - Guayabal',
    'Comuna 16 - Belén',
    'Comuna 50 - San Sebastián de Palmitas',
    'Comuna 60 - San Cristóbal',
    'Comuna 70 - Altavista',
    'Comuna 80 - San Antonio de Prado',
    'Comuna 90 - Santa Elena',
  ];

  chartOptions = {
    responsive: true
  };
*/


// Grafica de pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ [ 'Macho' ], [ 'Hembra' ] ];
  public pieChartDatasets = [ {
    data: [ 200, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
}
