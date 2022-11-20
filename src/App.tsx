import { Typography, ThemeProvider } from '@mui/material';
import SwitchColorMode from './components/SwitchColorMode';
import MainContainer from './Layouts/MainContainer';
import createCustomTheme from './theme';
import { useColorMode } from './theme/hooks';

const App = () => {
  const mode = useColorMode();
  const theme = createCustomTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <Typography variant="body1">Hello World!</Typography>
        <SwitchColorMode />
      </MainContainer>
    </ThemeProvider>
  );
};

export default App;
