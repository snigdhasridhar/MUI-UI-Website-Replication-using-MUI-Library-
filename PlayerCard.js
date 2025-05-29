import React from 'react';
import { Box, Typography, Avatar, LinearProgress, Paper } from '@mui/material';

export default function PlayerCard() {
  return (
    <Paper elevation={1} sx={{ p: 2, borderRadius: 3, mb: 2 , marginTop:2}}>
      <Box display="flex" alignItems="center" gap={2}>
        <Avatar alt="Player" src="" sx={{ width: 56, height: 56 }} />
        <Box>
          <Typography variant="body1" fontWeight="bold">John Doe</Typography>
          <Typography variant="body2" color="text.secondary">Frontend Developer</Typography>
        </Box>
      </Box>
      <Box mt={2}>
        <Typography variant="body2" gutterBottom>Progress</Typography>
        <LinearProgress variant="determinate" value={70} />
      </Box>
    </Paper>
  );
}
