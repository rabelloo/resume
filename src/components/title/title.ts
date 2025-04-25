import { Bind, Component, WebComponent } from '../../foundation';
import { Color } from '../color/color';

@Component({
  selector: 'alr-title',
  styles: '~title',
  template: '~title',
})
export class Title extends WebComponent {
  @Bind() color: Color;
}
