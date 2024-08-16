import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import WebRoundedIcon from '@mui/icons-material/WebRounded';
import DataObjectIcon from '@mui/icons-material/DataObject';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import BarChartIcon from '@mui/icons-material/BarChart';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';



const skills = [
  {
    icon: <WebRoundedIcon />,
    title: 'Front End Development',
    description: [
      { name: 'React.js', icon: <JavascriptIcon /> },
      { name: 'JavaScript (ES17)', icon: <JavascriptIcon /> },
      { name: 'TypeScript', icon: <JavascriptIcon /> },
      { name: 'HTML', icon: <HtmlIcon /> },
      { name: 'CSS', icon: <CssIcon /> },
      { name: 'Tailwind CSS', icon: <CssIcon /> },
    ],
  },
  {
    icon: <StorageRoundedIcon />,
    title: 'Back End Development',
    description: [
      { name: 'Node.js', icon: <JavascriptIcon /> },
      { name: 'Express.js', icon: <JavascriptIcon /> },
    ],
  },
  {
    icon: <DataObjectIcon />,
    title: 'Database',
    description: [{ name: 'MongoDB', icon: <DataObjectIcon /> }],
  },
  {
    icon: <CodeRoundedIcon />,
    title: 'Programming Languages',
    description: [
      { name: 'Python', icon: <CodeRoundedIcon /> },
      { name: 'JavaScript', icon: <JavascriptIcon /> },
    ],
  },
  {
    icon: <GitHubIcon />,
    title: 'Version Control',
    description: [{ name: 'Git', icon: <GitHubIcon /> }],
  },
  {
    icon: <BarChartIcon />,
    title: 'Data Analysis',
    description: [{ name: 'Power BI', icon: <BarChartIcon /> }],
  },
  {
    icon: <LanguageIcon />,
    title: 'Other',
    description: [{ name: 'Object-Oriented Programming', icon: <LanguageIcon /> }],
  },
];

export default function SkillsSection() {
  return (
    <Box
      id="skills"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ color: 'white' }}>
          Skills
        </Typography>
        <Typography variant="body1" align="center" sx={{ color: 'grey.400', mb: 4 }}>
          Explore my diverse skill set spanning front-end, back-end, databases, and more. Each skill represents my commitment to delivering innovative and reliable solutions.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  backgroundColor: 'transparent',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  transition: 'transform 0.6s',
                  transformStyle: 'preserve-3d',
                  position: 'relative',
                  height: '200px',
                  overflow: 'hidden', // Add this line to prevent content overflow
                  '&:hover': {
                    // transform: 'rotateY(180deg)',
                  },
                }}
              >
                {/* Front Side */}
                <Box
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Box sx={{ color: 'primary.main', fontSize: 40 }}>{skill.icon}</Box>
                  <Typography variant="h6" component="div" gutterBottom sx={{ color: 'white', textAlign: 'center' }}>
                    {skill.title}
                  </Typography>
                </Box>

                {/* Back Side */}
                <Box
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 2,
                    // transform: 'rotateY(180deg)',
                    backfaceVisibility: 'hidden',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  <Typography variant="body2" color="grey.400" sx={{ textAlign: 'center' }}>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                      {skill.description.map((item, idx) => (
                        <li key={idx} style={{ fontSize: '1 rem', marginBottom: '8px' }}>
                          {item.icon} {item.name}
                        </li>
                      ))}
                    </ul>
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
