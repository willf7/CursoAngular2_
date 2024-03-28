import { Component } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css',
})
export class CursosComponent {
  cursos: string[];

  constructor(private cursosService: CursosService) {
    this.cursos = this.cursosService.getCursos();
  }
}
