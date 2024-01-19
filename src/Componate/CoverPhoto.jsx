// CoverPhoto.js
import React from 'react';
import { styled } from '@mui/system';
import { Container, Paper } from '@mui/material';

// Styled components for responsive styling
const CoverContainer = styled(Container)({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0, // Remove default margin
  padding: 0, // Remove default padding
});

const CoverPaper = styled(Paper)({
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  margin: 0, // Remove default margin
  padding: 0,
});

const CoverImage = styled('img')({
  width: '100%', // 100% of viewport width
  height: '100%', // 100% of viewport height
  objectFit: 'cover', 
  margin: 0, // Remove default margin
  padding: 0,// Maintain aspect ratio and cover entire container
//   opacity: 0.5, // Set transparency to 50%
});

const CoverPhoto = ({ desktopImage, mobileImage }) => {
  return (
    <CoverContainer component="main">
      <CoverPaper elevation={3}>
        {/* Show desktop image for screens wider than 800px, and mobile image otherwise */}
        <CoverImage
          src={window.innerWidth >= 800 ? desktopImage : mobileImage}
          alt="Cover photo"
        />
      </CoverPaper>
    </CoverContainer>
  );
};

export default CoverPhoto;
