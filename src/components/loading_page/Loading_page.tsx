import React from "react";
import Header from "../loading_page/header/header";
import Main from "../loading_page/main/main";
import Footer from "../loading_page/footer/footer";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './style.module.scss'



function Loading_page() {
    return(
<>      
        <Container maxWidth="xl">
          <Box sx={{ bgcolor: '#000', height: '100%' }} >
          <h1>Loading page</h1>          
        <Header/>
        <Main/>
        <Footer/>
        </Box>
        </Container>
</>
    ) 
}

export default Loading_page;