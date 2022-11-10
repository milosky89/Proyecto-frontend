import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChartConfiguration, ChartData, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-annotation';
import { NgChartsModule } from 'ng2-charts';
import { CamposService } from 'src/app/auth/register/persona/services/campos.service';
import { AnalisisService } from '../../services/analisis.service';
import ChartDataLabels from 'chartjs-plugin-datalabels';



@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.scss']
})
export class AnalisisComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public fomrSubmitted = false;
  public barChartLabels: NgChartsModule[] ;
  //Tipo de grafico que queremos: ejem: line, bar, radar
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  //Datos que vamos a cargar en las graficas
  public barChartData: ChartDataset[];
  public chartColors;
  private categoria;
  private comuna: string;
  //Arreglo de los datos que vamos a pasar
  private datos = [];
  private gato1 =[]
  private gato2 =[]
  private gato3 =[]
  private gato4 =[]
  private perro1 =[]
  private perro2 =[]
  private perro3 =[]
  private perro4 =[]

  private perroV1: string;
  private perroV2: string;
  private perroV3: string;
  private perroV4: string;
  private gatoV1:string;
  private gatoV2: string;
  private gatoV3:string;
  private gatoV4:string;

  //Arreglo de las categorias que vamos a pasar
  private datosPerros1 = [];
  private datosPerros2 = [];
  private datosPerros3 = [];
  private datosPerros4 = [];
  private datosGato1 = [];
  private datosGato2 = [];
  private datosGato3 = [];
  private datosGato4 = [];
  public cargando: boolean = false;
  public cargando2: boolean = false;

  public mostrarGrafico1 = false;
  public mostrarGrafico2 = false


  public graficaForm: FormGroup = this.fb.group({

    listaVariables: ['',Validators.required],
  });

  public grafica2Form: FormGroup = this.fb.group({

    listaVariables: ['',Validators.required],
    listaComunas:['',Validators.required]
  });

  //Llenar selectores
  listaVariables: string[] = [];
  listaGraficos: string[] = [];
  listaComunas: string[] = [];

  constructor(private fb: FormBuilder,
    private camposService: CamposService,
    private analisisGrafico: AnalisisService) {


  }

  ngOnInit(): void {
    this.listaVariables = this.camposService.variables;
    this.listaGraficos = this.camposService.graficos;
    this.listaComunas = this.camposService.comunas;
  }

  limpiar(){
    this.graficaForm = this.fb.group({
      listaGraficos: '',
      listaVariables: '',
      listaComunas: ''
    })
    this.categoria = '',
    this.comuna = ''
     this.datos = [];
     this.gato1 =[]
     this.argumento1 = []


  }

  consultas(){


    if(this.graficaForm.invalid){
      console.log('invalido');
      this.mostrarGrafico1 = false
      return;
    }
    this.fomrSubmitted = true;
    let mazamorra = this.graficaForm.value
    this.cargando = true;
    this.mostrarGrafico1 = true;
    this.analisisGrafico.graficas(mazamorra.listaVariables)
        .subscribe(res =>{

          switch(mazamorra.listaVariables){

          case 'Tipo de mascota':
                  this.categoria = res;
                for (const cate of this.categoria) {
                  this.comuna = cate.comuna.split(',');
                  this.datos.push(this.comuna);
                  this.datosPerros1.push(cate.perro);
                  this.datosGato1.push(cate.gato);
                }

                for (let index = 0; index < this.datosPerros1.length; index++) {
                this.perroV1 = this.datosPerros1.join()
                this.perro1[0] = this.perroV1.split(',')
                }

                for (let index = 0; index < this.datosGato1.length; index++) {
                  this.gatoV1 = this.datosGato1.join()
                  this.gato1[0] = this.gatoV1.split(',')

                }
                  this.cargarDatos(this.datos, this.perro1[0],this.gato1[0]);
                  this.cargando = false;

          break;

          case 'Tipo de Alimentación':

            this.categoria = res;
            console.log(this.categoria);
              for (const cate of this.categoria) {
                this.comuna = cate.comuna.split(',');
                this.datos.push(this.comuna);

                this.datosGato1.push(cate.gatoCA);
                this.datosGato2.push(cate.gatoCO);
                this.datosPerros1.push(cate.perroCA);
                this.datosPerros2.push(cate.perroCO);
              }
              for (let index = 0; index < this.datosGato1.length; index++) {
                this.gatoV1 = this.datosGato1.join()
                this.gato1[0] = this.gatoV1.split(',')
              }
              for (let index = 0; index < this.datosGato2.length; index++) {
                this.gatoV2 = this.datosGato2.join()
                this.gato2[0] = this.gatoV2.split(',')
              }
              for (let index = 0; index < this.datosPerros1.length; index++) {
                this.perroV1 = this.datosPerros1.join()
                this.perro1[0] = this.perroV1.split(',')
              }
              for (let index = 0; index < this.datosPerros2.length; index++) {
                this.perroV2 = this.datosPerros2.join()
                this.perro2[0] = this.perroV2.split(',')
              }
              this.cargarDatos2(this.datos,this.gato1[0],this.gato2[0],this.perro1[0],this.perro2[0]);
              this.cargando = false;

          break;

          case 'Sexo':
            this.categoria = res;
            console.log(this.categoria);
              for (const cate of this.categoria) {
                this.comuna = cate.comuna.split(',');
                this.datos.push(this.comuna);

                this.datosGato1.push(cate.gatoH);
                this.datosGato2.push(cate.gatoM);
                this.datosPerros1.push(cate.perroH);
                this.datosPerros2.push(cate.perroM);
              }
              for (let index = 0; index < this.datosGato1.length; index++) {
                this.gatoV1 = this.datosGato1.join()
                this.gato1[0] = this.gatoV1.split(',')
              }
              for (let index = 0; index < this.datosGato2.length; index++) {
                this.gatoV2 = this.datosGato2.join()
                this.gato2[0] = this.gatoV2.split(',')
              }
              for (let index = 0; index < this.datosPerros1.length; index++) {
                this.perroV1 = this.datosPerros1.join()
                this.perro1[0] = this.perroV1.split(',')
              }
              for (let index = 0; index < this.datosPerros2.length; index++) {
                this.perroV2 = this.datosPerros2.join()
                this.perro2[0] = this.perroV2.split(',')
              }
              this.cargarDatos3(this.datos,this.gato1[0],this.gato2[0],this.perro1[0],this.perro2[0]);
              this.cargando = false;

          break;

          case 'Adquisición':
            this.categoria = res;
            console.log(this.categoria);
              for (const cate of this.categoria) {
                this.comuna = cate.comuna.split(',');
                this.datos.push(this.comuna);

                this.datosGato1.push(cate.gatoA);
                this.datosGato2.push(cate.gatoC);
                this.datosPerros1.push(cate.perroA);
                this.datosPerros2.push(cate.perroC);
              }
              for (let index = 0; index < this.datosGato1.length; index++) {
                this.gatoV1 = this.datosGato1.join()
                this.gato1[0] = this.gatoV1.split(',')
              }
              for (let index = 0; index < this.datosGato2.length; index++) {
                this.gatoV2 = this.datosGato2.join()
                this.gato2[0] = this.gatoV2.split(',')
              }
              for (let index = 0; index < this.datosPerros1.length; index++) {
                this.perroV1 = this.datosPerros1.join()
                this.perro1[0] = this.perroV1.split(',')
              }
              for (let index = 0; index < this.datosPerros2.length; index++) {
                this.perroV2 = this.datosPerros2.join()
                this.perro2[0] = this.perroV2.split(',')
              }
              this.cargarDatos4(this.datos,this.gato1[0],this.gato2[0],this.perro1[0],this.perro2[0]);
              this.cargando = false;

          break;

          case 'Esterilización':
            this.categoria = res;
            console.log(this.categoria);
              for (const cate of this.categoria) {
                this.comuna = cate.comuna.split(',');
                this.datos.push(this.comuna);

                this.datosGato1.push(cate.gatoN);
                this.datosGato2.push(cate.gatoS);
                this.datosPerros1.push(cate.perroN);
                this.datosPerros2.push(cate.perroS);
              }
              for (let index = 0; index < this.datosGato1.length; index++) {
                this.gatoV1 = this.datosGato1.join()
                this.gato1[0] = this.gatoV1.split(',')
              }
              for (let index = 0; index < this.datosGato2.length; index++) {
                this.gatoV2 = this.datosGato2.join()
                this.gato2[0] = this.gatoV2.split(',')
              }
              for (let index = 0; index < this.datosPerros1.length; index++) {
                this.perroV1 = this.datosPerros1.join()
                this.perro1[0] = this.perroV1.split(',')
              }
              for (let index = 0; index < this.datosPerros2.length; index++) {
                this.perroV2 = this.datosPerros2.join()
                this.perro2[0] = this.perroV2.split(',')
              }
              this.cargarDatos5(this.datos,this.gato1[0],this.gato2[0],this.perro1[0],this.perro2[0]);
              this.cargando = false;
          break;

          case 'Esquema de vacunación':
            this.categoria = res;
            console.log(this.categoria);
              for (const cate of this.categoria) {
                this.comuna = cate.comuna.split(',');
                this.datos.push(this.comuna);

                this.datosGato1.push(cate.gatoN);
                this.datosGato2.push(cate.gatoS);
                this.datosPerros1.push(cate.perroN);
                this.datosPerros2.push(cate.perroS);
              }
              for (let index = 0; index < this.datosGato1.length; index++) {
                this.gatoV1 = this.datosGato1.join()
                this.gato1[0] = this.gatoV1.split(',')
              }
              for (let index = 0; index < this.datosGato2.length; index++) {
                this.gatoV2 = this.datosGato2.join()
                this.gato2[0] = this.gatoV2.split(',')
              }
              for (let index = 0; index < this.datosPerros1.length; index++) {
                this.perroV1 = this.datosPerros1.join()
                this.perro1[0] = this.perroV1.split(',')
              }
              for (let index = 0; index < this.datosPerros2.length; index++) {
                this.perroV2 = this.datosPerros2.join()
                this.perro2[0] = this.perroV2.split(',')
              }
              this.cargarDatos6(this.datos,this.gato1[0],this.gato2[0],this.perro1[0],this.perro2[0]);
              this.cargando = false;

          break;

          case 'Estado actual':
            this.categoria = res;
            console.log(this.categoria);
              for (const cate of this.categoria) {
                this.comuna = cate.comuna.split(',');
                this.datos.push(this.comuna);

                this.datosGato1.push(cate.gatoAdopcion);
                this.datosGato2.push(cate.gatoMuerto);
                this.datosGato3.push(cate.gatoPerdido);
                this.datosGato4.push(cate.gatoVivo);
                this.datosPerros1.push(cate.perroAdopcion);
                this.datosPerros2.push(cate.perroMuerto);
                this.datosPerros3.push(cate.perroPerdido);
                this.datosPerros4.push(cate.perroVivo);
              }
              for (let index = 0; index < this.datosGato1.length; index++) {
                this.gatoV1 = this.datosGato1.join()
                this.gato1[0] = this.gatoV1.split(',')
              }
              for (let index = 0; index < this.datosGato2.length; index++) {
                this.gatoV2 = this.datosGato2.join()
                this.gato2[0] = this.gatoV2.split(',')
              }
              for (let index = 0; index < this.datosGato3.length; index++) {
                this.gatoV3 = this.datosGato3.join()
                this.gato3[0] = this.gatoV3.split(',')
              }
              for (let index = 0; index < this.datosGato4.length; index++) {
                this.gatoV4 = this.datosGato4.join()
                this.gato4[0] = this.gatoV4.split(',')
              }
              for (let index = 0; index < this.datosPerros1.length; index++) {
                this.perroV1 = this.datosPerros1.join()
                this.perro1[0] = this.perroV1.split(',')
              }
              for (let index = 0; index < this.datosPerros2.length; index++) {
                this.perroV2 = this.datosPerros2.join()
                this.perro2[0] = this.perroV2.split(',')
              }
              for (let index = 0; index < this.datosPerros3.length; index++) {
                this.perroV3 = this.datosPerros3.join()
                this.perro3[0] = this.perroV3.split(',')
              }
              for (let index = 0; index < this.datosPerros4.length; index++) {
                this.perroV4 = this.datosPerros4.join()
                this.perro4[0] = this.perroV4.split(',')
              }
              this.cargarDatos7(this.datos,this.gato1[0],this.gato2[0],this.gato3[0],this.gato4[0],this.perro1[0],this.perro2[0],this.perro3[0],this.perro4[0]);
              this.cargando = false;

          break;

        }
        this.datos = [];
    }
  )}

  cargarDatos(comunas, datosPerros, datosGatos) {
    this.barChartData = [];
    this.barChartLabels = ['Perros','Gatos'];


    for (const index in comunas) {
      this.barChartData.push({ data: [datosPerros[index],datosGatos[index]], label: comunas [index]});
    }
  }

  cargarDatos2(comunas, datosGato1,datosGato2, datosPerros1,datosPerros2) {
    this.barChartData = [];
    this.barChartLabels = ['Alimentos Caseros Gatos','Alimentos Concentrados Gatos','Alimentos Caseros Perros','Alimentos Concentrados Perros']

    for (const index in comunas) {
      this.barChartData.push({ data: [datosGato1[index],datosGato2[index],datosPerros1[index],datosPerros2[index]], label: comunas [index]});
    }
  }

  cargarDatos3(comunas, datosGato1,datosGato2, datosPerros1,datosPerros2) {
    this.barChartData = [];
    this.barChartLabels = ['Gatos - Hembra','Gatos - Macho','Perros - Hembra','Perros - Macho']

    for (const index in comunas) {
      this.barChartData.push({ data: [datosGato1[index],datosGato2[index],datosPerros1[index],datosPerros2[index]], label: comunas [index]});
    }
  }

  cargarDatos4(comunas, datosGato1,datosGato2, datosPerros1,datosPerros2) {
    this.barChartData = [];
    this.barChartLabels = ['Gatos - Adopción','Gatos - compra','Perros - Adopción','Perros - Compra']

    for (const index in comunas) {
      this.barChartData.push({ data: [datosGato1[index],datosGato2[index],datosPerros1[index],datosPerros2[index]], label: comunas [index]});
    }
  }

  cargarDatos5(comunas, datosGato1,datosGato2, datosPerros1,datosPerros2) {
    this.barChartData = [];
    this.barChartLabels = ['Gatos no esterilizados','Gatos esterilizados','Perros no esterilizados','Perros esterilizados']

    for (const index in comunas) {
      this.barChartData.push({ data: [datosGato1[index],datosGato2[index],datosPerros1[index],datosPerros2[index]], label: comunas [index]});
    }
  }

  cargarDatos6(comunas, datosGato1,datosGato2, datosPerros1,datosPerros2) {
    this.barChartData = [];
    this.barChartLabels = ['Esquema incompleto gatos','Esquema completo gatos','Esquema incompleto perros','Esquema completo perros']

    for (const index in comunas) {
      this.barChartData.push({ data: [datosGato1[index],datosGato2[index],datosPerros1[index],datosPerros2[index]], label: comunas [index]});
    }
  }

  cargarDatos7(comunas, datosGato1,datosGato2,datosGato3,datosGato4, datosPerros1,datosPerros2,datosPerros3,datosPerros4) {
    this.barChartData = [];
    this.barChartLabels = ['Gatos en adopción','Gatos Fallecidos','Gatos perdidos','Gatos vivos','Perros en adopción','Perros Fallecidos','Perros perdidos','Perros vivos']

    for (const index in comunas) {
      this.barChartData.push({ data: [datosGato1[index],datosGato2[index],datosGato3[index],datosGato4[index],datosPerros1[index],datosPerros2[index],datosPerros3[index],datosPerros4[index]], label: comunas [index]});
    }
  }

  //Grafica de barras
  public barChartOptions:  ChartConfiguration['options'] = {
    responsive: true,
    scales: { x: {}, y: {min:0} },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };


  campoNoValido(campo:string): boolean{

    if(this.graficaForm.get(campo)?.invalid && this.fomrSubmitted){
      return true;
    }else{
      return false;
    }
  }

  campoNoValido2(campo:string): boolean{

    if(this.grafica2Form.get(campo)?.invalid && this.fomrSubmitted){
      return true;
    }else{
      return false;
    }
  }

  //Grafica 2
  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [   ],
    datasets: [ {
      data: [  ]
    } ]
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [ ChartDataLabels ];

  toggleLegend(): void {
    if (this.pieChartOptions?.plugins?.legend) {
      this.pieChartOptions.plugins.legend.display = !this.pieChartOptions.plugins.legend.display;
    }

    this.chart?.render();
  }

  public argumento1: any;
  public label1: any;
  public label2: any;
  public label3: any;
  public label4: any;
  public label5: any;
  public label6: any;
  public label7: any;
  public label8: any;

  graficaTorta() {

    let mazamorra = this.grafica2Form.value

    if (this.grafica2Form.invalid) {
      console.log('invalido');
      this.mostrarGrafico2 = false;
      return;
    }

    this.fomrSubmitted = true;
    this.cargando2 = true;
    this.mostrarGrafico2 = true;
    this.analisisGrafico.grafica2(mazamorra.listaVariables,mazamorra.listaComunas)
      .subscribe(({ labels, values }) => {

        switch (mazamorra.listaVariables) {

          case 'Tipo de mascota':
            console.log('Entro');

            this.pieChartData.labels = labels;
            this.label1 = labels[0] = 'Perros'
            this.label2 = labels[1] = 'Gatos'
            this.pieChartData.datasets = [{ data: Object.values(values), label: 'Cantidad', backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 99, 132, 0.2)'] }]
            this.cargando2 = false;
            this.chart?.update();
            break;

            case 'Tipo de Alimentación':
            this.pieChartData.labels = labels;
            this.label1 = labels[0] = 'Perros - Alimentos concentrados'
            this.label2 = labels[1] = 'Perros - Alimentos caseros'
            this.label3 = labels[2] = 'Perros - Alimentos mixtos'
            this.label4 = labels[3] = 'Gatos - Alimentos concentrados'
            this.label5 = labels[4] = 'Gatos - Alimentos caseros'
            this.label6 = labels[5] = 'Gatos - Alimentos mixtos'

            this.pieChartData.datasets = [{ data: Object.values(values), label: 'Cantidad', backgroundColor: ['rgba(220,249,228, 0.2)', 'rgba(176, 194, 242, 0.2)', 'rgba(111, 183, 214, 0.2),rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 99, 132, 0.2)'] }]

            this.cargando2 = false;
            this.chart.update();
            break;

            case 'Sexo':
            this.pieChartData.labels = labels;
            this.label1 = labels[0] = 'Perros - Macho'
            this.label2 = labels[1] = 'Perros - Hembra'
            this.label3 = labels[2] = 'Gatos - Macho'
            this.label4 = labels[3] = 'Gatos - Hembra'

            this.pieChartData.datasets = [{ data: Object.values(values), label: 'Cantidad', backgroundColor: ['rgba(220,249,228, 0.2)', 'rgba(176, 194, 242, 0.2)', 'rgba(111, 183, 214, 0.2),rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 99, 132, 0.2)'] }]
            this.cargando2 = false;
            this.chart.update();
            break;

          case 'Adquisición':
            this.pieChartData.labels = labels;
            this.label1 = labels[0] = 'Perros - Comprados'
            this.label2 = labels[1] = 'Perros - Adoptados'
            this.label3 = labels[2] = 'Gatos - Comprados'
            this.label4 = labels[3] = 'Gatos - Adoptados'

            this.pieChartData.datasets =  [{ data: Object.values(values), label: 'Cantidad', backgroundColor: ['rgba(220,249,228, 0.2)', 'rgba(176, 194, 242, 0.2)', 'rgba(111, 183, 214, 0.2),rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 99, 132, 0.2)'] }]
            this.cargando2 = false;
            this.chart.update();
            break;

          case 'Esterilización':
            this.pieChartData.labels = labels;
            this.label1 = labels[0] = 'Perros - Esterilizados'
            this.label2 = labels[1] = 'Perros - No Esterilizados'
            this.label3 = labels[2] = 'Gatos - Esterilizados'
            this.label4 = labels[3] = 'Gatos - No Esterilizados'

            this.pieChartData.datasets = [{ data: Object.values(values), label: 'Cantidad', backgroundColor: ['rgba(220,249,228, 0.2)', 'rgba(176, 194, 242, 0.2)', 'rgba(111, 183, 214, 0.2),rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 99, 132, 0.2)'] }]
            this.cargando2 = false;
            this.chart.update();
            break;

          case 'Esquema de vacunación':
            this.pieChartData.labels = labels;
            this.label1 = labels[0] = 'Perros - Esquema completo'
            this.label2 = labels[1] = 'Perros - Esquema incompleto'
            this.label3 = labels[2] = 'Gatos - Esquema completo'
            this.label4 = labels[3] = 'Gatos - Esquema incompleto'

            this.pieChartData.datasets =  [{ data: Object.values(values), label: 'Cantidad', backgroundColor: ['rgba(220,249,228, 0.2)', 'rgba(176, 194, 242, 0.2)', 'rgba(111, 183, 214, 0.2),rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 99, 132, 0.2)'] }]
            this.cargando2 = false;
            this.chart.update();
            break;

          case 'Estado actual':
            this.pieChartData.labels = labels;
            this.label1 = labels[0] = 'Perros - Vivos'
            this.label2 = labels[1] = 'Perros - Fallecidos'
            this.label3 = labels[2] = 'Perros - Perdidos'
            this.label4 = labels[3] = 'Perros - En Adopción'
            this.label5 = labels[4] = 'Gatos - Vivos'
            this.label6 = labels[5] = 'Gatos - Fallecidos'
            this.label7 = labels[6] = 'Gatos - Perdidos'
            this.label8 = labels[7] = 'Gatos - En Adopción'

            this.pieChartData.datasets = [{ data: Object.values(values), label: 'Cantidad', backgroundColor: ['rgba(72,181,163, 0.2)', 'rgba(192, 186, 153, 0.2)','rgba(145,210,144, 0.2)', 'rgba(176, 194, 242, 0.2)', 'rgba(111, 183, 214, 0.2),rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 99, 132, 0.2)'] }]
            this.cargando2 = false;
            this.chart.update();
            break;



        }
      })
  }
}

