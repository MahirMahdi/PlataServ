import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function TransactionTable({reports,type}) {
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 'fit-content' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell colSpan={6} sx={{fontWeight:'900', fontSize:24}} align="center">Banking Information</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <StyledTableCell colSpan={6} sx={{fontWeight:'900', fontSize:20}} align="center">{`${type} Report`}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{fontWeight:'bolder'}}>Charge Type</StyledTableCell>
            <StyledTableCell sx={{fontWeight:'bolder'}} align="right">Transactions Count</StyledTableCell>
            <StyledTableCell colSpan={3} sx={{fontWeight:'bolder'}} align="right">Amount</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reports?.map((report,i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {report.label}
              </StyledTableCell>
              <StyledTableCell align="right">{report.transaction_count}</StyledTableCell>
              <StyledTableCell colSpan={3} align="right">{report.transaction_amount}</StyledTableCell>
            </StyledTableRow>
          ))}
          {reports?.length !== 0 && <StyledTableRow>
            <StyledTableCell sx={{fontWeight:'bolder'}} align="right">Total Count</StyledTableCell>
            <StyledTableCell sx={{fontWeight:'bolder'}} align="right">{reports?.reduce((acc,curr) => acc + curr.transaction_count,0)}</StyledTableCell>
            <StyledTableCell sx={{fontWeight:'bolder'}} align="right">Total Amount</StyledTableCell>
            <StyledTableCell sx={{fontWeight:'bolder'}} align="right">{reports?.reduce((acc,curr) => acc + curr.transaction_amount,0)}</StyledTableCell>
          </StyledTableRow>}
        </TableBody>
      </Table>
    </TableContainer>
  );
}