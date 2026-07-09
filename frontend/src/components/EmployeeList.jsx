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
    IconButton
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function EmployeeList({ setSelectedEmployee, refresh, refreshEmployees }) {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchEmployees();
    }, [refresh]);

    const fetchEmployees = async () => {
        try {
            const response = await getEmployees();
            setEmployees(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this employee?"))
            return;

        try {
            await deleteEmployee(id);
            refreshEmployees();
        } catch (error) {
            console.error(error);
        }
    };

    return (

        <Paper
            elevation={3}
            sx={{ mt: 4, p: 3, borderRadius: 3 }}
        >

            <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
            >
                Employee List
            </Typography>

            <Table>

                <TableHead>

                    <TableRow>

                        <TableCell><b>Name</b></TableCell>

                        <TableCell><b>Email</b></TableCell>

                        <TableCell><b>Department</b></TableCell>

                        <TableCell><b>Position</b></TableCell>

                        <TableCell><b>Salary</b></TableCell>

                        <TableCell align="center"><b>Actions</b></TableCell>

                    </TableRow>

                </TableHead>

                <TableBody>

                    {employees.map((employee) => (

                        <TableRow key={employee.id} hover>

                            <TableCell>

                                {employee.firstName} {employee.lastName}

                            </TableCell>

                            <TableCell>{employee.email}</TableCell>

                            <TableCell>{employee.department}</TableCell>

                            <TableCell>{employee.position}</TableCell>

                            <TableCell>

                                ₺{employee.salary?.toLocaleString("tr-TR")}

                            </TableCell>

                            <TableCell align="center">

                                <IconButton
                                    color="primary"
                                    onClick={() => setSelectedEmployee(employee)}
                                >
                                    <EditIcon />
                                </IconButton>

                                <IconButton
                                    color="error"
                                    onClick={() => handleDelete(employee.id)}
                                >
                                    <DeleteIcon />
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