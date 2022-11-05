
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

  public mascotas1: any;
  public mascotas2: any;
  public mascotas3: any;

  constructor(private graficasService:GraficasService) {

  }

  ngOnInit(): void {

    this.graficaMascotas();
    this.graficaUsuarios();
  }



  public graficaUsuarios(){

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


  public graficaMascotas(){

    this.graficasService.getMascotas()
        .subscribe(({labels, values}) => {
          this.barChartData2.labels = labels;
          this.barChartData2.datasets = this.mascotas1=[{data: Object.values(values),label: 'Registrados',backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 99, 132, 0.2)'] }];
          this.mascotas1 = values[0];
          this.mascotas2 = values[1];
          this.mascotas3 = values[2];
          this.chart?.update();
        });


  }

  // Grafica de usuarios

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
        display: false,
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
    labels: [  ],
    datasets: [
      { data: [  ],
        label: 'Usuarios Registrados',
        backgroundColor: []
      }
    ]
  };


  // Grafica de mascotas

  public barChartData2: ChartData<'bar'> = {

    labels: [ 'Perros', 'Gatos', 'Total' ],
    datasets: [
      { data: [  ],
        label: 'Mascotas Registradas',
        backgroundColor: []
      }
    ]
  };

}
