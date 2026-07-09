import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Avatar
} from "@mui/material";

import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

function Navbar() {

    return (

        <AppBar
            position="fixed"
            elevation={2}
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                backgroundColor: "#1565C0"
            }}
        >

            <Toolbar>

                <BusinessCenterIcon
                    sx={{
                        fontSize: 34,
                        mr: 2
                    }}
                />

                <Box sx={{ flexGrow: 1 }}>

                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 700,
                            lineHeight: 1.1
                        }}
                    >
                        HR Management System
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            opacity: 0.85
                        }}
                    >
                        Employee & Leave Management Dashboard
                    </Typography>

                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2
                    }}
                >

                    <Box textAlign="right">

                        <Typography
                            variant="body1"
                            fontWeight="bold"
                        >
                            Admin
                        </Typography>

                        <Typography variant="caption">
                            Human Resources
                        </Typography>

                    </Box>

                    <Avatar
                        sx={{
                            bgcolor: "#26A69A",
                            width: 45,
                            height: 45,
                            fontWeight: "bold"
                        }}
                    >
                        A
                    </Avatar>

                </Box>

            </Toolbar>

        </AppBar>

    );

}

export default Navbar;