import React from 'react';
import { Box } from '@mui/material';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

export default function CalendarBox() {
  return (
    <Box sx={{ bgcolor: '#fff', p: 2, borderRadius: 3 , width:300}}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker defaultValue={dayjs()} displayStaticWrapperAs="desktop" />
      </LocalizationProvider>
    </Box>
  );
}