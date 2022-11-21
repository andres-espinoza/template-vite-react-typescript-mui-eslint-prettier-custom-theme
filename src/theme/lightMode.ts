import { PaletteOptions } from '@mui/material';
import customColors from './customColors';

const lightMode: PaletteOptions = {
  primary: {
    main: customColors.pink[500],
  },
  secondary: {
    main: customColors.pink[500],
  },
  icon: {
    activeIcon: customColors.pink[500],
  },
  neutral: {
    dark: customColors.grey[700],
    main: customColors.grey[500],
    light: customColors.grey[100],
  },
  text: {
    primary: customColors.pink[500],
  },
  background: {
    default: customColors.white[100],
  },
};

export default lightMode;
