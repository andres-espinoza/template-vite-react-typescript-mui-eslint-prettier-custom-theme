import { Container } from '@mui/material';

const MainContainer = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <Container
      sx={{
        backgroundColor: 'background.default',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        maxWidth: '100vw !important',
      }}
    >
      {children}
    </Container>
  );
};

export default MainContainer;
