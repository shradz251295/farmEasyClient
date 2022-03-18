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
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core";
import React, { Component } from "react";
import { getFarmerList } from "../../services/farmerService";

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
        fontSize: "12px",
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

class ViewFarmersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      farmerData: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    // getAdminList()
    // .then((res)=>{
    //   if(res.status===true){
    //     this.setState({adminCount:res.data.length})
    //   }
    // })

    getFarmerList().then((res) => {
      if (res.status === true) {
        this.setState({ farmerData: res.data, isLoading: false });
      }
    });
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div
          style={{ display: "flex", width: "100%", flexDirection: "column" }}
        >
          <div
            style={{
              // margin: "50px",
              display: "flex",
              background: "#fff",
              height: "100%",
              color: "#2b2b2b",
              // padding: "20px 40px",
            }}
          >
            {this.state.farmerData.length === 0 &&
            this.state.isLoading === false ? (
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
            ) : this.state.isLoading ? (
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
            ) : (
              <div style={{ width: "100%" }}>
                <h5>View Farmer's Details</h5>
                <div style={{ margin: "0 auto", width: "95%" }}>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                      <TableHead style={{ background: "dimgray" }}>
                        <TableRow>
                          <TableCell style={{ color: "#fff" }}>Name</TableCell>
                          <TableCell style={{ color: "#fff" }} align="left">
                            Username
                          </TableCell>
                          <TableCell style={{ color: "#fff" }} align="left">
                            Address
                          </TableCell>
                          <TableCell style={{ color: "#fff" }} align="left">
                            Country
                          </TableCell>
                          <TableCell style={{ color: "#fff" }} align="left">
                            State
                          </TableCell>
                          <TableCell style={{ color: "#fff" }} align="left">
                            City
                          </TableCell>
                          <TableCell style={{ color: "#fff" }} align="left">
                            Pincode
                          </TableCell>
                          <TableCell style={{ color: "#fff" }} align="left">
                            Mobile Number
                          </TableCell>
                          <TableCell style={{ color: "#fff" }} align="left">
                            Alternative Mobile Number
                          </TableCell>
                          {/* <TableCell style={{ color: "#fff" }} align="left">
                            Action
                          </TableCell> */}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {this.state.farmerData.map((row) => (
                          <StyledTableRow
                          // key={row.state}
                          // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell
                              align="left"
                              style={{
                                textTransform: "capitalize",
                                borderRight: "1px solid #afafaf",
                                borderLeft: "1px solid #afafaf",
                                padding: "10px 15px",
                              }}
                            >
                              {row.name}
                            </TableCell>
                            <TableCell
                              align="left"
                              style={{
                                textTransform: "none",
                                borderRight: "1px solid #afafaf",
                                padding: "10px 15px",
                              }}
                            >
                              {row.emailId}
                            </TableCell>

                            <TableCell
                              align="left"
                              style={{
                                textTransform: "capitalize",
                                borderRight: "1px solid #afafaf",
                                padding: "10px 15px",
                              }}
                            >
                              {row.address}
                            </TableCell>
                            <TableCell
                              align="left"
                              style={{
                                textTransform: "capitalize",
                                borderRight: "1px solid #afafaf",
                                padding: "10px 15px",
                              }}
                            >
                              {row.country}
                            </TableCell>
                            <TableCell
                              align="left"
                              style={{
                                textTransform: "capitalize",
                                borderRight: "1px solid #afafaf",
                                padding: "10px 15px",
                              }}
                            >
                              {row.state}
                            </TableCell>
                            <TableCell
                              align="left"
                              style={{
                                textTransform: "capitalize",
                                borderRight: "1px solid #afafaf",
                                padding: "10px 15px",
                              }}
                            >
                              {row.city}
                            </TableCell>
                            <TableCell
                              align="left"
                              style={{
                                textTransform: "capitalize",
                                borderRight: "1px solid #afafaf",
                                padding: "10px 15px",
                              }}
                            >
                              {row.pincode}
                            </TableCell>
                            <TableCell
                              align="left"
                              style={{
                                textTransform: "capitalize",
                                borderRight: "1px solid #afafaf",
                                padding: "10px 15px",
                              }}
                            >
                              {row.mobile_number}
                            </TableCell>
                            <TableCell
                              align="left"
                              style={{
                                textTransform: "capitalize",
                                borderRight: "1px solid #afafaf",
                                padding: "10px 15px",
                              }}
                            >
                              {row.alternative_mobile_number}
                            </TableCell>
                            {/* <TableCell
                              align="left"
                              style={{
                                borderRight: "1px solid #afafaf",
                                textTransform: "capitalize",
                                padding: "10px 15px",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  // width: "100%",
                                  justifyContent: "space-evenly",
                                }}
                              >
                                <Button
                                  style={{
                                    background: "royalblue",
                                    color: "white",
                                    textTransform: "capitalize",
                                    fontSize: "13px",
                                    lineHeight: "1",
                                    width: "50px",
                                    marginBottom: "5%",
                                  }}
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
                                    width: "50px",
                                  }}
                                >
                                  Delete
                                </Button>
                              </div>
                            </TableCell> */}
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
            )}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default ViewFarmersList;
