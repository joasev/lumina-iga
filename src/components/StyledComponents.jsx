import { styled } from '@mui/system';
import { TableHead, TableCell, TableRow, TableContainer } from '@mui/material';


export const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main, 
}));

export const StyledTableCell = styled(TableCell)({
  fontWeight: 'bold',
});

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '& .MuiTableCell-root': {
    paddingTop: '4px', 
    paddingBottom: '4px', 
  },
}));

export const StyledTableContainer = styled(TableContainer)({
  width: '100%',
  margin: '0 auto', // Center the container
  boxShadow: 'none',
  borderRadius: 0,
});
