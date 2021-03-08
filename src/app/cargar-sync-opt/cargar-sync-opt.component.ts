import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from "rxjs/operators";

@Component({
  selector: 'app-cargar-sync-opt',
  templateUrl: './cargar-sync-opt.component.html',
  styleUrls: ['./cargar-sync-opt.component.css']
})
export class CargarSyncOptComponent implements OnInit {

  public archivo1:any={};
  public archivo2:any={};

  constructor(private http: HttpClient) { 

  }

  async ngOnInit() {
    await this.cargarArchivos();
    console.log('Terminado de cargar');
  }

  async cargarArchivos() {
    await Promise.all([
      this.cargar('archivo1.json'),
      this.cargar('archivo2.json')
    ]).then(res => {
      console.log(res);
      this.archivo1 = res[0];
      this.archivo2 = res[1];
    })

    console.log('terminar cargarArchivos');
  }

  async cargar(nombre:string) {
    let datos;
    datos = await this.http.get(`/assets/${nombre}`).pipe(delay(5000)).toPromise();
    console.log(nombre,':',datos);
    return datos;
  }

}
