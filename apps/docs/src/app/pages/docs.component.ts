import { Component } from '@angular/core';
import { ButtonComponent } from '@angular-neo/button';

@Component({
  selector: 'doc-docs',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './docs.component.html',
})
export class DocsComponent {}
