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
   return this.http.get(`${base_url}/analisis/analisis?consulta=Sexo`);
  }
  /*analisisGrafico2(variable: string, comuna:string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("consulta",variable)
    queryParams = queryParams.append("comuna",comuna)
    // return this.http.get(`${base_url}/analisis/analisis?consulta=${{variable}}`);
    return this.http.get(`${base_url}/analisis/analisis2`,{params:queryParams});
   }*/

   graficas(variable: string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("consulta",variable)
    return this.http.get(`${base_url}/analisis/analisis`,{params:queryParams});
  }



}
