import { Color } from '../color/color';
import { Bind, Component, WebComponent } from '../web-component';

@Component({
  selector: 'alr-title',
  styles: '~title',
  template: '~title',
})
export class Title extends WebComponent {
  @Bind() color: Color;
}
