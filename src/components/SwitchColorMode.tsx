import { Typography, Switch } from '@mui/material';
import { useColorMode, useSaveMode } from '../hooks/useColorMode';

const SwitchColorMode = () => {
  const mode = useColorMode();
  const saveMode = useSaveMode();

  const setTheme = () =>
    mode === 'light' ? saveMode('dark') : saveMode('light');

  return (
    <>
      <Switch
        color="primary"
        onChange={setTheme}
      />
      <Typography>{`${mode} mode`}</Typography>
    </>
  );
};

export default SwitchColorMode;
