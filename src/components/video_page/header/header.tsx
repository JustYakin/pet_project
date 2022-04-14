import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';


import Logo from "./logo/logo";
import MenuBar from "./menubar/menuBar";
import Find from "./search/search";
import More from "./more/more";
import Promo from "./promo/promo";


const Header = () => {

    return (
    <>
        <AppBar position="fixed"
                sx={{backgroundColor: '#141414'}}
        >
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                
                <Logo/>
                <MenuBar/>
                <Find/>
                <More/>

            </Toolbar>
        </Container>
        </AppBar>
        <Promo/>
    </>
  ); 
}

export default Header;