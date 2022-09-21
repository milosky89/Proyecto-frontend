
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType,  } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';
import { BaseChartDirective } from 'ng2-charts';
import ChartDataLabels from 'chartjs-plugin-datalabels';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public argumento1: any;
  public argumento2: any;
  public argumento3: any;

  constructor(private graficasService:GraficasService) { }

  ngOnInit(): void {

    this.graficasService.getUsuarios()
        .subscribe(({labels, values}) => {
          this.barChartData.labels = labels;
          this.barChartData.datasets = this.argumento1=[{data: Object.values(values),label: 'Registrados',backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 99, 132, 0.2)'] }];
          this.argumento1 = values[0];
          this.argumento2 = values[1];
          this.argumento3 = values[2];
          this.chart?.update();
        });


  }

  // Grafica de usuarioos

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
    labels: [ 'Personas', 'Empresas', 'Total' ],
    datasets: [
      { data: [  ],
        label: 'Registrados',
        backgroundColor: []
      }
    ]
  };


  // Grafica de mascotas

  public barChartOptions2: ChartConfiguration['options'] = {
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
  public barChartType2: ChartType = 'bar';
  public barChartPlugins2 = [
    ChartDataLabels
  ];

  public barChartData2: ChartData<'bar'> = {
    labels: [ 'Perros', 'Gatos', 'Total' ],
    datasets: [
      { data: [ 4,2,6  ], label: 'Mascotas' },

    ]
  };

}
