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
  public argumento9: any[] = [];

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
    //this.grafica2();
    this.listaComunas = this.camposService.comunas
  }

  grafica2() {
    //console.log(this.graficaForm.value);
    let mazamorra = this.graficaForm.value
    console.log(mazamorra);

    this.analisisGrafico.getTipo(mazamorra.listaVariables,mazamorra.listaComunas)
      .subscribe(({ labels, values }) => {
        this.barChartData.labels = labels;
        this.barChartData.datasets = [{ data: Object.values(values),label: 'Cantidad',backgroundColor: ["#F0E009", "#BD1616", "#0962C9", "#B34B1C", "#0ABEA0","#C9087263", "#3D0380", "#363636", "#01250C", "#0A7CBE"] }]
        this.argumento1 = values[0]
        this.argumento2 = values[1]
        this.argumento3 = values[2]
        this.argumento4 = values[3]
        this.argumento5 = values[4]
        this.argumento6 = values[5]
        this.argumento7 = values[6]
        this.argumento8 = values[7]
        this.chart.update();
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




