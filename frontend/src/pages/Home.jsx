import {
    Box,
    Card,
    CardContent,
    Typography,
    Button,
    Stack
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

function Home({ setPage }) {

    return (

        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "75vh"
            }}
        >

            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={5}
            >

                <Card
                    sx={{
                        width: 320,
                        textAlign: "center",
                        p: 3,
                        borderRadius: 4
                    }}
                >

                    <CardContent>

                        <PersonIcon
                            color="primary"
                            sx={{
                                fontSize: 70,
                                mb: 2
                            }}
                        />

                        <Typography
                            variant="h5"
                            fontWeight="bold"
                        >
                            Employee
                        </Typography>

                        <Typography
                            sx={{
                                mt: 2,
                                mb: 3
                            }}
                        >
                            Create leave requests and view your leave history.
                        </Typography>

                        <Button
                            variant="contained"
                            fullWidth
                            onClick={() => setPage("USER")}
                        >
                            Continue as Employee
                        </Button>

                    </CardContent>

                </Card>

                <Card
                    sx={{
                        width: 320,
                        textAlign: "center",
                        p: 3,
                        borderRadius: 4
                    }}
                >

                    <CardContent>

                        <AdminPanelSettingsIcon
                            color="secondary"
                            sx={{
                                fontSize: 70,
                                mb: 2
                            }}
                        />

                        <Typography
                            variant="h5"
                            fontWeight="bold"
                        >
                            Admin
                        </Typography>

                        <Typography
                            sx={{
                                mt: 2,
                                mb: 3
                            }}
                        >
                            Approve or reject employee leave requests.
                        </Typography>

                        <Button
                            variant="contained"
                            color="secondary"
                            fullWidth
                            onClick={() => setPage("ADMIN")}
                        >
                            Continue as Admin
                        </Button>

                    </CardContent>

                </Card>

            </Stack>

        </Box>

    );

}

export default Home;