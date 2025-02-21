import { Component, signal } from '@angular/core';
import { TitleComponent } from "../../shared/title/title.component";

type Grade = 'A' | 'B' | 'C';

@Component({
  selector: 'app-control-flow',
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
class ControlFlowComponent {

  public showContent = signal<boolean>(false);
  public grade = signal<Grade>('A');
  public frameworks = signal<Array<string>>(['Angular', 'Vue', 'Svelte', 'Quick', 'React']);
  public frameworks2 = signal<Array<string>>([]);

  toggleContent = () => {
    this.showContent.set( !this.showContent() );
  }

}

export default ControlFlowComponent;