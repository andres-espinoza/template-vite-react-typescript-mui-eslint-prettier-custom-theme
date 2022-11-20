import { Container } from '@mui/material';

const MainContainer = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: 'background.default',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </Container>
  );
};

export default MainContainer;
