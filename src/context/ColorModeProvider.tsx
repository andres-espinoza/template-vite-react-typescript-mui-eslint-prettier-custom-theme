import { PaletteMode } from '@mui/material';
import { createContext, FC, useEffect, useMemo, useState } from 'react';
import {
  ColorModeProviderProps,
  ColorModeContextValue,
} from '../types/colorMode';
import restoreColorMode from '../theme/utils/restoreColorMode';
import storeColorMode from '../theme/utils/storeColorMode';
import { defaultMode } from '../theme';

const ColorModeContext = createContext<ColorModeContextValue>({
  mode: defaultMode,
  saveMode: () => {},
});

export const ColorModeProvider: FC<ColorModeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>(defaultMode);

  useEffect(() => {
    const restoredColorMode = restoreColorMode();
    if (restoredColorMode) setMode(restoredColorMode);
  }, []);

  const saveColorMode = (updatedColorMode: PaletteMode): void => {
    storeColorMode(updatedColorMode);
    setMode(updatedColorMode);
  };

  const memoProps = useMemo(
    () => ({
      mode,
      saveMode: saveColorMode,
    }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={memoProps}>
      {children}
    </ColorModeContext.Provider>
  );
};

export const ColorModeConsumer = ColorModeContext.Consumer;
export default ColorModeContext;
