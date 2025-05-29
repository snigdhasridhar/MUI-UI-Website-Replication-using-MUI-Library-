import React, { useState } from 'react';
import { Box, Slider, Typography, Paper } from '@mui/material';

export default function TempSlider() {
  const [value, setValue] = useState([25, 50]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper
      elevation={1}
      sx={{
        p: 1,
        mt: 1,
        borderRadius: 2,
        bgcolor: '#fff',
        border: '1px solid #e0e0e0',
        width:440
        
      }}
    >
      <Typography variant="subtitle2" gutterBottom>
        Temperature Range (°C)
      </Typography>

      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={20}
        max={80}
        step={5}
        sx={{ mt: 2 }}
      />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
        <Typography variant="caption">{value[0]}°C</Typography>
        <Typography variant="caption">{value[1]}°C</Typography>
      </Box>
    </Paper>
  );
}
