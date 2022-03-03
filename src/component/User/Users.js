import React, { useEffect, useState } from 'react';
import { Button, Input, InputBase, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


const Users = (props) => {
    
  const user=props.user;
  const {email,_id,displayName}=user;
  console.log('shahadat',displayName);

    return (
        <>
            
            <TableBody> 
                <TableRow>                           
                        <TableCell align="right">Shahadat Hossain</TableCell>
                        <TableCell align="right">{_id}</TableCell>
                        <TableCell align="right">{email}</TableCell>                     
                        <TableCell align="right">BABU1234</TableCell>                     
                        <TableCell align="right">12345</TableCell>                     
                        <TableCell align="right">10000</TableCell>                     
                        <TableCell align="right">Active</TableCell>                     
                        <TableCell align="right"><input type="checkbox"  /></TableCell>  
                        <TableCell align="right"><Button>Update</Button></TableCell>  
                </TableRow> 
            </TableBody>  
        </>
    );
};

export default Users;