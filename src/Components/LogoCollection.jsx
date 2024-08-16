import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LeetCodeIcon from '@mui/icons-material/Code'; // Assuming you want to use a code icon for LeetCode

const socialMediaLinks = [
  {
    icon: FacebookIcon,
    link: 'https://www.facebook.com/soudeep.shaw.7/', // Replace with your Facebook profile link
    color: '#405DE6',
    name:"Facebook" // Facebook blue
  },
  {
    icon: LinkedInIcon,
    link: 'https://www.linkedin.com/in/soudeepshaw/', // Replace with your LinkedIn profile link
    color: '#0077B5', 
    name:"LinkedIn" // LinkedIn blue
  },
  {
    icon: InstagramIcon,
    link: 'https://www.instagram.com/soudeep.shaw/', // Replace with your Instagram profile link
    color: '#E1306C',
    name:"Instagram" // Instagram gradient color
  },
  {
    icon: LeetCodeIcon,
    link: 'https://leetcode.com/u/soudeep12/', // Replace with your LeetCode profile link
    color: '#FFA116',
    name:"LeetCode", // LeetCode orange
  },
  {
    icon: () => <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAUVBMVEUNFB4A6mT///8AAAAA7WUMABgACxcJERwNABY+QUcADhsHmUcEvlW9vsCwsbPq6usAAAeIio2Ulpjv7/ANABsJdToHnkmrra+6u7329vcbICjCC+SvAAAA6klEQVR4nO3cOQ7CMBBA0ZCFsBNIWML9D0rBUmQaFIkIrPdaT+Ff2pacZQAAAAAAAAAAAAAAAAAAAAA81UXQxKk4VLzXumqkiQJvbT50CInNMQy1r8TuVI5zniZxvgx7z3fFcKrYxqlV/Vir1uVsjHKzUKhQoUKFChUqVKhQoUKFChUqVKhQoUKFCr9ceImPFNe0Cvt90KdV+BmFChUqVKhQoUKFChUqVKjw3wvTP+Onf0+T/l2bQoUKFSpUqFChQoUKFSpUqFChQoUKFSpMsTD9PxXS/xcDAAAAAAAAAAAAAAAAAAAA4LfdARWmTT7WMH+PAAAAAElFTkSuQmCC" alt="HackerRank" style={{ width: '48px', height: '48px' }} />,
    link: 'https://www.hackerrank.com/profile/Soudeepshaw', // Replace with your HackerRank profile link
    color: '#2EC866',
    name:"HackerRank" // HackerRank green
  },
  // Add more social media links as needed
];

const logoStyle = {
  fontSize: '48px', // Adjust icon size as needed
  margin: '0 16px',
  opacity: 0.7,

};

export default function LogoCollection() {

  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
      variant="h4"
        component="p"
        align="center"
        color="text.secondary"
        mb={4}

      >
        Find me on social media
      </Typography>
      <Box className="marquee-container">
        <Box className="marquee">
            {[...socialMediaLinks, ...socialMediaLinks].map((socialLink, index) => (
            <Box key={index} className="marquee-item">
                <a href={socialLink.link} target="_blank" rel="noopener noreferrer">
                <socialLink.icon style={{ ...logoStyle, color: socialLink.color }} />
                </a>
                <p>{socialLink.name}</p>
            </Box>
            ))}
        </Box>
    </Box>
    </Box>
  );
}