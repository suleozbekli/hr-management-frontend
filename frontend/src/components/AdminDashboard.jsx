import { useEffect, useState } from "react";
import axios from "axios";

import {

    Paper,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Button,
    Chip

} from "@mui/material";

function AdminDashboard() {

    const [leaves,setLeaves]=useState([]);

    useEffect(()=>{

        loadLeaves();

    },[]);

    const loadLeaves=()=>{

        axios.get("http://localhost:8080/api/leaves")

            .then(res=>{

                setLeaves(res.data);

            });

    };

    const updateStatus=async(id,status)=>{

        await axios.put(

            `http://localhost:8080/api/leaves/${id}/status`,

            status,

            {

                headers:{

                    "Content-Type":"text/plain"

                }

            }

        );

        loadLeaves();

    };

    return(

        <Paper
            elevation={3}
            sx={{
                p:4,
                borderRadius:3
            }}
        >

            <Typography
                variant="h5"
                fontWeight="bold"
                mb={3}
            >

                Leave Requests

            </Typography>

            <Table>

                <TableHead>

                    <TableRow>

                        <TableCell>Employee</TableCell>

                        <TableCell>Type</TableCell>

                        <TableCell>Days</TableCell>

                        <TableCell>Status</TableCell>

                        <TableCell align="center">

                            Action

                        </TableCell>

                    </TableRow>

                </TableHead>

                <TableBody>

                    {

                        leaves.map(leave=>(

                            <TableRow key={leave.id}>

                                <TableCell>

                                    {leave.employeeName}

                                </TableCell>

                                <TableCell>

                                    {leave.leaveType}

                                </TableCell>

                                <TableCell>

                                    {leave.totalDays}

                                </TableCell>

                                <TableCell>

                                    {

                                        leave.status==="PENDING" &&

                                        <Chip

                                            label="Pending"

                                            color="warning"

                                        />

                                    }

                                    {

                                        leave.status==="APPROVED" &&

                                        <Chip

                                            label="Approved"

                                            color="success"

                                        />

                                    }

                                    {

                                        leave.status==="REJECTED" &&

                                        <Chip

                                            label="Rejected"

                                            color="error"

                                        />

                                    }

                                </TableCell>

                                <TableCell align="center">

                                    {

                                        leave.status==="PENDING" &&

                                        <>

                                            <Button

                                                color="success"

                                                variant="contained"

                                                sx={{mr:1}}

                                                onClick={()=>updateStatus(leave.id,"APPROVED")}

                                            >

                                                Approve

                                            </Button>

                                            <Button

                                                color="error"

                                                variant="contained"

                                                onClick={()=>updateStatus(leave.id,"REJECTED")}

                                            >

                                                Reject

                                            </Button>

                                        </>

                                    }

                                </TableCell>

                            </TableRow>

                        ))

                    }

                </TableBody>

            </Table>

        </Paper>

    );

}

export default AdminDashboard;