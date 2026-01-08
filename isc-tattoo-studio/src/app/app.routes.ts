import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Chisiamo } from './components/chisiamo/chisiamo';
import { Isc } from './components/artisti/isc/isc';
import { Sketchomaule } from './components/artisti/sketchomaule/sketchomaule';
import { Laurazane } from './components/artisti/laurazane/laurazane';
import { Orario } from './components/orario/orario';
import { Prenotazioni } from './components/prenotazioni/prenotazioni';
import { Contatti } from './components/contatti/contatti';
import { Gallery } from './components/gallery/gallery';
import { Notfound } from './components/notfound/notfound';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'chisiamo', component: Chisiamo},
    {path: 'artisti/isc', component: Isc},
    {path: 'artisti/sketchomaule', component: Sketchomaule},
    {path: 'artisti/laurazane', component: Laurazane},
    {path: 'orario', component: Orario},
    {path: 'prenotazioni', component: Prenotazioni},
    {path: 'contatti', component: Contatti},
    {path: 'gallery', component: Gallery},
    {path: '**', component: Notfound}
];
