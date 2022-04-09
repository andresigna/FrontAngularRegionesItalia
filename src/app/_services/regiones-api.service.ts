import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Region } from '../_interfaces/regiones';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionesApiService {
  private url: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getRegiones(): Observable<Region[]> {
    return this.http.get<Region[]>(this.url + '/regiones/');
}

getRegion(idRegion: number): Observable<Region>{
  return this.http.get<Region>(this.url + '/region/' + idRegion);
}


}
