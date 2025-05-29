import React, { useState } from 'react';
import { Box, ToggleButtonGroup, ToggleButton, Paper } from '@mui/material';

export default function ToggleTabs() {
  const [alignment, setAlignment] = useState('web');

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) setAlignment(newAlignment);
  };

  return (
    <Paper elevation={1} sx={{ p: 2, borderRadius: 3, mb: 3 }}>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="platform"
        fullWidth
      >
        <ToggleButton value="web" aria-label="web">
          Web
        </ToggleButton>
        <ToggleButton value="android" aria-label="android">
          Android
        </ToggleButton>
        <ToggleButton value="ios" aria-label="ios">
          iOS
        </ToggleButton>
      </ToggleButtonGroup>
    </Paper>
  );
}
