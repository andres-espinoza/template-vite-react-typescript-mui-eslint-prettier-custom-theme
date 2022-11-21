import { PaletteOptions } from '@mui/material';
import customColors from './customColors';

const darkMode: PaletteOptions = {
  primary: {
    main: customColors.blue[400],
  },
  secondary: {
    main: customColors.pink[500],
  },
  icon: {
    activeIcon: customColors.blue[400],
  },
  neutral: {
    dark: customColors.grey[700],
    main: customColors.grey[500],
    light: customColors.grey[100],
  },
  text: {
    primary: customColors.blue[400],
  },
  background: {
    default: customColors.grey[800],
  },
};

export default darkMode;
