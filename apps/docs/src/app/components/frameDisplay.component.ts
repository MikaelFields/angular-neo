import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'doc-frame-display',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './frameDisplay.component.html',
})
export class FrameDisplayComponent {
   title = input<string>();

   isDarkMode = false;

   toggleThemeMode() {
     this.isDarkMode = !this.isDarkMode;
   }
}
