import { Grid, Card, CardContent, Typography } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import PaidIcon from "@mui/icons-material/Paid";

function DashboardCards() {

    return (

        <Grid container spacing={3} sx={{ mt: 2 }}>

            <Grid item xs={12} md={3}>
                <Card elevation={3}>
                    <CardContent>
                        <GroupsIcon color="primary" fontSize="large" />
                        <Typography variant="h6">
                            Employees
                        </Typography>

                        <Typography variant="h4">
                            12
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} md={3}>
                <Card elevation={3}>
                    <CardContent>
                        <ApartmentIcon color="success" fontSize="large" />
                        <Typography variant="h6">
                            Departments
                        </Typography>

                        <Typography variant="h4">
                            4
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} md={3}>
                <Card elevation={3}>
                    <CardContent>
                        <BeachAccessIcon color="warning" fontSize="large" />
                        <Typography variant="h6">
                            Leave Requests
                        </Typography>

                        <Typography variant="h4">
                            2
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} md={3}>
                <Card elevation={3}>
                    <CardContent>
                        <PaidIcon color="secondary" fontSize="large" />
                        <Typography variant="h6">
                            Avg Salary
                        </Typography>

                        <Typography variant="h4">
                            ₺48K
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

        </Grid>

    );

}

export default DashboardCards;