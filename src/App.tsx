import '@mantine/core/styles.css';
import { createTheme, localStorageColorSchemeManager, MantineProvider } from '@mantine/core';
import { NavbarNested } from './NavbarNested/NavbarNested';

export default function App() {
  const theme = createTheme({
    fontFamily: 'Open Sans, sans-serif',
    primaryColor: 'cyan',
  });

  const colorSchemeManager = localStorageColorSchemeManager({
    key: 'labelify-web-color-scheme',
  });

  return <MantineProvider theme={theme} colorSchemeManager={colorSchemeManager} classNamesPrefix="labelify">
    <NavbarNested />
  </MantineProvider>;
}