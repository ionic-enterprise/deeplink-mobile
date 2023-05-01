import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'white', pathMatch: 'full' },
  {
    path: 'white',
    loadComponent: () => import('./white/white.page').then((m) => m.WhitePage),
  },
  {
    path: 'yellow',
    loadComponent: () => import('./yellow/yellow.page').then((m) => m.YellowPage),
  },
  {
    path: 'green',
    loadComponent: () => import('./green/green.page').then((m) => m.GreenPage),
  },
  {
    path: 'oolong',
    loadComponent: () => import('./oolong/oolong.page').then((m) => m.OolongPage),
  },
  {
    path: 'black',
    loadComponent: () => import('./black/black.page').then((m) => m.BlackPage),
  },
  {
    path: 'dark',
    loadComponent: () => import('./dark/dark.page').then((m) => m.DarkPage),
  },
  {
    path: 'puer',
    loadComponent: () => import('./puer/puer.page').then((m) => m.PuerPage),
  },
  {
    path: 'herbal',
    loadComponent: () => import('./herbal/herbal.page').then((m) => m.HerbalPage),
  },
];
