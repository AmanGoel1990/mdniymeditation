import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Vision } from './vision/vision';
import { Mission } from './mission/mission';
import { History } from './history/history';
import { BreathingMeditation } from './breathing-meditation/breathing-meditation';
import { MindfulnessPractice } from './mindfulness-practice/mindfulness-practice';
import { GuidedRelaxaton } from './guided-relaxaton/guided-relaxaton';
import { YogaMeditation } from './yoga-meditation/yoga-meditation';
import { Gallery } from './gallery/gallery';
import { Community } from './community/community';
import { Resources } from './resources/resources';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about-us', redirectTo: 'about-us/vision', pathMatch: 'full' },
  { path: 'about-us/vision', component: Vision },
  { path: 'about-us/mission', component: Mission },
  { path: 'about-us/history', component: History },
  { path: 'meditation', redirectTo: 'meditation/breath', pathMatch: 'full' },
  { path: 'meditation/breath', component: BreathingMeditation },
  { path: 'meditation/mindfulness', component: MindfulnessPractice },
  { path: 'meditation/guided', component: GuidedRelaxaton },
  { path: 'meditation/yoga', component: YogaMeditation },
  { path: 'community', component: Community },
  { path: 'gallery', component: Gallery },
  { path: 'resources', component: Resources },
  { path: 'contact', component: Contact }
];
