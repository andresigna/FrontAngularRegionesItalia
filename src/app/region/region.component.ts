import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Region, Provincia } from '../_interfaces/regiones';
import { RegionesApiService } from '../_services/regiones-api.service';
import { ProvinciasApiService } from '../_services/provincias-api.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  public region: Region;
  public provincias: Provincia[];
  indiceRegion: number;
  titulo = 'Regiones de Italia';

  constructor(private servicioRegion: RegionesApiService, private servicioProvincias:ProvinciasApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.indiceRegion = this.route.snapshot.params['id']

    this.servicioRegion.getRegion(this.indiceRegion).subscribe({
      next: (resp) => {
        this.region = resp;
      }
    })

    this.servicioProvincias.getProvinciasDeRegion(this.indiceRegion).subscribe({
      next: (resp) => {
        this.provincias = resp;
      }
    })

  }

}
