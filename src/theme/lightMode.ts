import { PaletteOptions } from '@mui/material';
import colors from './colors';

const lightMode: PaletteOptions = {
  primary: {
    main: colors.pink[500],
  },
  secondary: {
    main: colors.pink[500],
  },
  icon: {
    activeIcon: colors.pink[500],
  },
  neutral: {
    dark: colors.grey[700],
    main: colors.grey[500],
    light: colors.grey[100],
  },
  text: {
    primary: colors.pink[500],
  },
  background: {
    default: colors.white[100],
  },
};

export default lightMode;
