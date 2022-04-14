import React from 'react';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';

const pages = ['Ana Sayfa', 'Diziler', 'Filmler', 'Yeni ve Popüler','Listem'];

const MenuBar = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

  return (
    <>
        <Box sx={{ flexGrow: 1, whiteSpace: 'nowrap', display: { xs: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon/>
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
                keepMounted
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
            >
            {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                </MenuItem>
            ))}
            </Menu>
        </Box>
        <Box sx={{ flexGrow: 1, whiteSpace: 'nowrap', display: { xs: 'none', md: 'flex' }}}>
            {pages.map((page) => (
            <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: '14px'}}
            >
                {page}
            </Button>
            ))}
        </Box>
    </>
  )
}

export default MenuBar