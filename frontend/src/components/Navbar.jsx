import {
    AppBar,
    Toolbar,
    Typography,
    Box
} from "@mui/material";

import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

function Navbar() {

    return (

        <AppBar
            position="fixed"
            elevation={3}
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                backgroundColor: "#1565C0"
            }}
        >

            <Toolbar
                sx={{
                    height: 70,
                    display: "flex",
                    alignItems: "center"
                }}
            >

                <BusinessCenterIcon
                    sx={{
                        fontSize: 36,
                        mr: 2
                    }}
                />

                <Box>

                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 700,
                            lineHeight: 1
                        }}
                    >
                        HR Management System
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            opacity: 0.9,
                            mt: 0.5
                        }}
                    >
                        Employee & Leave Management Dashboard
                    </Typography>

                </Box>

            </Toolbar>

        </AppBar>

    );

}

export default Navbar;