import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const textRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const heading = headingRef.current;

    if (text) {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
      tl.fromTo(
        text,
        { opacity: 0, y: '20px' },
        { opacity: 1, y: 0, duration: 1, delay: 0.5 }
      )
        .to(text, {  duration: 0.5 })
        .to(text, {  duration: 0.5 });
    }

    if (heading) {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
      tl.fromTo(
        heading,
        { opacity: 0, x: '-20px' },
        { opacity: 1, x: 0, duration: 1, delay: 0.5 }
      )
        .to(heading, {  duration: 0.5 })
        .to(heading, { duration: 0.5 });
    }
  }, []);

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              gap:'20px',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
            ref={headingRef}
          >
            Hi, I'm  
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
              ref={textRef}
            >
                Soudeep Shaw
            </Typography>
          </Typography>
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            }}
          >
            A MERN Stack Developer
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            Crafting dynamic and engaging web experiences using the MERN stack. 
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <Button 
              variant="contained" 
              color="primary"
              href="#projects" // Update with your projects section ID
            >
              View My Work
            </Button>
            <Button 
              variant="outlined" 
              color="primary"
              href="mailto:SoudeepShaw@gmail.com" // Update with your contact section ID
            >
              Contact Me
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
