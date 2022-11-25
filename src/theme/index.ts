import { createTheme, PaletteMode, Theme } from '@mui/material';
import customColors from './customColors';
import darkMode from './darkMode';
import lightMode from './lightMode';

export const defaultMode: PaletteMode = 'dark';

const createCustomTheme = (mode: PaletteMode): Theme => {
  if (!mode) mode = defaultMode;

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === 'dark' ? darkMode : lightMode),
    },
    direction: 'ltr',
    typography: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      fontSize: 16,
      button: {
        fontWeight: 600,
      },
      h1: {
        fontWeight: 600,
        fontSize: '2.5rem',
      },
      h2: {
        fontWeight: 600,
        fontSize: '2.2rem',
      },
      h3: {
        fontWeight: 600,
        fontSize: '1.8rem',
      },
      h4: {
        fontWeight: 600,
        fontSize: '1.5rem',
      },
      subtitle1: {
        fontWeight: 600,
        fontSize: '1.2rem',
      },
      subtitle2: {
        fontWeight: 600,
        fontSize: '1rem',
      },
      body1: {
        fontWeight: 400,
        fontSize: '1.2rem',
      },
      body2: {
        fontWeight: 400,
        fontSize: '1rem',
      },
      overline: {
        fontWeight: 600,
      },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            color:
              mode === 'light'
                ? customColors.grey[900]
                : customColors.white[200],
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
          },
        },
      },
      MuiCardHeader: {
        defaultProps: {
          titleTypographyProps: {
            variant: 'h4',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 14,
            overflow: 'hidden',
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: 'none',
            '&:hover p': {
              color:
                mode === 'light'
                  ? customColors.pink[500]
                  : customColors.blue[400],
            },
          },
        },
      },
    },
  });

  return theme;
};

export default createCustomTheme;
