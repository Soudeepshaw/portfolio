import * as React from 'react';
import { Box, AppBar, Toolbar, Button, Container, Divider, Typography, MenuItem, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const logoStyle = {
  width: '150px',
  borderRadius:'10px',
  height: 'auto',
  cursor: 'pointer',
};

function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  React.useEffect(() => {
    gsap.fromTo(
      '.app-bar',
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <div>
      <AppBar
        position="fixed"
        className="app-bar"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.8)'
                  : 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(24px)',
              maxHeight: 60,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <img
                src={
                  '/Logo.png'
                }
                style={logoStyle}
                alt="logo"
              />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem
                  onClick={() => scrollToSection('projects')}
                  sx={{ py: '12px', px: '24px' }}
                >
                  <Typography variant="body1" color="text.primary">
                  Projects
                  </Typography>
                </MenuItem>
                {/*<MenuItem
                  onClick={() => scrollToSection('testimonials')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography variant="body2" color="text.primary">
                    Testimonials
                  </Typography>
                </MenuItem>*/}
                <MenuItem
                  onClick={() => scrollToSection('skills')}
                  sx={{ py: '12px', px: '24px' }}
                >
                  <Typography variant="body1" color="text.primary">
                  Skills
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('education')}
                  sx={{ py: '12px', px: '24px' }}
                >
                  <Typography variant="body1" color="text.primary">
                  Education
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('faq')}
                  sx={{ py: '12px', px: '24px' }}
                >
                  <Typography variant="body1" color="text.primary">
                    FAQ
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 2,
                alignItems: 'center',
              }}
            >
              <ToggleColorMode />
              <Button
                color="primary"
                variant="text"
                size="medium"
                component="a"
                href="/SoudeepResumeFinal.pdf"
                download
                sx={{
                  fontWeight: 'bold',
                  textTransform: 'none', 
                  fontSize: '1rem', 
                }}
              >
                Download CV
              </Button>
              <Button
                color="primary"
                variant="contained"
                size="medium"
                href="mailto:SoudeepShaw@gmail.com"
                sx={{
                  fontWeight: 'bold',
                  textTransform: 'none', 
                  fontSize: '1rem', 
                }}
              >
                Contact Us
              </Button>
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode/>
                  </Box>
                  <MenuItem onClick={() => scrollToSection('projects')}>
                    projects
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('testimonials')}>
                    Testimonials  
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('skills')}>
                  Skills
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('education')}>
                  education
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('faq')}>FAQ</MenuItem>
                  <Divider />
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="text"
                      size="small"
                      component="a"
                      href="/SoudeepResumeFinal.pdf"
                      download
                      sx={{ width: '100%' }}
                    >
                      Download CV
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="outlined"
                      href="mailto:SoudeepShaw@gmail.com"
                      sx={{ width: '100%' }}
                    >
                      Contact Us
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default AppAppBar;
