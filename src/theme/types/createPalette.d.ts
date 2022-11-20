// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as createPalette from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface IconPaletteColorOptions {
    activeIcon?: string;
    inactiveIcon?: string;
  }

  interface IconPaletteColor {
    activeIcon: string;
    inactiveIcon: string;
  }

  interface PaletteOptions {
    neutral?: PaletteColorOptions;
    icon?: IconPaletteColorOptions;
  }

  interface Palette {
    neutral: PaletteColor;
    icon: IconPaletteColor;
  }
}

// PaletteOptions -> to extend in the ThemeOptions
// Palette -> to get the colors using useTheme() -> palette

// Example:
// const customizingOptions : ThemeOptions = {
//   palette: {
//     neutral: {
//       main: '#somecolor',
//       light: '#somecolor',
//       dark: '#somecolor',
//     },
//     icon: {
//       activeIcon: '#somecolor',
//       inactiveIcon: '#somecolor',
//     },
//   },
// };
