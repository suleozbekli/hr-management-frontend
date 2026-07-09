import { useEffect, useState } from "react";

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

import {
    getLeaves,
    approveLeave,
    rejectLeave
} from "../api/api";
function AdminDashboard() {

    const [leaves,setLeaves]=useState([]);

    useEffect(()=>{
        loadLeaves();
    },[]);

    const loadLeaves = async () => {
        const res = await getLeaves();
        setLeaves(res.data);
    };

    const updateStatus = async (id, status) => {

        if (status === "APPROVED") {
            await approveLeave(id);
        } else {
            await rejectLeave(id);
        }

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