import { Typography, ThemeProvider, Link } from '@mui/material';
import IconStack from './components/IconStack';
import SwitchColorMode from './components/SwitchColorMode';
import MainContainer from './Layouts/MainContainer';
import createCustomTheme from './theme';
import { useColorMode } from './hooks/useColorMode';

const App = () => {
  const mode = useColorMode();
  const theme = createCustomTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <Typography variant="body1">Hello World!</Typography>
        <SwitchColorMode />
        <IconStack />
        <Link
          href="https://www.linkedin.com/in/andres-espinoza-delgado-fullstack-developer-typescript-react-nodejs-express-mongodb/"
          target="_blank"
          sx={{
            marginTop: 10,
          }}
        >
          <Typography variant="body1">by Andy 🧙‍♂️</Typography>
        </Link>
      </MainContainer>
    </ThemeProvider>
  );
};

export default App;
