import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';


const APP_ROUTES: Routes = [
     { path: 'home', component: HomeComponent },
     { path: 'search', component: SearchComponent },
     { path: 'artist/:id', component: ArtistaComponent },
    // { path: 'heroe/:id', component: HeroeComponent },
    // { path: 'buscar/:termino', component: BuscadorComponent },
     { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
export const appRouting = RouterModule.forRoot(APP_ROUTES, {useHash: true}); // {useHash: true} Opcional
