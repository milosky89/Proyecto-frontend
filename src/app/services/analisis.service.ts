import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AnalisisService {

  public prueba : any[] = [];
  constructor(private http: HttpClient) { }


  analisisGrafico(){
   // return this.http.get(`${base_url}/analisis/analisis?consulta=${{variable}}`);
   return this.http.get(`${base_url}/analisis/analisis?consulta=Tipo de mascota`);
  }
  analisisGrafico2(variable: string, comuna:string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("consulta",variable)
    queryParams = queryParams.append("comuna",comuna)
    // return this.http.get(`${base_url}/analisis/analisis?consulta=${{variable}}`);
    return this.http.get(`${base_url}/analisis/analisis2`,{params:queryParams});
   }

  getTipo(variable: string, comuna:string){

    return this.analisisGrafico2(variable,comuna)
            .pipe(
                map(data =>{
                  const labels = Object.keys(data)
                  const values = Object.values(data);
                  return { labels,values};
                })
              )

  }

}
