import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { IconButton, InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(3),
      maxWidth: '100%',
      width: '100%'
    },
  }));
  
 
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      maxWidth: '100%',
      width: '100%'
    },
  }));


const Find = () => {

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    console.log(open)
    setOpen(!open)
  }

  return (
    <>
        {
          open ?           
          <Search sx={{display: { xs: 'flex', md: 'flex' } }}>

                <IconButton onClick={handleClick}
                  sx={{
                    size: "large",
                    ariaLabel: "search",
                    color: "inherit",
                    pl: '10px',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}   
                >
                    <SearchIcon /> 
                </IconButton>

              <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
              />
          </Search>
          : 
          <>
          <IconButton onClick={handleClick} size="large" aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          </>
        }

    </>
  )
}

export default Find