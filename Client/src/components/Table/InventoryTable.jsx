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

export default function Table1({reports,header, type}) {
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: 'fit-content' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell colSpan={6} sx={{fontWeight:'900', fontSize:24}} align="center">{header}</StyledTableCell>
          </TableRow>
        </TableHead>
        {type && 
        <TableHead>
          <TableRow>
            <StyledTableCell colSpan={6} sx={{fontWeight:'900', fontSize:20}} align="center">{`${type} Report`}</StyledTableCell>
          </TableRow>
        </TableHead>
      }
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{fontWeight:'bold'}}>Product Name</StyledTableCell>
            <StyledTableCell sx={{fontWeight:'bold'}}>Units in a Pack</StyledTableCell>
            <StyledTableCell sx={{fontWeight:'bold'}}>Total Packs</StyledTableCell>
            <StyledTableCell sx={{fontWeight:'bold'}}>Total Units</StyledTableCell>
            <StyledTableCell sx={{fontWeight:'bold'}}>Pack Price</StyledTableCell>
            <StyledTableCell sx={{fontWeight:'bold'}}>Total Price</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reports?.map((report,i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {report.name}
              </StyledTableCell>
              <StyledTableCell >{report.units_in_a_pack}</StyledTableCell>
              <StyledTableCell >{(report.total_packs).toFixed(2)}</StyledTableCell>
              <StyledTableCell >{report.total_units}</StyledTableCell>
              <StyledTableCell >{report.pack_price}</StyledTableCell>
              <StyledTableCell >{(report.pack_price * report.total_packs).toFixed(2)}</StyledTableCell>
            </StyledTableRow>
          ))}
          {reports?.length !== 0 && <StyledTableRow>
            <StyledTableCell sx={{fontWeight:'bold'}} align="right" colSpan={5}>Total</StyledTableCell>
            <StyledTableCell align="right" >{reports?.reduce((acc,curr) => (acc + (curr.pack_price * curr.total_packs)),0).toFixed(2)}</StyledTableCell>
          </StyledTableRow>}
        </TableBody>
      </Table>
    </TableContainer>
  );
}