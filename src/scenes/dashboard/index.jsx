import Header from "@/components/Header";
import {Box, Button} from "@mui/material";
import React from "react";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

const Dashboard = () =>
{
    return (
        <Box m='20px'>
            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

                <Box>

                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;