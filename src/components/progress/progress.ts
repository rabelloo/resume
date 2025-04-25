import { Bind, Component, WebComponent } from '../../foundation';
import { Color } from '../color/color';

@Component({
  selector: 'alr-progress',
  styles: '~progress',
  template: '~progress',
})
export class Progress extends WebComponent {
  @Bind() amount: number;
  @Bind() color: Color;
}
