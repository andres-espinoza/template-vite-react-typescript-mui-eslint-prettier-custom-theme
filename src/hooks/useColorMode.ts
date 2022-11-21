import { useContext } from 'react';
import ColorModeContext from '../context/ColorModeProvider';
import { ColorModeContextValue } from '../types/colorMode';

export const useColorMode = (): ColorModeContextValue['mode'] => {
  const { mode } = useContext(ColorModeContext);
  return mode;
};

export const useSaveMode = (): ColorModeContextValue['saveMode'] => {
  const { saveMode } = useContext(ColorModeContext);
  return saveMode;
};
