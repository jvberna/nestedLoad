import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarComponent } from './cargar/cargar.component';
import { CargargarSyncComponent } from './cargargar-sync/cargargar-sync.component';
import { CargarSyncOptComponent } from './cargar-sync-opt/cargar-sync-opt.component';

const routes: Routes = [ 
  {path:'cargarS', component: CargargarSyncComponent},
  {path:'cargarSO', component: CargarSyncOptComponent},
  {path:'**', component: CargarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
