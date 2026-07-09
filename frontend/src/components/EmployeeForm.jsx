import { useEffect, useState } from "react";
import { addEmployee, updateEmployee } from "../api/api";

import {
    Paper,
    Typography,
    Grid,
    TextField,
    Button
} from "@mui/material";

function EmployeeForm({ selectedEmployee, refreshEmployees }) {

    const emptyEmployee = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        department: "",
        position: "",
        salary: "",
        hireDate: "",
        annualLeave: ""
    };

    const [employee, setEmployee] = useState(emptyEmployee);

    useEffect(() => {
        if (selectedEmployee) {
            setEmployee(selectedEmployee);
        }
    }, [selectedEmployee]);

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            if (employee.id) {
                await updateEmployee(employee.id, employee);
            } else {
                await addEmployee(employee);
            }

            setEmployee(emptyEmployee);
            refreshEmployees();

        } catch (error) {
            console.error(error);
        }
    };

    return (

        <Paper elevation={3} sx={{ p: 4, mt: 4, borderRadius: 3 }}>

            <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
            >
                {employee.id ? "Update Employee" : "Add Employee"}
            </Typography>

            <form onSubmit={handleSubmit}>

                <Grid container spacing={2}>

                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="First Name"
                            name="firstName"
                            value={employee.firstName}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Last Name"
                            name="lastName"
                            value={employee.lastName}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            value={employee.email}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Phone"
                            name="phone"
                            value={employee.phone}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Department"
                            name="department"
                            value={employee.department}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Position"
                            name="position"
                            value={employee.position}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            type="number"
                            label="Salary"
                            name="salary"
                            value={employee.salary}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            type="date"
                            label="Hire Date"
                            name="hireDate"
                            value={employee.hireDate}
                            onChange={handleChange}
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            type="number"
                            label="Annual Leave"
                            name="annualLeave"
                            value={employee.annualLeave}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            size="large"
                            fullWidth
                            type="submit"
                        >
                            {employee.id ? "Update Employee" : "Add Employee"}
                        </Button>
                    </Grid>

                </Grid>

            </form>

        </Paper>

    );
}

export default EmployeeForm;