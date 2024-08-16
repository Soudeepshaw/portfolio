import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from './AppBar';
import Hero from './Hero';
import LogoCollection from './LogoCollection';
import SkillsSection from './SkillsSection';
import Education from './Education';
import PortfolioProjects from './Projects';
import FAQ from './FAQ';
import Footer from './Footer';
import { ColorModeContext } from './ThemeContext';

export default function LandingPage() {
  const [mode, setMode] = React.useState('light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode,
    }),
    [mode]
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: {
            default: mode === 'dark' ? '#212121' : '#ffffff',
            paper: mode === 'dark' ? '#3e2723' : '#f5f5f5',
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppAppBar />
        <Hero />
        <Box sx={{ 
              background: theme.palette.mode === 'dark' 
                ? 'linear-gradient(-95deg ,rgb(13, 13, 13) 50%,rgb(15, 15, 15) 75%, rgb(255, 82, 14) 100%)'
                : 'inherit',
              color: theme.palette.mode === 'dark' ? 'white' : 'inherit'
            }}>
          <LogoCollection />
          <PortfolioProjects/>
          <Divider sx={{ margin: '2rem 0' }} />
          <SkillsSection />
          <Divider sx={{ margin: '2rem 0' }} />
          <Education />
          <Divider sx={{ margin: '2rem 0' }} />
          <FAQ />
          <Divider sx={{ margin: '2rem 0' }} />
          <Footer />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
