import { PaletteMode } from '@mui/material';

const storeColorMode = (mode: PaletteMode): void => {
  window.localStorage.setItem('colorMode', mode);
};

export default storeColorMode;
