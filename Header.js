import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Link } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#3f51b5',
          color: '#fff',
          textAlign: 'center',
          py: 1.5,
          fontSize: '0.875rem',
        }}
      >
         Influence MUI’s 2025 roadmap! Participate in the latest{' '}
        <Link href="#" underline="hover" color="inherit" sx={{ fontWeight: 600 }}>
          Developer Survey →
        </Link>
      </Box>

      {/* Main Navigation Bar */}
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Left Side Logo and Links */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AdbIcon sx={{ color: '#3f51b5', mr: 1 }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', mr: 3 }}>
              MUI
            </Typography>
            {['Products', 'Docs', 'Pricing', 'About us', 'Blog'].map((item) => (
              <Button key={item} sx={{ color: '#333', textTransform: 'none', fontWeight: 500, borderRadius:"30px" }}>
                {item}
              </Button>
            ))}
          </Box>

          <Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
