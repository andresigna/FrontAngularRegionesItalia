import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Region } from '../_interfaces/regiones';
import { RegionesApiService } from '../_services/regiones-api.service';

@Component({
  selector: 'app-regiones',
  templateUrl: './regiones.component.html',
  styleUrls: ['./regiones.component.scss']
})
export class RegionesComponent implements OnInit {

  titulo = 'Regiones de Italia';

  public regiones: Region[];

  constructor(private servicioRegiones: RegionesApiService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.servicioRegiones.getRegiones().subscribe({
      next: (resp) => {
        this.regiones = resp;
      }
    });
  }

}
