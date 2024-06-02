import { Component } from '@angular/core';

@Component({
  selector: 'app-educacion',
  standalone: true,
  imports: [],
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  educations = [
    { title: 'Título 1', description: 'Descripción del curso 1', duration: '6 meses' },
    { title: 'Título 2', description: 'Descripción del curso 2', duration: '4 meses' },
    { title: 'Título 3', description: 'Descripción del curso 3', duration: '8 meses' }
  ];
}
