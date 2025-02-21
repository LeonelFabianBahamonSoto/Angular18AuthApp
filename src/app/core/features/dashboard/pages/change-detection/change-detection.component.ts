import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '../../shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  imports: [CommonModule, TitleComponent],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.scss'
})
class ChangeDetectionComponent {
  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor() {
    setTimeout(() => {console.info('Hecho')}, 3000);
  };
}

export default ChangeDetectionComponent;