import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

// Array of projects with descriptive content
const projectList = [
  {
    lightModeImage: 'url("https://ideogram.ai/assets/image/lossless/response/Y6eraaMNSqSdG4B3ons6fg")',
    darkModeImage: 'url("https://ideogram.ai/assets/progressive-image/balanced/response/oGBsuLj5S1qmq3whTN0kIA")',
    projectName: 'MedVoice',
    projectDescription:
      'Problem: Doctors often write incorrect or illegible prescriptions due to time constraints. Solution: A web application that takes voice commands from doctors to accurately document prescriptions.',
    projectOutcome: 'Ensures clear and accurate prescriptions. Reduces risk of errors and improves patient safety. Enhances efficiency in the prescription process. Improves overall healthcare outcomes.',
    techStack: ["Gemini", "React.js", "Webspeech"],
    projectLink: 'https://med-voice-soudeepshaws-projects.vercel.app/' // Replace with actual deployed link
  },
  {
    lightModeImage: 'url("https://ideogram.ai/assets/progressive-image/balanced/response/rayQQkA5StG5htoUN6vUTw")',
    darkModeImage: 'url("https://ideogram.ai/assets/progressive-image/balanced/response/69QyVqz4SoSMGE47-JMlKg")',
    projectName: 'Web-Based Chess Game with Real-Time Features (ChessWheel)',
    projectDescription:
      'Developed a web-based chess game allowing users to play online against random opponents or AI bots, integrated with real-time chat functionality.',
    projectOutcome: 'Integrated AI bots that can simulate matches with varying difficulty levels, catering to 75% of users looking for challenging gameplay. Enhances real-time communication and gameplay through robust WebSocket connections.',
    techStack: ["TypeScript", "React.js", "Socket.io"],
    projectLink: 'https://chess-with-react-frontend.onrender.com/' // Replace with actual deployed link
  },
  {
    lightModeImage: 'url("https://ideogram.ai/assets/progressive-image/balanced/response/OvaAuqhBSqW0ntVWW56Afg")',
    darkModeImage: 'url("https://ideogram.ai/assets/progressive-image/balanced/response/HBMP6huuTbSb22AJpq76qw")',
    projectName: 'FindStranger - Video Calling Platform with Real-Time Communication',
    projectDescription:
      'Developed a website that enables users to engage in video calls with strangers, leveraging WebRTC for real-time video communication, Socket.io for signaling and real-time messaging, and React with TypeScript for the frontend.',
    projectOutcome: 'Provides a platform for users to engage in real-time video calls with strangers.',
    techStack: ['WebRTC', 'Socket.io', 'React & TypeScript'],
    projectLink: 'https://omegle-fr.onrender.com/' // Replace with actual deployed link
  },
];

export default function PortfolioProjects() {
  const [selectedProjectIndex, setSelectedProjectIndex] = React.useState(0);

  const handleProjectClick = (index) => {
    setSelectedProjectIndex(index);
  };

  const selectedProject = projectList[selectedProjectIndex];
  return (
    <Container id="projects" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography component="h2" variant="h4" color="text.primary">
              My Projects
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              Explore a selection of my recent projects that showcase my skills and experience in web and mobile development.
            </Typography>
          </div>
          <Grid container item gap={1} sx={{ display: { xs: 'auto', sm: 'none' } }}>
            {projectList.map(({ projectName }, index) => (
              <Chip
                key={index}
                label={projectName}
                onClick={() => handleProjectClick(index)}
                sx={{
                  borderColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedProjectIndex === index ? 'primary.light' : '';
                    }
                    return selectedProjectIndex === index ? 'primary.light' : '';
                  },
                  background: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedProjectIndex === index ? 'none' : '';
                    }
                    return selectedProjectIndex === index ? 'none' : '';
                  },
                  backgroundColor: selectedProjectIndex === index ? 'primary.main' : '',
                  '& .MuiChip-label': {
                    color: selectedProjectIndex === index ? '#fff' : '',
                  },
                }}
              />
            ))}
          </Grid>
          <Box
            component={Card}
            variant="outlined"
            sx={{
              display: { xs: 'auto', sm: 'none' },
              mt: 4,
            }}
          >

            <Link href={projectList[selectedProjectIndex].projectLink} target="_blank" rel="noopener noreferrer"> 
            <Box
              sx={{
                backgroundImage: (theme) =>
                  theme.palette.mode === 'light'
                    ? projectList[selectedProjectIndex].lightModeImage
                    : projectList[selectedProjectIndex].darkModeImage,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: 280,
              }}
            />
            </Link>
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography color="text.primary" variant="body2" fontWeight="bold">
                {selectedProject.projectName}
              </Typography>
              <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                {selectedProject.projectDescription}
              </Typography>
              <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                <strong>Outcome:</strong> {selectedProject.projectOutcome}
              </Typography>
              <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                <strong>Tech Stack:</strong> {selectedProject.techStack.join(', ')}
              </Typography>
              <Link
                href={selectedProject.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                variant="body2"
                fontWeight="bold"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  '& > svg': { transition: '0.2s' },
                  '&:hover > svg': { transform: 'translateX(2px)' },
                }}
              >
                <span>See Project</span>
                <ChevronRightRoundedIcon
                  fontSize="small"
                  sx={{ mt: '1px', ml: '2px' }}
                />
              </Link>
            </Box>
          </Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
          >
            {projectList.map(({ projectName, projectDescription, projectOutcome, techStack, projectLink }, index) => (
              <Card
                key={index}
                variant="outlined"
                component={Button}
                onClick={() => handleProjectClick(index)}
                sx={{
                  p: 3,
                  height: 'fit-content',
                  width: '100%',
                  background: 'none',
                  backgroundColor:
                    selectedProjectIndex === index ? 'action.selected' : undefined,
                  borderColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedProjectIndex === index
                        ? 'primary.light'
                        : 'grey.200';
                    }
                    return selectedProjectIndex === index ? 'primary.dark' : 'grey.800';
                  },
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'center' },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      color: (theme) => {
                        if (theme.palette.mode === 'light') {
                          return selectedProjectIndex === index
                            ? 'primary.main'
                            : 'grey.300';
                        }
                        return selectedProjectIndex === index
                          ? 'primary.main'
                          : 'grey.700';
                      },
                    }}
                  >
                    {/* You can add project-specific icons here if needed */}
                  </Box>
                  <Box sx={{ textTransform: 'none' }}>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {projectName}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ my: 0.5 }}
                    >
                      {projectDescription}
                    </Typography>
                    <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                      <strong>Outcome:</strong> {projectOutcome}
                    </Typography>
                    <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                      <strong>Tech Stack:</strong> {techStack.join(', ')}
                    </Typography>
                    <Link
                      href={projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="primary"
                      variant="body2"
                      fontWeight="bold"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        '& > svg': { transition: '0.2s' },
                        '&:hover > svg': { transform: 'translateX(2px)' },
                      }}
                    >
                      <span>See Project</span>
                      <ChevronRightRoundedIcon
                        fontSize="small"
                        sx={{ mt: '1px', ml: '2px' }}
                      />
                    </Link>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: { xs: 'none', sm: 'block' } }}>

          <Link href={selectedProject.projectLink} target="_blank" rel="noopener noreferrer">
          <Box
            component={Card}
            variant="outlined"
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: (theme) =>
                theme.palette.mode === 'light'
                  ? selectedProject.lightModeImage
                  : selectedProject.darkModeImage,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
