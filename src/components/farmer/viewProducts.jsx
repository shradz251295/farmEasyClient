import {  TableBody,TableCell, Table, TableContainer, TableHead, TableRow ,Paper,styled, TablePagination} from '@material-ui/core';
import {tableCellClasses}  from '@material-ui/core';
import React,{Component} from 'react';

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
function createData(category, product, quantity, image, status,description,action) {
  return { category, product, quantity, image, status,description,action };
}

const rows = [
  createData('Fruits', "Banana", "12kg", "banana.jpg","Active","fresh bananana","Edit/Delete"),
  createData('Vegetables', "Potato", "6kg", "potato.jpg","Active","old potato","Edit/Delete"),
  createData('Vegetables', "Potato", "6kg", "potato.jpg","Active","old potato","Edit/Delete"),
  createData('Vegetables', "Potato", "6kg", "potato.jpg","Active","old potato","Edit/Delete"),
  createData('Vegetables', "Potato", "6kg", "potato.jpg","Active","old potato","Edit/Delete"),
  createData('Vegetables', "Potato", "6kg", "potato.jpg","Active","old potato","Edit/Delete"),
  createData('Vegetables', "Potato", "6kg", "potato.jpg","Active","old potato","Edit/Delete"),

];
class ViewProducts extends Component{
    render(){
        return(
            // <MuiThemeProvider theme={theme}>
            <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
              <div
                style={{
                  margin: "50px",
                  display: "flex",
                  background: "#fff",
                  height:'100%',
                  color:'#2b2b2b',
                  padding:'20px 40px'
                }}
              >
                  <div style={{ width: "100%" }}>
                  <h5>View Product Details</h5>
                    <div>
                    <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead style={{background:'dimgray'}}>
          <TableRow>
            <TableCell style={{color:"#fff"}}>Product Category</TableCell>
            <TableCell style={{color:"#fff"}} align="left">Product Name</TableCell>
            <TableCell style={{color:"#fff"}} align="left">Quantity</TableCell>
            <TableCell style={{color:"#fff"}} align="left">Images</TableCell>
            <TableCell style={{color:"#fff"}} align="left">Status</TableCell>
            <TableCell style={{color:"#fff"}} align="left">Description</TableCell>
            <TableCell style={{color:"#fff"}} align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.category}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  scope="row">
                {row.category}
              </TableCell>
              <TableCell align="left">{row.product}</TableCell>
              <TableCell align="left">{row.quantity}</TableCell>
              <TableCell align="left">{row.image}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left">{row.action}</TableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                    </div>
                </div>
            </div>
            </div>
            // </MuiThemeProvider>
                  
        )
    }
}
export default ViewProducts;