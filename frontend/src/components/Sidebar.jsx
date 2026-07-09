import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
    Box
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 240;

function Sidebar() {

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

            <Box sx={{ p: 2 }}>

                <Typography
                    variant="h6"
                    fontWeight="bold"
                >
                    HR Panel
                </Typography>

            </Box>

            <List>

                <ListItem disablePadding>
                    <ListItemButton>

                        <ListItemIcon sx={{ color: "white" }}>
                            <DashboardIcon />
                        </ListItemIcon>

                        <ListItemText primary="Dashboard" />

                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>

                        <ListItemIcon sx={{ color: "white" }}>
                            <PeopleIcon />
                        </ListItemIcon>

                        <ListItemText primary="Employees" />

                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>

                        <ListItemIcon sx={{ color: "white" }}>
                            <BeachAccessIcon />
                        </ListItemIcon>

                        <ListItemText primary="Leave Management" />

                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>

                        <ListItemIcon sx={{ color: "white" }}>
                            <SettingsIcon />
                        </ListItemIcon>

                        <ListItemText primary="Settings" />

                    </ListItemButton>
                </ListItem>

            </List>

        </Drawer>

    );

}

export default Sidebar;