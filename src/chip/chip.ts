import { Bind, Component, Listen, WebComponent } from '../web-component';

@Component({
  selector: 'alr-chip',
  styles: '~chip',
  template: '~chip',
})
export class Chip extends WebComponent {
  @Bind({ toggle: true }) active: boolean;

  // TODO
  @Bind() color: string;

  @Listen('click')
  onClick() {
    this.active = !this.active;
  }
}
