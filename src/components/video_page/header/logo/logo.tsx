import React from 'react'
import Typography from '@mui/material/Typography';

import logo from '../../../../image/Logo.png'

const Logo = () => {
  return (
    <>
    <Typography
        noWrap
        component="div"
        sx={{ mr: 2, overflow: 'visible', display: { xs: 'none', md: 'flex' } }}
    >
        <img src={logo} alt="logo" />
    </Typography>
        <Typography
        noWrap
        component="div"
        sx={{ mr: 2, overflow: 'visible', display: { xs: 'none', sm: 'flex', md: 'none' } }}
    >
        <img src={logo} alt="logo" />
    </Typography>
    <Typography
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'none', md: 'none' } }}
    >
        <img src={logo} alt="logo" />
    </Typography>
    </>
  )
}

export default Logo