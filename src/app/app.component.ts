import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

// Decorador para definir el componente Angular
@Component({
  selector: 'app-root', // Nombre del componente
  standalone: true, // Indica que este componente puede funcionar por sí solo
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive], // Módulos que necesita este componente
  templateUrl: './app.component.html', // Ruta al archivo de la plantilla HTML
  styleUrl: './app.component.css', // Ruta al archivo CSS
})
export class AppComponent implements OnInit {

  // Método que se ejecuta cuando el componente se inicializa
  ngOnInit() {
    // Crea un observable que emite eventos de desplazamiento ('scroll') de la ventana
    fromEvent(window, 'scroll')
      .pipe(throttleTime(100)) // Limita la frecuencia de los eventos a uno cada 100 ms
      .subscribe(() => this.onWindowScroll()); // Llama al método onWindowScroll cada vez que ocurre un evento de desplazamiento

    // Obtiene el elemento de audio con el id 'background-music'
    const audio = <HTMLAudioElement>document.getElementById('background-music');

    // Añade un evento de clic al documento que se ejecuta solo una vez
    document.addEventListener('click', () => {
      // Reproduce el audio al hacer clic en cualquier parte de la página
      audio.play().catch(error => {
        // Manejo de errores si falla la reproducción del audio
        console.log('Error al reproducir el audio:', error);
      });
    }, { once: true }); // Asegura que se ejecute solo una vez
  }

  // Método que se ejecuta en cada evento de desplazamiento ('scroll')
  onWindowScroll() {
    // Obtiene la altura de la ventana
    const windowHeight = window.innerHeight;
    // Obtiene la posición de desplazamiento actual
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    // Calcula la posición inferior del área visible
    const scrollBottom = scrollPosition + windowHeight;

    // Selecciona todos los enlaces de navegación en el contenedor con la clase '.w-60'
    const navLinks = document.querySelectorAll(".w-60 a");

    // Itera sobre cada enlace de navegación
    navLinks.forEach((link) => {
      // Obtiene el atributo 'href' del enlace
      const href = link.getAttribute('href');
      if (href) {
        // Obtiene el ID de la sección correspondiente al enlace
        const sectionId = href.substring(1);
        // Obtiene la sección del documento por su ID
        const section = document.getElementById(sectionId);
        if (section) {
          // Obtiene la posición superior de la sección
          const sectionTop = section.offsetTop;
          // Obtiene la altura de la sección
          const sectionHeight = section.clientHeight;
          // Calcula la posición inferior de la sección
          const sectionBottom = sectionTop + sectionHeight;

          // Calcula qué porcentaje de la sección está visible en la ventana
          const visibleHeight = Math.min(scrollBottom, sectionBottom) - Math.max(scrollPosition, sectionTop);
          const visiblePercent = (visibleHeight / sectionHeight) * 100;

          // Activa el resaltado si la sección visible supera un umbral
          if (visiblePercent >= 50) {
            // Añade la clase 'text-yellow-200' al enlace si al menos el 50% de la sección es visible
            link.classList.add("text-yellow-200");
            console.log("Highlighting:", sectionId);
          } else {
            // Elimina la clase 'text-yellow-200' del enlace si menos del 50% de la sección es visible
            link.classList.remove("text-yellow-200");
          }
        }
      }
    });
  }
}
