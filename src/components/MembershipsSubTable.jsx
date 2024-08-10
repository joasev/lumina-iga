import React from 'react';
import { Box, Typography } from '@mui/material';
import GroupsMembershipsTable from './GroupsMembershipsTable';
import AccountsMembershipsTable from './AccountsMembershipsTable';

const MembershipsSubTable = ({ isGroup, memberships = [] , sx}) => {
  return (
    <Box
      margin={1}
      sx={{
        padding: '16px', 
        borderRadius: '8px', 
        ...sx
      }}
    >
      {memberships.length > 0 ? (
        <>
          <Typography variant="body2" gutterBottom>
            Memberships:
          </Typography>
          {isGroup ? (
            <GroupsMembershipsTable memberships={memberships} />
          ) : (
            <AccountsMembershipsTable memberships={memberships} />
          )}
        </>
      ) : (
        <Typography variant="body2" gutterBottom>
          No memberships
        </Typography>
      )}
    </Box>
  );
};

export default MembershipsSubTable;
