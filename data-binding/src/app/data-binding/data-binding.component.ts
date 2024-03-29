import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  url: string = 'https://loiane.training';
  makeCourse: boolean = true;
  urlImage: string =
    'https://loremflickr.com/cache/resized/65535_52562876537_264c5ac9cf_400_200_nofilter.jpg';

  getValor() {
    return 7;
  }

  getLike() {
    return true;
  }

  constructor() {}
}
