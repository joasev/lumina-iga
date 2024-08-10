import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HighlightIcon from '@mui/icons-material/Highlight';
import PersonIcon from '@mui/icons-material/Person';
import { styled } from '@mui/system';
import { ButtonBase, useTheme } from '@mui/material';


const HomeButton = styled(ButtonBase)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light, 
  '&:hover': {
    backgroundColor: theme.palette.primary.hover, 
  },
  width: '64px', // Set the button width to ensure it is square
  height: '64px', // Set the button height to ensure it is square
  borderRadius: 0, // Make the button square
  position: 'absolute',
  left: 0,
  top: 0,
}));

const MenuBar = () => {
  const theme = useTheme();

  return (
    <AppBar position="static" style={{ backgroundColor: theme.palette.primary.main , position: 'relative' }}>
      <Toolbar style={{ paddingLeft: 0 }}>
        <HomeButton focusRipple>
          <HighlightIcon />
        </HomeButton>
        <Typography variant="h6" component="div" style={{ marginLeft: '85px', flexGrow: 1 }}>
          LUMINA
        </Typography>
        <Box style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <PersonIcon style={{ marginRight: '8px' }} />
          <Typography variant="h6" component="div">
            Sam Person
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;
