import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function LibraryInstallBox() {
  return (
    <Paper elevation={1} sx={{ p: 2, mb: 1, width: 433, borderRadius: 5 }}>
      <Typography variant="body1" fontWeight="bold" mb={1}>
        Install one of our production-ready libraries to get your next app started inevitably successful:
      </Typography>
      <List dense>
        {['Material UI', 'MUI Base', 'Joy UI'].map((lib) => (
          <ListItem key={lib}>
            <ListItemIcon sx={{ minWidth: 24 }}>
              <FiberManualRecordIcon sx={{ fontSize: 8, color: 'text.secondary' }} />
            </ListItemIcon>
            <ListItemText primary={lib} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
