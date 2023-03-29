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

export default function CashReportTable({reports,type}) {
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 'fit-content' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell colSpan={2} sx={{fontWeight:'900', fontSize:24}} align="center">Cash Report</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <StyledTableCell colSpan={6} sx={{fontWeight:'900', fontSize:20}} align="center">{`${type} Report`}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{fontWeight:'bolder', fontSize:18}}>Total</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {reports?.filter(report => report.label === 'Gross sales').map((report,i) => (
              <StyledTableRow key={i}>
                <StyledTableCell component="th" scope="row">
                  {report.label}
                </StyledTableCell>
                <StyledTableCell>{(report.transaction_amount).toFixed(2)}</StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{fontWeight:'bolder', fontSize:18}}>By Payment</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{fontWeight:'bolder'}}>Type</StyledTableCell>
            <StyledTableCell sx={{fontWeight:'bolder'}}>Total sales</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reports?.filter(report => report.type === 'payment_method').map((report,i) => (
            <StyledTableRow key={i}>
            <StyledTableCell component="th" scope="row">
              {report.label}
            </StyledTableCell>
            <StyledTableCell>{(report.transaction_amount).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          ))}
        </TableBody>
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{fontWeight:'bolder', fontSize:18}}>By Order Point</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{fontWeight:'bolder'}}>Type</StyledTableCell>
            <StyledTableCell sx={{fontWeight:'bolder'}}>Total sales</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {reports?.filter(report => report.type === 'order_point').map((report,i) => (
            <StyledTableRow key={i}>
            <StyledTableCell component="th" scope="row">
              {report.label}
            </StyledTableCell>
            <StyledTableCell>{(report.transaction_amount).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          ))}
        </TableBody>
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{fontWeight:'bolder', fontSize:18}}>By Destination</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{fontWeight:'bolder'}}>Type</StyledTableCell>
            <StyledTableCell sx={{fontWeight:'bolder'}}>Total sales</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {reports?.filter(report => report.type === 'destination').map((report,i) => (
            <StyledTableRow key={i}>
            <StyledTableCell component="th" scope="row">
              {report.label}
            </StyledTableCell>
            <StyledTableCell>{(report.transaction_amount).toFixed(2)}</StyledTableCell>
          </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}