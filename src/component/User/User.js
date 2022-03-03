import { Button, Input, InputBase, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Users from './Users';
import "./user.css"


const User = () => {
    const [users,setUsers]=useState([]);
    console.log(users);

    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])

    
    return (
        <div>
             <h1>{users.length}</h1>
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
                                <TableCell align="right">Edit</TableCell>
                            </TableRow>
                        </TableHead>
                            {
                                users.map(users =><Users
                                     key={users._Id}
                                     user={users}
                                     >

                                     </Users>)
                            }
                </TableContainer>
            </div>
        </div>
    );
};

export default User;