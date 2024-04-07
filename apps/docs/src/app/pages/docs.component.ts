import { Component } from '@angular/core';
import { CardComponent, ButtonComponent } from '@angular-neo/neo-elements';
import { FrameDisplayComponent } from '../components/frameDisplay.component';

@Component({
  selector: 'doc-docs',
  standalone: true,
  imports: [ButtonComponent, CardComponent, FrameDisplayComponent],
  templateUrl: './docs.component.html',
})
export class DocsComponent {}
