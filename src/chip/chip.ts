import { Component, WebComponent } from '../web-component';
import { Bind } from '../web-component';

@Component({
  selector: 'alr-chip',
  styles: '~chip',
  template: '~chip',
})
export class Chip extends WebComponent {
  @Bind({ toggle: true }) active: boolean;

  constructor() {
    super();

    this.event('click').listen(() => this.onClick());
  }

  onClick() {
    this.active = !this.active;
  }
}
