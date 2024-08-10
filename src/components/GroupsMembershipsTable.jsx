import React from 'react';
import { Table, TableHead, TableRow, TableBody, TableCell } from '@mui/material';
import { StyledTableCell } from './StyledComponents';

const GroupsMembershipsTable = ({ memberships }) => {
  const sortedGroupMemberships = memberships.sort((a, b) => {
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
  });

  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <StyledTableCell>Member's Domain</StyledTableCell>
          <StyledTableCell>Member Type</StyledTableCell>
          <StyledTableCell>Member</StyledTableCell>
          <StyledTableCell>Owner of Account</StyledTableCell>
          <StyledTableCell>Department</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sortedGroupMemberships.map((membership, index) => (
          <TableRow key={index}>
            <TableCell>{membership.member_domain}</TableCell>
            <TableCell>{membership.member_type}</TableCell>
            <TableCell>{membership.member_sam}</TableCell>
            <TableCell>{membership.user_owner}</TableCell>
            <TableCell>{membership.department}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default GroupsMembershipsTable;
