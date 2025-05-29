import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',     
        backgroundColor: '#fff',
        px: { xs: 2, sm: 4 },
      }}
    >
      <Box sx={{ maxWidth: 600, textAlign: 'left' }}>
        <Typography variant="h2" sx={{ fontWeight: 800, color: '#3f51b5' }}>
          Move faster
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 600, color: '#000' }}>
          with intuitive
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 600, color: '#000', mb: 3 }}>
          React UI tools
        </Typography>
        <Typography variant="body1" sx={{ color: '#555', mb: 4 }}>
          MUI offers a comprehensive suite of free UI tools to help you ship new features faster.
          Start with Material UI, our fully-loaded component library, or bring your own design system
          to our production-ready components.
        </Typography>
        <Button variant="contained" color="primary" sx={{ width: 'fit-content' }}>
          Discover the Core libraries
        </Button>
      </Box>
    </Box>
  );
}
