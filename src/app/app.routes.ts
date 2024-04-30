import { Routes } from '@angular/router';
import { ConceptualmapComponent } from './components/conceptualmap/conceptualmap.component';
import { QuestionaireComponent } from './components/questionaire/questionaire.component';

export const routes: Routes = [
  {path: 'activity1', component: ConceptualmapComponent},
  {path: 'activity2', component: QuestionaireComponent}

];
