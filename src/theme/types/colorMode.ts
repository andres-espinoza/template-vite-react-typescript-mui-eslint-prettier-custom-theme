import { PaletteMode } from '@mui/material';
import { ReactNode } from 'react';

export interface ColorModeContextValue {
  mode: PaletteMode;
  saveMode: (update: PaletteMode) => void;
}

export interface ColorModeProviderProps {
  children: ReactNode;
}
