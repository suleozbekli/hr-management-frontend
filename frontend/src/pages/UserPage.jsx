import { useEffect, useState } from "react";
import {
    Paper,
    Typography,
    Grid,
    TextField,
    MenuItem,
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip
} from "@mui/material";

import { getEmployees, getLeaves, createLeave } from "../api/api";

function UserPage() {

    const [employees, setEmployees] = useState([]);
    const [employeeId, setEmployeeId] = useState("");

    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const [leaves, setLeaves] = useState([]);

    const [form, setForm] = useState({
        employeeId: "",
        leaveType: "ANNUAL",
        startDate: "",
        endDate: "",
        totalDays: "",
        reason: ""
    });

    useEffect(() => {

        loadEmployees();
        loadLeaves();

    }, []);

    const loadEmployees = async () => {

        const res = await getEmployees();

        setEmployees(res.data);

    };

    const loadLeaves = async () => {

        const res = await getLeaves();

        setLeaves(res.data);

    };

    const handleEmployee = (e) => {

        const id = Number(e.target.value);

        setEmployeeId(id);

        const emp = employees.find(x => x.id === id);

        setSelectedEmployee(emp);

        setForm({

            ...form,

            employeeId: id

        });

    };

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async () => {

        try {

            await createLeave(form);

            alert("Leave request created.");

            loadLeaves();

            setForm({

                employeeId: employeeId,
                leaveType: "ANNUAL",
                startDate: "",
                endDate: "",
                totalDays: "",
                reason: ""

            });

        } catch {

            alert("Error creating leave request.");

        }

    };

    return (

        <>

            <Paper sx={{p:4,mb:4}}>

                <Typography variant="h5" fontWeight="bold" mb={3}>

                    Employee Panel

                </Typography>

                <TextField

                    fullWidth

                    select

                    label="Select Employee"

                    value={employeeId}

                    onChange={handleEmployee}

                >

                    {

                        employees.map(emp => (

                            <MenuItem

                                key={emp.id}

                                value={emp.id}

                            >

                                {emp.firstName} {emp.lastName}

                            </MenuItem>

                        ))

                    }

                </TextField>

            </Paper>

            {

                selectedEmployee && (

                    <Paper sx={{p:4,mb:4}}>

                        <Typography
                            variant="h6"
                            mb={3}
                            fontWeight="bold"
                        >

                            Employee Information

                        </Typography>

                        <Grid container spacing={3}>

                            <Grid item xs={12} md={6}>
                                <Paper
                                    elevation={2}
                                    sx={{
                                        p: 3,
                                        borderRadius: 3,
                                        backgroundColor: "#F8FAFC"
                                    }}
                                >
                                    <Typography variant="body2" color="text.secondary">
                                        Employee
                                    </Typography>

                                    <Typography variant="h6" fontWeight="bold">
                                        {selectedEmployee.firstName} {selectedEmployee.lastName}
                                    </Typography>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Paper
                                    elevation={2}
                                    sx={{
                                        p: 3,
                                        borderRadius: 3,
                                        backgroundColor: "#F8FAFC"
                                    }}
                                >
                                    <Typography variant="body2" color="text.secondary">
                                        Department
                                    </Typography>

                                    <Typography variant="h6" fontWeight="bold">
                                        {selectedEmployee.department}
                                    </Typography>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Paper
                                    elevation={2}
                                    sx={{
                                        p: 3,
                                        borderRadius: 3,
                                        backgroundColor: "#F8FAFC"
                                    }}
                                >
                                    <Typography variant="body2" color="text.secondary">
                                        Position
                                    </Typography>

                                    <Typography variant="h6" fontWeight="bold">
                                        {selectedEmployee.position}
                                    </Typography>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Paper
                                    elevation={2}
                                    sx={{
                                        p: 3,
                                        borderRadius: 3,
                                        backgroundColor: "#E3F2FD"
                                    }}
                                >
                                    <Typography variant="body2" color="text.secondary">
                                        Remaining Annual Leave
                                    </Typography>

                                    <Typography
                                        variant="h4"
                                        color="primary"
                                        fontWeight="bold"
                                    >
                                        {selectedEmployee.annualLeave} Days
                                    </Typography>
                                </Paper>
                            </Grid>

                        </Grid>
                    </Paper>

                )

            }

            {

                selectedEmployee && (

                    <Paper sx={{p:4,mb:4}}>

                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            mb={3}
                        >

                            Create Leave Request

                        </Typography>

                        <Grid container spacing={2}>

                            <Grid item xs={6}>

                                <TextField

                                    select

                                    fullWidth

                                    label="Leave Type"

                                    name="leaveType"

                                    value={form.leaveType}

                                    onChange={handleChange}

                                >

                                    <MenuItem value="ANNUAL">

                                        Annual Leave

                                    </MenuItem>

                                    <MenuItem value="SICK">

                                        Sick Leave

                                    </MenuItem>

                                </TextField>

                            </Grid>

                            <Grid item xs={6}>

                                <TextField

                                    fullWidth

                                    type="number"

                                    label="Total Days"

                                    name="totalDays"

                                    value={form.totalDays}

                                    onChange={handleChange}

                                />

                            </Grid>

                            <Grid item xs={6}>

                                <Typography
                                    variant="body2"
                                    sx={{ mb: 1 }}
                                >
                                    Start Date
                                </Typography>

                                <TextField
                                    fullWidth
                                    name="startDate"
                                    type="date"
                                    value={form.startDate}
                                    onChange={handleChange}
                                />

                            </Grid>

                            <Grid item xs={6}>

                                <Typography
                                    variant="body2"
                                    sx={{ mb: 1 }}
                                >
                                    End Date
                                </Typography>

                                <TextField
                                    fullWidth
                                    name="endDate"
                                    type="date"
                                    value={form.endDate}
                                    onChange={handleChange}
                                />

                            </Grid>

                            <Grid item xs={12}>

                                <TextField

                                    fullWidth

                                    multiline

                                    rows={3}

                                    label="Reason"

                                    name="reason"

                                    value={form.reason}

                                    onChange={handleChange}

                                />

                            </Grid>

                            <Grid item xs={12}>

                                <Button

                                    variant="contained"

                                    onClick={handleSubmit}

                                >

                                    Create Leave Request

                                </Button>

                            </Grid>

                        </Grid>

                    </Paper>

                )

            }

            {

                selectedEmployee && (

                    <Paper sx={{p:4}}>

                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            mb={3}
                        >

                            My Leave Requests

                        </Typography>

                        <Table>

                            <TableHead>

                                <TableRow>

                                    <TableCell>Type</TableCell>
                                    <TableCell>Start</TableCell>
                                    <TableCell>End</TableCell>
                                    <TableCell>Days</TableCell>
                                    <TableCell>Status</TableCell>

                                </TableRow>

                            </TableHead>

                            <TableBody>

                                {

                                    leaves

                                        .filter(x => x.employeeId === employeeId)

                                        .map(leave => (

                                            <TableRow key={leave.id}>

                                                <TableCell>{leave.leaveType}</TableCell>

                                                <TableCell>{leave.startDate}</TableCell>

                                                <TableCell>{leave.endDate}</TableCell>

                                                <TableCell>{leave.totalDays}</TableCell>

                                                <TableCell>

                                                    <Chip

                                                        label={leave.status}

                                                        color={
                                                            leave.status === "APPROVED"
                                                                ? "success"
                                                                : leave.status === "REJECTED"
                                                                    ? "error"
                                                                    : "warning"
                                                        }

                                                    />

                                                </TableCell>

                                            </TableRow>

                                        ))

                                }

                            </TableBody>

                        </Table>

                    </Paper>

                )

            }

        </>

    );

}

export default UserPage;