import { Component } from '@angular/core';
import { CardComponent, ButtonComponent } from '@angular-neo/elements';

@Component({
  selector: 'doc-docs',
  standalone: true,
  imports: [
    ButtonComponent,
    CardComponent
  ],
  templateUrl: './docs.component.html',
})
export class DocsComponent {}
