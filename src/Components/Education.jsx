import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const educationData = [
  {
    title: 'High School',
    period: '2019-2021',
    details: [
      'Completed: Class 12',
      'School Name: Narayana (Mahestala)',
      'Percentage: 83%',
      'Stream: Science (PCM)',
    ],
    buttonText: 'View Details',
    buttonVariant: 'outlined',
  },
  {
    title: 'College',
    subheader: 'Current',
    period: '2021-2025',
    details: [
      'University Name: Maulana Abul Kalam Azad University of Technology',
      'CGPA: 8.29',
      'Stream: Computer Science Engineering',
      'College Name: Budge Budge Institute of Technology',
    ],
    buttonText: 'View Details',
    buttonVariant: 'contained',
  },
  {
    title: 'Secondary School',
    period: '2017-2019',
    details: [
      'Completed: Class 10',
      'School Name: Sudhir Memorial',
      
      'Stream: General Studies',
    ],
    buttonText: 'View Details',
    buttonVariant: 'outlined',
  },
];

export default function Education() {
  return (
    <Container
      id="education"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Education
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Here's a summary of my educational background, including high school and college details.
        </Typography>
      </Box>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {educationData.map((item) => (
          <Grid
            item
            key={item.title}
            xs={12}
            sm={item.title === 'College' ? 12 : 6}
            md={4}
          >
            <Card
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                border: item.title === 'College' ? '1px solid' : undefined,
                borderColor:
                  item.title === 'College' ? 'primary.main' : undefined,
                background:
                  item.title === 'College'
                    ? 'linear-gradient(#033363, #021F3B)'
                    : undefined,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    mb: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: item.title === 'College' ? 'grey.100' : '',
                  }}
                >
                  <Typography component="h3" variant="h6">
                    {item.title}
                  </Typography>
                  {item.title === 'College' && (
                    <Chip
                      icon={<AutoAwesomeIcon />}
                      label={item.subheader}
                      size="small"
                      sx={{
                        background: (theme) =>
                          theme.palette.mode === 'light' ? '' : 'none',
                        backgroundColor: 'primary.contrastText',
                        '& .MuiChip-label': {
                          color: 'primary.dark',
                        },
                        '& .MuiChip-icon': {
                          color: 'primary.dark',
                        },
                      }}
                    />
                  )}
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    color: item.title === 'College' ? 'grey.50' : undefined,
                  }}
                >
                  <Typography component="h3" variant="h2">
                    {item.period}
                  </Typography>
                  <Typography component="h3" variant="h6">
                      Academic Years
                  </Typography>
                </Box>
                <Divider
                  sx={{
                    my: 2,
                    opacity: 0.2,
                    borderColor: 'grey.500',
                  }}
                />
                {item.details.map((line) => (
                  <Box
                    key={line}
                    sx={{
                      py: 1,
                      display: 'flex',
                      gap: 1.5,
                      alignItems: 'center',
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        width: 20,
                        color:
                          item.title === 'College'
                            ? 'primary.light'
                            : 'primary.main',
                      }}
                    />
                    <Typography
                      component="text"
                      variant="subtitle2"
                      sx={{
                        color:
                          item.title === 'College' ? 'grey.200' : undefined,
                      }}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
