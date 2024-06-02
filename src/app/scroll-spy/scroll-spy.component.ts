import { Component, HostListener } from '@angular/core';
import { AlexanderComponent } from "../alexander/alexander.component";
import { SobreMiComponent } from '../sobre-mi/sobre-mi.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { EducacionComponent } from '../educacion/educacion.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
    selector: 'app-scroll-spy',
    standalone: true,
    templateUrl: './scroll-spy.component.html',
    styleUrls: ['./scroll-spy.component.css'],
    // Importaciones de componentes
    imports: [
        AlexanderComponent,
        SobreMiComponent,
        PortfolioComponent,
        EducacionComponent,
        SkillsComponent,
        ContactoComponent
    ]
})
export class ScrollSpyComponent {
  activeSection: string = 'alexander'; // Sección activa por defecto

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;

    sections.forEach((section: HTMLElement) => {
      const sectionTop = section.offsetTop - 50;
      const sectionBottom = section.offsetTop + section.offsetHeight - 50;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const id = section.id;
        const activeLink = document.querySelector(`nav a[href="#${id}"]`);
        document.querySelectorAll('nav a').forEach(link => {
          link.classList.remove('active');
        });
        activeLink?.classList.add('active');
      }
    });
  }

  setActiveSection(section: string) {
    this.activeSection = section;
  }
}
