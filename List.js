import React from 'react';
import { Box, Chip } from '@mui/material';

const tags = [
  { label: 'MUI', color: '#1976d2' },       
  { label: 'React', color: 'yellow' },     
  { label: 'CSS', color: 'green' },    
  { label: 'TypeScript', color: 'red' },
  { label: 'JavaScript', color: '' } 
];

export default function TagList() {
  return (
    <Box sx={{ mb: 2, borderRadius:10 }}>
      {tags.map((tag) => (
        <Chip
          key={tag.label}
          label={tag.label}
          variant="outlined"
          sx={{
            color: tag.color,
            borderColor: tag.color,
            mr: 1,
            mb: 1,
            fontWeight: 600,
            borderRadius:10
          }}
        />
      ))}
    </Box>
  );
}
