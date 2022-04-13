import React from "react";
import Header from "../loading_page/header/header";
import Main from "../loading_page/main/main";
import Footer from "../loading_page/footer/footer";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import './style.module.scss'



function Loading_page() {
    return(
<>      
    <Box sx={{ bgcolor: '#000', height: '100%' }} >
    <h1>Loading page</h1>          
    <Header/>
    <Main/>
    <Footer/>
    </Box>
</>
    ) 
}

export default Loading_page;