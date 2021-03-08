import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CargarComponent } from './cargar/cargar.component';
import { CargargarSyncComponent } from './cargargar-sync/cargargar-sync.component';
import { CargarSyncOptComponent } from './cargar-sync-opt/cargar-sync-opt.component';

@NgModule({
  declarations: [
    AppComponent,
    CargarComponent,
    CargargarSyncComponent,
    CargarSyncOptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
