import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegionesComponent } from './regiones/regiones.component';
import { RegionComponent } from './region/region.component';
import { RegionesApiService } from './_services/regiones-api.service';
import { ProvinciasApiService } from './_services/provincias-api.service';

@NgModule({
  declarations: [
    AppComponent,
    RegionesComponent,
    RegionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RegionesApiService, ProvinciasApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
