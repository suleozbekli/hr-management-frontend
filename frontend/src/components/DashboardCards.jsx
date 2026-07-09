import { useEffect, useState } from "react";
import { getEmployees, getLeaves } from "../api/api";

import {
    Grid,
    Card,
    CardContent,
    Typography
} from "@mui/material";

import GroupsIcon from "@mui/icons-material/Groups";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

function DashboardCards() {

    const [employees, setEmployees] = useState([]);
    const [leaves, setLeaves] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {

        const emp = await getEmployees();
        const leave = await getLeaves();

        setEmployees(emp.data);
        setLeaves(leave.data);

    };

    const pending = leaves.filter(l => l.status === "PENDING").length;
    const approved = leaves.filter(l => l.status === "APPROVED").length;
    const rejected = leaves.filter(l => l.status === "REJECTED").length;

    return (

        <Grid container spacing={3} mb={4}>

            <Grid item xs={12} md={3}>

                <Card>

                    <CardContent>

                        <GroupsIcon color="primary" fontSize="large"/>

                        <Typography variant="h6">

                            Employees

                        </Typography>

                        <Typography variant="h4">

                            {employees.length}

                        </Typography>

                    </CardContent>

                </Card>

            </Grid>

            <Grid item xs={12} md={3}>

                <Card>

                    <CardContent>

                        <PendingActionsIcon color="warning" fontSize="large"/>

                        <Typography variant="h6">

                            Pending

                        </Typography>

                        <Typography variant="h4">

                            {pending}

                        </Typography>

                    </CardContent>

                </Card>

            </Grid>

            <Grid item xs={12} md={3}>

                <Card>

                    <CardContent>

                        <CheckCircleIcon color="success" fontSize="large"/>

                        <Typography variant="h6">

                            Approved

                        </Typography>

                        <Typography variant="h4">

                            {approved}

                        </Typography>

                    </CardContent>

                </Card>

            </Grid>

            <Grid item xs={12} md={3}>

                <Card>

                    <CardContent>

                        <CancelIcon color="error" fontSize="large"/>

                        <Typography variant="h6">

                            Rejected

                        </Typography>

                        <Typography variant="h4">

                            {rejected}

                        </Typography>

                    </CardContent>

                </Card>

            </Grid>

        </Grid>

    );

}

export default DashboardCards;