import { Component, Input } from '@angular/core';
import { gerarSequencia } from '../util';

@Component({
  selector: 'app-tabuada',
  templateUrl: 'tabuada.component.html',
  styleUrls: ['tabuada.component.css']
})
export class TabuadaComponent {
  @Input() tabuada: number = 0;

  fatores: number[] = gerarSequencia(10);
}
