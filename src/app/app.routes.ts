import { Routes } from '@angular/router';
import { AlexanderComponent } from './alexander/alexander.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EducacionComponent } from './educacion/educacion.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/alexander',
    pathMatch: 'full'
  },
  {
    path: 'alexander',
    component: AlexanderComponent,
  },
  {
    path: 'sobre_mi',
    component: SobreMiComponent,
  },
  {
    path: "portfolio",
    component: PortfolioComponent,
  },
  {
    path: "educacion",
    component: EducacionComponent,
  },
  {
    path: "skills",
    component: SkillsComponent,
  },
  {
    path: "contacto",
    component: ContactoComponent,
  },
];
