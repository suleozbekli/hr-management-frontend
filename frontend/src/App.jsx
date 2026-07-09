import { Box, Toolbar } from "@mui/material";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {

    return (

        <Box sx={{ display: "flex" }}>

            <Navbar />

            <Sidebar />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 4,
                    background: "#F4F6F8",
                    minHeight: "100vh"
                }}
            >

                <Toolbar />

                <Home />

            </Box>

        </Box>

    );

}

export default App;