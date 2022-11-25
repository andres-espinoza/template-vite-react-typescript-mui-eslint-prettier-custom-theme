import { PaletteMode } from '@mui/material';
import { defaultMode } from '..';

const restoreColorMode = (): PaletteMode | null => {
  let mode: PaletteMode | null = null;
  try {
    const storedMode: string | null = window.localStorage.getItem('colorMode');
    if (storedMode && (storedMode === 'dark' || storedMode === 'light')) {
      mode = storedMode;
    } else {
      mode = defaultMode;
    }
  } catch (err) {
    console.error(err);
  }
  return mode;
};

export default restoreColorMode;
