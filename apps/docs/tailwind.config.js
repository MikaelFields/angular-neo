const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

// ==================== DOCS APP =====================>

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
