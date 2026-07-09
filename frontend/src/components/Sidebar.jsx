import {
    Drawer,
    Toolbar,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box
} from "@mui/material";

const drawerWidth = 240;

function Sidebar({ setPage }) {

    return (

        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                    background: "#1565C0",
                    color: "white"
                }
            }}
        >

            <Toolbar />

            <Box sx={{ p: 3 }}>

                <Typography
                    variant="h6"
                    fontWeight="bold"
                >
                    HR Management
                </Typography>

            </Box>

            <List>

                <ListItem disablePadding>

                    <ListItemButton
                        onClick={() => setPage("HOME")}
                    >

                        <ListItemText primary="Home" />

                    </ListItemButton>

                </ListItem>

                <ListItem disablePadding>

                    <ListItemButton
                        onClick={() => setPage("USER")}
                    >

                        <ListItemText primary="Employee" />

                    </ListItemButton>

                </ListItem>

                <ListItem disablePadding>

                    <ListItemButton
                        onClick={() => setPage("ADMIN")}
                    >

                        <ListItemText primary="Admin" />

                    </ListItemButton>

                </ListItem>

            </List>

        </Drawer>

    );

}

export default Sidebar;