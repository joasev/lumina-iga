import React from 'react';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const ToggleMembershipsButton = ({ open, onClick }) => {
  const theme = useTheme();

  return (
    <IconButton
      size="small"
      onClick={onClick}
      sx={{
        borderRadius: '24px',
        padding: '8px 12px 8px 20px',
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: theme.palette.primary.superlight, // On hover
          color: theme.palette.primary.main, // Ensures the text and icons stay the same color on hover
        },
      }}
    >
      <Box display="flex" alignItems="center">
        <Typography variant="body2" component="span" sx={{ color: theme.palette.primary.main }}>
          {open ? 'Hide memberships' : 'Show memberships'}
        </Typography>
        {open ? <ExpandLessIcon sx={{ color: theme.palette.primary.main }} /> : <ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />}
      </Box>
    </IconButton>
  );
};

export default ToggleMembershipsButton;
