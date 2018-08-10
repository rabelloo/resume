import { Color } from '../color/color';
import { Bind, Component, Listen, WebComponent } from '../web-component';

@Component({
  selector: 'alr-chip',
  styles: '~chip',
  template: '~chip',
})
export class Chip extends WebComponent {
  @Bind({ toggle: true })
  active: boolean;

  @Bind() color: Color;

  @Listen('click')
  onClick() {
    this.active = !this.active;
  }
}
