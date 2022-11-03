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
  public argumento1: any[] = []
  public argumento2: any[] = [];
  public argumento3: any[] = [];
  public argumento4: any[] = [];
  public argumento5: any[] = [];
  public argumento6: any[] = [];
  public argumento7: any[] = [];
  public argumento8: any[] = [];

  public prueba: any[] = [];

  public label1: string;
  public label2: string;
  public label3: string;
  public label4: string;
  public label5: string;
  public label6: string;
  public label7: string;
  public label8: string;
  public label9: string;
  public label10: string;
  public label11: string;
  public label12: string;

  public graficaForm: FormGroup = this.fb.group({

    listaVariables: ['', Validators.required,],
    listaComunas: ['', Validators.required,],

  });

  //Llenar selectores
  listaVariables: string[] = [];
  listaComunas: string[] = [];

  constructor(private fb: FormBuilder,
    private camposService: CamposService,
    private analisisGrafico: AnalisisService) {

  }

  ngOnInit(): void {
    this.listaVariables = this.camposService.variables;
    this.listaComunas = this.camposService.comunas;
  }

  grafica2() {

    let mazamorra = this.graficaForm.value
    this.analisisGrafico.getTipo(mazamorra.listaVariables,mazamorra.listaComunas)
      .subscribe(({ labels, values }) => {

        this.prueba.push(labels,values)
        switch(mazamorra.listaVariables){

          case 'Tipo de mascota':
              this.barChartData.labels = labels;
              this.label1 = labels[0] = 'Perros'
              this.label2 = labels[1] = 'Gatos'
              this.label3 = labels[2] = 'Total de Mascotas'

              this.barChartData.datasets =  this.argumento1 =[{ data: Object.values(values),label: 'Cantidad',backgroundColor: ["#F0E009", "#BD1616", "#0962C9", "#B34B1C", "#0ABEA0","#C9087263", "#3D0380", "#363636", "#01250C", "#0A7CBE"] }]
              this.argumento1 = values[0]
              this.chart.update();
          break;

          case 'Tipo de Alimentación':
            this.barChartData.labels = labels;
            this.label1 = labels[0] = 'Perros - Alimentos concentrados'
            this.label2 = labels[1] = 'Perros - Alimentos caseros'
            this.label3 = labels[2] = 'Perros - Alimentos mixtos'
            this.label4 = labels[3] = 'Gatos - Alimentos concentrados'
            this.label5 = labels[4] = 'Gatos - Alimentos caseros'
            this.label6 = labels[5] = 'Gatos - Alimentos mixtos'
            this.label7 = labels[6] = 'Alimentos concentrados'
            this.label8 = labels[7] = 'Alimentos caseros'
            this.label9 = labels[8] = 'Alimentos mixto'

            this.barChartData.datasets = this.argumento1 =[{ data: Object.values(values),label: 'Cantidad',backgroundColor: ["#F0E009", "#BD1616", "#0962C9", "#B34B1C", "#0ABEA0","#C9087263", "#3D0380", "#363636", "#01250C", "#0A7CBE"] }]
            this.argumento1 = values[0]
            this.chart.update();
        break;

          case 'Sexo':
            this.barChartData.labels = labels;
            this.label1 = labels[0] = 'Perros - Macho'
            this.label2 = labels[1] = 'Perros - Hembra'
            this.label3 = labels[2] = 'Gatos - Macho'
            this.label4 = labels[3] = 'Gatos - Hembra'
            this.label5 = labels[4] = 'Mascotas Macho'
            this.label6 = labels[5] = 'Mascotas Hembra'

            this.barChartData.datasets = this.argumento1 =[{ data: Object.values(values),label: 'Cantidad',backgroundColor: ["#F0E009", "#BD1616", "#0962C9", "#B34B1C", "#0ABEA0","#C9087263", "#3D0380", "#363636", "#01250C", "#0A7CBE"] }]
            this.argumento1 = values[0]
            this.chart.update();
        break;

        case 'Adquisición':
          this.barChartData.labels = labels;
          this.label1 = labels[0] = 'Perros - Comprados'
          this.label2 = labels[1] = 'Perros - Adoptados'
          this.label3 = labels[2] = 'Gatos - Comprados'
          this.label4 = labels[3] = 'Gatos - Adoptados'
          this.label5 = labels[4] = 'Mascotas compradas'
          this.label6 = labels[5] = 'Mascotas Adoptadas'

          this.barChartData.datasets = this.argumento1 =[{ data: Object.values(values),label: 'Cantidad',backgroundColor: ["#F0E009", "#BD1616", "#0962C9", "#B34B1C", "#0ABEA0","#C9087263", "#3D0380", "#363636", "#01250C", "#0A7CBE"] }]
          this.argumento1 = values[0]
          this.chart.update();
      break;

      case 'Esterilización':
          this.barChartData.labels = labels;
          this.label1 = labels[0] = 'Perros - Esterilizados'
          this.label2 = labels[1] = 'Perros - No Esterilizados'
          this.label3 = labels[2] = 'Gatos - Esterilizados'
          this.label4 = labels[3] = 'Gatos - No Esterilizados'
          this.label5 = labels[4] = 'Mascotas Esterilizadas'
          this.label6 = labels[5] = 'Mascotas No Esterilizadas'

          this.barChartData.datasets = this.argumento1 =[{ data: Object.values(values),label: 'Cantidad',backgroundColor: ["#F0E009", "#BD1616", "#0962C9", "#B34B1C", "#0ABEA0","#C9087263", "#3D0380", "#363636", "#01250C", "#0A7CBE"] }]
          this.argumento1 = values[0]
          this.chart.update();
      break;

      case 'Esquema de vacunación':
          this.barChartData.labels = labels;
          this.label1 = labels[0] = 'Perros - Esquema completo'
          this.label2 = labels[1] = 'Perros - Esquema incompleto'
          this.label3 = labels[2] = 'Gatos - Esquema completo'
          this.label4 = labels[3] = 'Gatos - Esquema incompleto'
          this.label5 = labels[4] = 'Mascotas Esquema completo'
          this.label6 = labels[5] = 'Mascotas Esquema incompleto'

          this.barChartData.datasets = this.argumento1 =[{ data: Object.values(values),label: 'Cantidad',backgroundColor: ["#F0E009", "#BD1616", "#0962C9", "#B34B1C", "#0ABEA0","#C9087263", "#3D0380", "#363636", "#01250C", "#0A7CBE"] }]
          this.argumento1 = values[0]
          this.chart.update();
      break;

      case 'Estado actual':
          this.barChartData.labels = labels;
          this.label1 = labels[0] = 'Perros - Vivos'
          this.label2 = labels[1] = 'Perros - Fallecidos'
          this.label3 = labels[2] = 'Perros - Perdidos'
          this.label4 = labels[3] = 'Perros - En Adopción'
          this.label5 = labels[4] = 'Gatos - Vivos'
          this.label6 = labels[5] = 'Gatos - Fallecidos'
          this.label7 = labels[6] = 'Gatos - Perdidos'
          this.label8 = labels[7] = 'Gatos - En Adopción'
          this.label9 = labels[8] = 'Mascotas Vivas'
          this.label10 = labels[9] = 'Mascotan Fallecidas'
          this.label11 = labels[10] = 'Mascotas Perdidas'
          this.label12 = labels[11] = 'Mascotas En Adopción'

          this.barChartData.datasets = this.argumento1 =[{ data: Object.values(values),label: 'Cantidad',backgroundColor: ["#F0E009", "#BD1616", "#0962C9", "#B34B1C", "#0ABEA0","#C9087263", "#3D0380", "#363636", "#01250C", "#0A7CBE"] }]
          this.argumento1 = values[0]
          this.chart.update();
      break;

        }

      })

  }

  //grafica

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    ChartDataLabels
  ];

  public barChartData: ChartData<'bar'> = {
    labels: [ ],
    datasets: [
      {
        data: [],
        label: '',
        backgroundColor: []
      },

    ]
  };


}




