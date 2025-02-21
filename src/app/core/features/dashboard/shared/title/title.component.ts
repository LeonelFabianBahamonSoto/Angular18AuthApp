import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  template: '<h1 class="text-3xl mb-5">{{componentTitle}}</h1>',
  styleUrl: './title.component.scss'
})

export class TitleComponent {
  @Input({ required: true }) componentTitle: string = '';
}
