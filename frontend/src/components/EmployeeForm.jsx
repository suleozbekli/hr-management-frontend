import { useState } from "react";
import {
    Paper,
    Typography,
    Grid,
    TextField,
    Button
} from "@mui/material";
import { addEmployee } from "../api/api";

function EmployeeForm({ refreshEmployees }) {

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        department: "",
        position: "",
        salary: "",
        hireDate: "",
        annualLeave: ""
    });

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await addEmployee(employee);

            alert("Employee added successfully.");

            setEmployee({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                department: "",
                position: "",
                salary: "",
                hireDate: "",
                annualLeave: ""
            });

            refreshEmployees();

        } catch (err) {

            alert("Employee could not be added.");

        }

    };

    return (

        <Paper
            elevation={3}
            sx={{
                p:4,
                borderRadius:3,
                mb:4
            }}
        >

            <Typography
                variant="h5"
                fontWeight="bold"
                mb={3}
            >

                Add Employee

            </Typography>

            <form onSubmit={handleSubmit}>

                <Grid container spacing={2}>

                    <Grid item xs={6}>

                        <TextField
                            fullWidth
                            label="First Name"
                            name="firstName"
                            value={employee.firstName}
                            onChange={handleChange}
                        />

                    </Grid>

                    <Grid item xs={6}>

                        <TextField
                            fullWidth
                            label="Last Name"
                            name="lastName"
                            value={employee.lastName}
                            onChange={handleChange}
                        />

                    </Grid>

                    <Grid item xs={6}>

                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            value={employee.email}
                            onChange={handleChange}
                        />

                    </Grid>

                    <Grid item xs={6}>

                        <TextField
                            fullWidth
                            label="Phone"
                            name="phone"
                            value={employee.phone}
                            onChange={handleChange}
                        />

                    </Grid>

                    <Grid item xs={6}>

                        <TextField
                            fullWidth
                            label="Department"
                            name="department"
                            value={employee.department}
                            onChange={handleChange}
                        />

                    </Grid>

                    <Grid item xs={6}>

                        <TextField
                            fullWidth
                            label="Position"
                            name="position"
                            value={employee.position}
                            onChange={handleChange}
                        />

                    </Grid>

                    <Grid item xs={6}>

                        <TextField
                            fullWidth
                            label="Salary"
                            type="number"
                            name="salary"
                            value={employee.salary}
                            onChange={handleChange}
                        />

                    </Grid>

                    <Grid item xs={6}>

                        <Grid item xs={6}>
                            <Grid item xs={6}>
                                <Typography variant="body2" sx={{ mb: 0.5 }}>
                                    Hire Date
                                </Typography>

                                <TextField
                                    fullWidth
                                    type="date"
                                    name="hireDate"
                                    value={employee.hireDate}
                                    onChange={handleChange}
                                />
                            </Grid>

                        </Grid>

                    </Grid>

                    <Grid item xs={6}>

                        <TextField
                            fullWidth
                            label="Annual Leave"
                            type="number"
                            name="annualLeave"
                            value={employee.annualLeave}
                            onChange={handleChange}
                        />

                    </Grid>

                    <Grid item xs={12}>

                        <Button
                            fullWidth
                            variant="contained"
                            type="submit"
                        >

                            Add Employee

                        </Button>

                    </Grid>

                </Grid>

            </form>

        </Paper>

    );

}

export default EmployeeForm;