import React, { useState } from 'react';
import {
  Box,
  Typography,
  Collapse,
  TableCell,
} from '@mui/material';
import { StyledTableRow } from './StyledComponents';
import ToggleMembershipsButton from './ToggleMembershipsButton'; 
import MembershipsSubTable from './MembershipsSubTable';

const ExpandableRow = ({ rowData, isGroup }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const sortedMemberships = !isGroup && rowData.memberships
    ? rowData.memberships.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    : rowData.memberships || [];

  const sortedGroupMemberships = isGroup && rowData.memberships
    ? rowData.memberships.sort((a, b) => {
        // Reverse alphabetical order by member type
        const memberTypeA = b.member_type.toLowerCase();
        const memberTypeB = a.member_type.toLowerCase();
        if (memberTypeA < memberTypeB) return -1;
        if (memberTypeA > memberTypeB) return 1;

        // Alphabetical order by department
        const deptA = a.department.toLowerCase();
        const deptB = b.department.toLowerCase();
        if (deptA < deptB) return -1;
        if (deptA > deptB) return 1;

        // Alphabetical order by member name
        const memberA = a.member_sam.toLowerCase();
        const memberB = b.member_sam.toLowerCase();
        if (memberA < memberB) return -1;
        if (memberA > memberB) return 1;

        return 0;
      })
    : [];

  return (
    <>
      <StyledTableRow>
        <TableCell>{rowData.system_uid}</TableCell>
        <TableCell>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography>{rowData.sam_account_name}</Typography>
            <ToggleMembershipsButton open={open} onClick={handleToggle} />
          </Box>
        </TableCell>
      </StyledTableRow>
      <StyledTableRow sx={{ backgroundColor: '#white' }}>
        <TableCell colSpan={2} style={{ paddingBottom: 0, paddingTop: 0 }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <MembershipsSubTable sx={{ backgroundColor: '#white' }} 
                isGroup={isGroup}
                memberships={isGroup ? sortedGroupMemberships : sortedMemberships}
                />
          </Collapse>
        </TableCell>
      </StyledTableRow>
    </>
  );
};

export default ExpandableRow;
