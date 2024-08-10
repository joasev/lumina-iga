import React, { useState, useEffect } from 'react';
import MyAccessLists from './MyAccessLists';
import MenuBar from './MenuBar';
import { Box, useTheme } from '@mui/material';

const App = () => {
  const [identityData, setIdentityData] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    // Fetch campaigns when the component mounts
    fetch('http://localhost:4000/api/id')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched owned:', data);
        setIdentityData(data);
      })
      .catch(error => console.error('Error owned:', error));
  }, []);

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default, minHeight: '100vh' }}>
      <MenuBar />
      <MyAccessLists identityData={identityData} />
    </Box>
  );
};

export default App;
