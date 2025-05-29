import React from 'react';
import { Box, Typography, Avatar, LinearProgress } from '@mui/material';

export default function TaskCard() {
  return (
    <Box sx={{ bgcolor: '#3f51b5', color: '#fff', p: 3, borderRadius: 3, mb: 2,width:333 }}>
      <Typography variant="body2" sx={{ opacity: 0.8 }}>March 25th</Typography>
      <Typography variant="h6" sx={{ my: 2 }}>Customize every button and chip instance primary color</Typography>
      <Box display="flex" alignItems="center" mt={2}>
        <Avatar src="" sx={{ width: 40, height: 40, mr: 2 }} />
        <Box>
          <Typography variant="caption" sx={{ opacity: 0.7 }}>Assigned to</Typography>
          <Typography variant="body2">Me</Typography>
        </Box>
      </Box>
      <LinearProgress variant="determinate" value={60} sx={{ mt: 3, bgcolor: '#5c6bc0' }} />
      <Typography variant="body2" sx={{ mt: 1, textAlign: 'right' }}>60%</Typography>
    </Box>
  );
}