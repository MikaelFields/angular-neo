import { Injectable } from '@angular/core';
import { TV, tv } from 'tailwind-variants';
@Injectable({
  providedIn: 'root'
})
export class NeoThemeService {

  getButtonTheme() {
    return tv({
      base: 'font-medium bg-blue-500 text-white rounded-full active:opacity-80',
      variants: {
        color: {
          primary: 'bg-blue-500 text-white',
          secondary: 'bg-purple-500 text-white',
        },
        size: {
          sm: 'text-sm',
          md: 'text-base',
          lg: 'px-4 py-3 text-lg',
        },
      },
      defaultVariants: {
        size: 'md',
        color: 'primary',
      },
    });
  }
}
