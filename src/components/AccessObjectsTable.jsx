import React from 'react';
import { Table, TableBody, TableCell, TableRow, Typography, Paper, useTheme } from '@mui/material';
import { StyledTableHead, StyledTableCell, StyledTableContainer, StyledTableRow } from './StyledComponents';
import ExpandableRow from './ExpandableRow';

const AccessObjectsTable = ({ objects, title, noObjectsMessage, isGroup }) => {
  const theme = useTheme();

  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ color: theme.palette.primary.main, fontWeight: 'bold', marginBottom: '16px' }}>
        {title}
      </Typography>
      <StyledTableContainer component={Paper}>
        <Table>
          {objects.length > 0 && (
            <StyledTableHead>
              <TableRow>
                <StyledTableCell>Domain</StyledTableCell>
                <StyledTableCell>{isGroup ? 'Group' : 'Account'}</StyledTableCell>
              </TableRow>
            </StyledTableHead>
          )}
          <TableBody>
            {objects.length > 0 ? (
              objects.map((object, index) => (
                <ExpandableRow key={`${object.system_uid}-${object.sam_account_name}`} rowData={object} isGroup={isGroup} />
              ))
            ) : (
              <StyledTableRow>
                <TableCell colSpan={2}>
                  <Typography variant="body2">{noObjectsMessage}</Typography>
                </TableCell>
              </StyledTableRow>
            )}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </>
  );
};

export default AccessObjectsTable;
