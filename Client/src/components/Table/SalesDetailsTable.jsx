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

export default function DetailsTable({reports,type}){
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 'fit-content' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell colSpan={6} sx={{fontWeight:'900', fontSize:24}} align="center">Sales Details</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <StyledTableCell colSpan={6} sx={{fontWeight:'900', fontSize:20}} align="center">{`${type} Report`}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{fontWeight:'bold'}}>Product Type</StyledTableCell>
            <StyledTableCell colSpan={2} sx={{fontWeight:'bold'}}>Units Sold</StyledTableCell>
            <StyledTableCell colSpan={3} sx={{fontWeight:'bold'}} align="right">Sales</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reports?.map((report,i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {report.type}
              </StyledTableCell>
              <StyledTableCell colSpan={2}>{report.units_sold}</StyledTableCell>
              <StyledTableCell colSpan={3} align="right">{report.total_sales}</StyledTableCell>
            </StyledTableRow>
          ))}
          {reports?.length !== 0 && <StyledTableRow>
            <StyledTableCell sx={{fontWeight:'bold'}} align="right">Total Units</StyledTableCell>
            <StyledTableCell sx={{fontWeight:'bold'}}>{reports?.reduce((acc,curr) => acc + curr.units_sold, 0)}</StyledTableCell>
            <StyledTableCell sx={{fontWeight:'bold'}} align="right" colSpan={2}>Total Sales</StyledTableCell>
            <StyledTableCell align="right" sx={{fontWeight:'bold'}}>{reports?.reduce((acc,curr) => acc + curr.total_sales, 0)}</StyledTableCell>
          </StyledTableRow>}
        </TableBody>
      </Table>
    </TableContainer>
  );
}