import { useState } from "react";
import { Box } from "@mui/material";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";

function App() {

    const [page, setPage] = useState("HOME");

    return (

        <Box sx={{ display: "flex" }}>

            <Navbar />

            <Sidebar page={page} setPage={setPage} />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    mt: 9,
                    ml: "240px",
                    p: 4,
                    background: "#F5F7FA",
                    minHeight: "100vh"
                }}
            >

                {page === "HOME" && (
                    <Home setPage={setPage} />
                )}

                {page === "USER" && (
                    <UserPage />
                )}

                {page === "ADMIN" && (
                    <AdminPage />
                )}

            </Box>

        </Box>

    );

}

export default App;