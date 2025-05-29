import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';

const files = [
  { name: 'Assets & illustrations', size: '21 MB', color: '#00C853' },
  { name: 'Components', size: '11.0 kB', color: '#00C853' },
  { name: 'Dependencies', size: '44 MB', color: '#00C853' },
];

export default function FileList() {
  return (
    <Paper elevation={1} sx={{ p: 2, mt: 1, borderRadius: 3, bgcolor: '#fff' }}>
      <Typography fontWeight="bold" mb={1}>
        
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Size</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {files.map((file) => (
            <TableRow key={file.name}>
              <TableCell>{file.name}</TableCell>
              <TableCell sx={{ color: file.color, fontWeight: 600 }}>{file.size}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
