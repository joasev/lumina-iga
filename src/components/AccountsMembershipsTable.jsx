import React from 'react';
import { Table, TableHead, TableRow, TableBody, TableCell } from '@mui/material';
import { StyledTableCell } from './StyledComponents';

const AccountsMembershipsTable = ({ memberships }) => {
  const sortedMemberships = memberships.sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase())
  );

  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <StyledTableCell>Group</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sortedMemberships.map((membership, index) => (
          <TableRow key={index}>
            <TableCell>{membership}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AccountsMembershipsTable;
