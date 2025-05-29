// App.js
import React from 'react';
import { Box, Grid } from '@mui/material';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import TaskCard from './Components/TaskCard';
import LibraryInstallBox from './Components/GroupButton';
import TagList from './Components/List';
import CalendarBox from './Components/Calender';
import ToggleButton from './Components/ToggleButton';
import TempSlider from './Components/TempSlider';
import PlayerCard from './Components/PlayerCard';
import FileList from './Components/FileList';
import ToggleTabs from './Components/ToggleTas';

function App() {
  return (
    <Box sx={{ fontFamily: 'sans-serif', bgcolor: '#f5f7fa', minHeight: '100vh' }}>
      <Header />
      <Grid container spacing={4} sx={{ p: 4 }}>
        <Grid item xs={12} md={7}>
          <HeroSection />
        </Grid>

        <Grid item xs={12} md={5}>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
            <Box sx={{ flex: 1, minWidth: '250px' }}>
              <TaskCard />
              <TagList />
              <CalendarBox />
            </Box>

            <Box sx={{ flex: 1, minWidth: '250px' }}>
              <LibraryInstallBox />
              <ToggleButton />

              <TempSlider /> 
                             <FileList />
              <PlayerCard />


            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={5}></Grid>
      </Grid>
    </Box>
  );
}

export default App;
