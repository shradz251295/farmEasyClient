import {
  TableBody,
  TableCell,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  styled,
  TablePagination,
  Button,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core";
import { tableCellClasses } from "@material-ui/core";
import React, { Component } from "react";
import { deleteProduce, getProductList } from "../../services/farmerService";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const theme = createMuiTheme({
  overrides: {
    MuiTableCell: {
      root: {
        lineHeight: "1",
      //   fontSize: "12px",
      },
      head: {
        lineHeight: "1",
        borderRight:"1px solid #afafaf"
      },
    },
    MuiTable: {
      root: {
        borderCollapse: "inherit",
      },
    },
  },
});
class ViewProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productArr: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    getProductList().then((res) => {
      if (res.status === true) {
        this.setState({ productArr: res.data, isLoading: false });
      }
    });
  }

  deleteState=(row)=>{
    let data={
      id:row._id
    }
    deleteProduce(data)
    .then((res)=>{
      this.componentDidMount();
    })
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
        <div
          style={{
            margin: "50px",
            display: "flex",
            background: "#fff",
            height: "100%",
            color: "#2b2b2b",
            padding: "20px 40px",
          }}
        >
          {this.state.productArr.length === 0 &&
            this.state.isLoading === false ? 
              <h2
                style={{
                  textAlign: "center",
                  textTransform: "capitalize",
                  display: "flex",
                  margin: "0 auto",
                  alignItems: "center",
                }}
              >
                No Records Found
              </h2>
             : this.state.isLoading ? 
              <h2
                style={{
                  textAlign: "center",
                  textTransform: "capitalize",
                  display: "flex",
                  margin: "0 auto",
                  alignItems: "center",
                }}
              >
                Loading.....
              </h2>
             :
          <div style={{ width: "100%" }}>
            <h5>View Product Details</h5>
            <div>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead style={{ background: "dimgray" }}>
                    <TableRow>
                      <TableCell style={{ color: "#fff" }}>
                        Product Category
                      </TableCell>
                      <TableCell style={{ color: "#fff" }} align="left">
                        Product Name
                      </TableCell>
                      <TableCell style={{ color: "#fff" }} align="left">
                      Description
                      </TableCell>
                      <TableCell style={{ color: "#fff" }} align="left">
                        Images
                      </TableCell>
                      <TableCell style={{ color: "#fff" }} align="left">
                        Quantity
                      </TableCell>
                      <TableCell style={{ color: "#fff" }} align="left">
                        Cost
                      </TableCell>
                      <TableCell style={{ color: "#fff" }} align="left">
                        Status
                      </TableCell>
                      <TableCell style={{ color: "#fff" }} align="left">
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.productArr.map((row) => (
                      <StyledTableRow
                      // key={row.category}
                      // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                         <TableCell
                          align="left"
                          style={{
                            textTransform: "capitalize",
                            borderRight: "1px solid #afafaf",
                            padding: "10px 15px",
                          }}
                        >
                          {row.produceCategory}
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{
                            textTransform: "capitalize",
                            borderRight: "1px solid #afafaf",
                            padding: "10px 15px",
                          }}
                        >
                          {row.produceName}
                        </TableCell>
                       
                        <TableCell
                          align="left"
                          style={{
                            textTransform: "capitalize",
                            borderRight: "1px solid #afafaf",
                            padding: "10px 15px",
                          }}
                        >
                          {row.productDescription}
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{
                            textTransform: "capitalize",
                            borderRight: "1px solid #afafaf",
                            padding: "10px 15px",
                          }}
                        >
                         <img src={row.image} width="25%" height="30%"/>
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{
                            textTransform: "capitalize",
                            borderRight: "1px solid #afafaf",
                            padding: "10px 15px",
                          }}
                        >
                          {row.quantityType}
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{
                            textTransform: "capitalize",
                            borderRight: "1px solid #afafaf",
                            padding: "10px 15px",
                          }}
                        >
                         ??? {row.cost}
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{
                            textTransform: "capitalize",
                            borderRight: "1px solid #afafaf",
                            padding: "10px 15px",
                          }}
                        >
                          {row.status}
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{
                            width: "25%",
                            textTransform: "capitalize",
                            padding: "10px 15px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              width: "100%",
                              justifyContent: "space-evenly",
                            }}
                          >
                            <Button
                              style={{
                                background: "royalblue",
                                color: "white",
                                textTransform: "capitalize",
                                fontSize: "13px",
                                lineHeight: "0",
                              }}
                              onClick={()=>this.props.editProduce(row)}
                            >
                              Edit
                            </Button>
                            <Button
                              style={{
                                background: "#E42217",
                                color: "white",
                                textTransform: "capitalize",
                                fontSize: "13px",
                                lineHeight: "1",
                              }}
                              onClick={()=>this.deleteState(row)}
                            >
                              Delete
                            </Button>
                          </div>
                        </TableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
  }
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}
export default ViewProducts;
