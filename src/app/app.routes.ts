import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { TabsControlComponent } from './components/tabs-control/tabs-control.component';
import { PlanteamientoComponent } from './components/planteamiento/planteamiento.component';
import { PrimerPuntoComponent } from './components/primer-punto/primer-punto.component';
import { SegundoPuntoComponent } from './components/segundo-punto/segundo-punto.component';
import { ResolucionComponent } from './components/resolucion/resolucion.component';
import { ParticipacionComponent } from './components/participacion/participacion.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadComponent: () => import('./components/inicio/inicio.component').then(m => m.InicioComponent)
  },
  {
    path: 'navegacion',
    loadComponent: () => import('./components/tabs-control/tabs-control.component').then(m => m.TabsControlComponent),
    children: [
      {
        path: 'planteamiento',
        loadComponent: () => import('./components/planteamiento/planteamiento.component').then(m => m.PlanteamientoComponent)
      },
      {
        path: 'primer-punto',
        loadComponent: () => import('./components/primer-punto/primer-punto.component').then(m => m.PrimerPuntoComponent)
      },
      {
        path: 'segundo-punto',
        loadComponent: () => import('./components/segundo-punto/segundo-punto.component').then(m => m.SegundoPuntoComponent)
      },
      {
        path: 'resolucion',
        loadComponent: () => import('./components/resolucion/resolucion.component').then(m => m.ResolucionComponent)
      },
      {
        path: 'participacion',
        loadComponent: () => import('./components/participacion/participacion.component').then(m => m.ParticipacionComponent)
      },
      {
        path: 'sobre-nosotros',
        loadComponent: () => import('./components/sobre-nosotros/sobre-nosotros.component').then(m => m.SobreNosotrosComponent)
      },
      { path: '', redirectTo: 'planteamiento', pathMatch: 'full' }
    ]
  }
];