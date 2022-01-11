import { Button, Input, InputBase, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import "./user.css"

const User = () => {
    return (
        <div>
            <div className="">
                {/* ========================= */}
               <div > <Input className="search" type="text" placeholder="Search…"/> {"|"} <Button className="search">Search</Button></div>
                {/* ========================= */}
                <TableContainer>

                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Name </TableCell>
                                <TableCell align="right">Id</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Password</TableCell>
                                <TableCell align="right">Pin No</TableCell>
                                <TableCell align="right">Amount</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right">Approved</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody> 
                            <TableRow>                           
                                <TableCell align="right">Shahadat Hossain</TableCell>
                                <TableCell align="right">QF-012345</TableCell>
                                <TableCell align="right">shahadatvip9459@gmail.com</TableCell>                     
                                <TableCell align="right">BABU1234</TableCell>                     
                                <TableCell align="right">12345</TableCell>                     
                                <TableCell align="right">10000</TableCell>                     
                                <TableCell align="right">Active</TableCell>                     
                                <TableCell align="right"><input type="checkbox"  /></TableCell>  
                                <TableCell align="right"><Button>Update</Button></TableCell>  

                            </TableRow>
                            <TableRow>                           
                                <TableCell align="right">Shahadat Hossain</TableCell>
                                <TableCell align="right">QF-012345</TableCell>
                                <TableCell align="right">shahadatvip9459@gmail.com</TableCell>                     
                                <TableCell align="right">BABU1234</TableCell>                     
                                <TableCell align="right">12345</TableCell>                     
                                <TableCell align="right">15000</TableCell>                     
                                <TableCell align="right">DeActive</TableCell>                     
                                <TableCell align="right"><input type="checkbox"  /></TableCell>                     
                                <TableCell align="right"><Button>Update</Button></TableCell>  
                            </TableRow>
                        </TableBody>


                </TableContainer>
            </div>
        </div>
    );
};

export default User;