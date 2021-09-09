import { Component } from '@angular/core';
import { gerarSequencia } from './util';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  tabuadas: number[] = gerarSequencia(10);
}
