import { Stack, useTheme } from '@mui/material';
import EslintIcon from './icons/EslintIcon';
import MaterialIcon from './icons/MaterialIcon';
import PrettierIcon from './icons/PrettierIcon';
import ReactIcon from './icons/ReactIcon';
import TypeScriptIcon from './icons/TypeScriptIcon';
import ViteIcon from './icons/ViteIcon';

const IconStack = () => {
  const {
    palette: {
      icon: { activeIcon },
      background,
    },
  } = useTheme();
  return (
    <Stack
      flexDirection={{
        xs: 'row',
        sm: 'column',
        lg: 'row',
      }}
      gap={{
        xs: 0,
        sm: 0,
        lg: 2,
      }}
      height={{
        xs: 150,
        sm: 150,
        lg: 50,
      }}
      width={{
        xs: 250,
        sm: 300,
        lg: 400,
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDirection={{
          xs: 'column',
          sm: 'row',
          lg: 'row',
        }}
        height="100%"
        width="50%"
        gap={2}
      >
        <ReactIcon mainFillColor={activeIcon} />
        <TypeScriptIcon
          mainFillColor={activeIcon}
          backgroundFillColor={background.default}
        />
        <ViteIcon mainFillColor={activeIcon} />
      </Stack>
      <Stack
        flexDirection={{
          xs: 'column',
          sm: 'row',
          lg: 'row',
        }}
        height="100%"
        width="50%"
        gap={2}
      >
        <MaterialIcon mainFillColor={activeIcon} />
        <EslintIcon mainFillColor={activeIcon} />
        <PrettierIcon mainFillColor={activeIcon} />
      </Stack>
    </Stack>
  );
};

export default IconStack;
