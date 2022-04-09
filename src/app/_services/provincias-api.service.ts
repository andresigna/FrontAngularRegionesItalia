import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Provincia } from '../_interfaces/regiones';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinciasApiService {
  private url: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProvinciasDeRegion(idRegion: number): Observable<Provincia[]>{
    return this.http.get<Provincia[]>(this.url + '/provincias_region/' + idRegion);
  }

}
