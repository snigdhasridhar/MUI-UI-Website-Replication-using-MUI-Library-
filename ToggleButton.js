import React from 'react';
import { ToggleButton, ToggleButtonGroup, Box } from '@mui/material';

export default function ToggleTabs() {
  const [alignment, setAlignment] = React.useState('joy');

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) setAlignment(newAlignment);
  };

  return (
    <Box sx={{ p: 2, bgcolor:'#fff', borderRadius: 10, width:420 , marginRight:10}}>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleChange}
        fullWidth
        color="primary"
      >
        <ToggleButton value="joy">Joy UI</ToggleButton>
        <ToggleButton value="material">Material UI</ToggleButton>
        <ToggleButton value="mui-base">MUI Base</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
