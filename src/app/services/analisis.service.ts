import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AnalisisService {

  constructor(private http: HttpClient) { }


  analisisGrafico(){
   // return this.http.get(`${base_url}/analisis/analisis?consulta=${{variable}}`);
   return this.http.get(`${base_url}/analisis/analisis?consulta=Tipo de mascota`);
  }

  getTipo(){

    return this.analisisGrafico()
            .pipe(
                map(data =>{
                  const labels = Object.keys(data)
                  const values = Object.values(data);
                  return { labels,values};
                })
              )

  }


  getTipo2(){

    return this.analisisGrafico()
            .pipe(
                map(data => {data
                  console.log(data);

                })
              )

  }
}
