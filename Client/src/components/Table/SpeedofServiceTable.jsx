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

export default function SpeedOfServiceTable({reports,type}) {
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 'fit-content' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell colSpan={3} sx={{fontWeight:'900', fontSize:24}} align="center">Speed-of-Service</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <StyledTableCell colSpan={6} sx={{fontWeight:'900', fontSize:20}} align="center">{`${type} Report`}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <StyledTableCell colSpan={3} sx={{fontWeight:'bold', fontSize:18}}>By Period</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{fontWeight:'bold'}}>Period</StyledTableCell>
            <StyledTableCell sx={{fontWeight:'bold'}}>Ticket Count</StyledTableCell>
            <StyledTableCell sx={{fontWeight:'bold'}}>Avg. Ticket Time(sec)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {reports?.by_period?.map((report,i) => (
              <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {report.label}
              </StyledTableCell>
              <StyledTableCell>{report.count}</StyledTableCell>
              <StyledTableCell>{report.avg_time}</StyledTableCell>
            </StyledTableRow>
            ))}
        </TableBody>
        <TableHead>
          <TableRow>
            <StyledTableCell colSpan={3} sx={{fontWeight:'bold', fontSize:18}}>By Timeline</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{fontWeight:'bold'}}>Timeline(sec)</StyledTableCell>
            <StyledTableCell sx={{fontWeight:'bold'}}>Ticket Count</StyledTableCell>
            <StyledTableCell sx={{fontWeight:'bold'}}>% of Overall Ticket Time</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reports?.by_timeline?.map((report,i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {report.label}
              </StyledTableCell>
              <StyledTableCell>{report.count}</StyledTableCell>
              <StyledTableCell>{report.percentage}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}