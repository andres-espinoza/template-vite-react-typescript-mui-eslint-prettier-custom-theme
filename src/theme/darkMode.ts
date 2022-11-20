import { PaletteOptions } from '@mui/material';
import colors from './colors';

const darkMode: PaletteOptions = {
  primary: {
    main: colors.blue[400],
  },
  secondary: {
    main: colors.pink[500],
  },
  neutral: {
    dark: colors.grey[700],
    main: colors.grey[500],
    light: colors.grey[100],
  },
  text: {
    primary: colors.blue[400],
  },
  background: {
    default: colors.grey[800],
  },
};

export default darkMode;
