import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsModule } from './modules/about-us/about-us.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./modules/about-us/about-us.module').then((m) => m.AboutUsModule),
  },
  { path: '**', component: PageNotFoundComponent },
];
