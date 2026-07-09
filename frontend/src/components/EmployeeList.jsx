import { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../api/api";

import {
    Paper,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    IconButton,
    Chip
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

function EmployeeList({ refresh, refreshEmployees }) {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        loadEmployees();
    }, [refresh]);

    const loadEmployees = async () => {

        try {

            const res = await getEmployees();

            setEmployees(res.data);

        } catch (err) {

            console.log(err);

        }

    };

    const handleDelete = async (id) => {

        if (!window.confirm("Delete employee?")) return;

        try {

            await deleteEmployee(id);

            refreshEmployees();

        } catch (err) {

            alert("Delete failed.");

        }

    };

    return (

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

                Employee List

            </Typography>

            <Table>

                <TableHead>

                    <TableRow>

                        <TableCell>Name</TableCell>
                        <TableCell>Department</TableCell>
                        <TableCell>Position</TableCell>
                        <TableCell>Annual Leave</TableCell>
                        <TableCell align="center">Action</TableCell>

                    </TableRow>

                </TableHead>

                <TableBody>

                    {employees.map(emp => (

                        <TableRow key={emp.id} hover>

                            <TableCell>

                                {emp.firstName} {emp.lastName}

                            </TableCell>

                            <TableCell>

                                {emp.department}

                            </TableCell>

                            <TableCell>

                                {emp.position}

                            </TableCell>

                            <TableCell>

                                <Chip
                                    color="success"
                                    label={emp.annualLeave + " Days"}
                                />

                            </TableCell>

                            <TableCell align="center">

                                <IconButton
                                    color="error"
                                    onClick={() => handleDelete(emp.id)}
                                >

                                    <DeleteIcon/>

                                </IconButton>

                            </TableCell>

                        </TableRow>

                    ))}

                </TableBody>

            </Table>

        </Paper>

    );

}

export default EmployeeList;