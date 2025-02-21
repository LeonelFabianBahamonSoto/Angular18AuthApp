import { Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  imports: [],
  template: '<div>Hola Mundo</div>',
  styleUrl: './heavy-loaders-slow.component.scss'
})
export class HeavyLoadersSlowComponent {
  constructor() {

    const start = Date.now();

    while (Date.now() - start < 3000) {};

    console.info('FINISHED');

  };
}
