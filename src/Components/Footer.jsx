import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';


const logoStyle = {
  width: '200px',
  height: 'auto',
  margin: '20px',
  
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      <Link >SoudeepShaw </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <Box sx={{ m: '-15px' }}>
              <img
                src={
                  '/Logo.png'
                }
                style={logoStyle}
                alt="logo"
              />
            </Box>
            <Typography variant="body2" fontWeight={600} gutterBottom>
              Contact Me
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Interested in collaborating or want to discuss a potential project? Feel free to reach out!
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              soudeephsaw@gmail.com
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Certifications
          </Typography>
          <Link color="text.secondary" href="https://www.hackerrank.com/certificates/3594adfd055d">
          Problem Solving (Intermediate)
          </Link>
          <Link color="text.secondary" href="https://www.hackerrank.com/certificates/a6dee61a8b9b">
          Node (Basic)
          </Link>
          <Link color="text.secondary" href="https://www.hackerrank.com/certificates/8ab2deefed4b">
          Python (Basic)
          </Link>
          
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            My Portfolio
          </Typography>
          <Link color="text.secondary" href="#">
            About Me
          </Link>
          <Link color="text.secondary" href="#projects">
            Projects
          </Link>
          <Link color="text.secondary" href="#skills">
            Skills
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Connect with Me
          </Typography>
          <Link color="text.secondary" href="https://www.linkedin.com/in/soudeepshaw/">
            LinkedIn
          </Link>
          <Link color="text.secondary" href="https://github.com/Soudeepshaw">
            Github
          </Link>
          <Link color="text.secondary" href="https://unstop.com/u/soudesha8322">
          unstop
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <IconButton
            color="inherit"
            href="https://github.com/Soudeepshaw"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://x.com/MaterialUI"
            aria-label="X"
            sx={{ alignSelf: 'center' }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/soudeepshaw/"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}