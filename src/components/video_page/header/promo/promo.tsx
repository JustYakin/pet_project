import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import bg from '../../../../image/bg_promo.jpg'
import topTen from '../../../../image/topten.png'
import { grey } from '@mui/material/colors';






const Promo = () => {
  return (

        <Box sx={{  
              position: 'relative',
              display: 'flex',
              justifyContent: 'space-around',
              height: '50.625rem',
              width: '100%',
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              marginTop: "3rem"
          }}
        >
          <Container maxWidth="xl">
          <Box sx={{  
              display: 'flex',
              alignItems: 'start',
              justifyContent: 'center',
              flexDirection: 'column',
              height: '100%',
          }} >
            <Box sx={{  
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'start',
              flexDirection: 'column',
              }} 
            >
              <Box sx={{display: { xs: 'none', md: 'flex' } }} flexDirection="column" justifyContent="start" alignItems="center">
                <Typography variant="h1" component="div" color="white" fontWeight="bold">
                  YANIMDA               
                </Typography>
                <Typography variant="h2" component="div" color="white">
                    KAL
                </Typography> 
              </Box> 

              <Box display="flex" justifyContent="space-around" textAlign="center" gap="15px" mb="15px">
                <Typography component="div" marginTop="5px"><img src={topTen} alt="top10" height="32px" width="32px" /></Typography>
                <Typography component="div"  variant="h6" color="white" fontSize="30px"> Türkiye’de Bugün 4 Numara</Typography>
              </Box> 
              <Box display="flex" justifyContent="start" textAlign="start" gap="15px">
                <Button variant="contained" size="large" sx={{ backgroundColor: grey[50], color: grey[900] }} startIcon={<PlayArrowIcon sx={{ color: grey[900] }}/>}>
                  Oynat
                </Button>
                <Button variant="contained" size="large" sx={{ backgroundColor: "#f5f5f5", color: grey[900], opacity: "50%" }} startIcon={<ReportGmailerrorredIcon />}>
                  Daha Fazla Bilgi
                </Button>
              </Box> 
            </Box>
          </Box>
          </Container>
        </Box>

  )
}

export default Promo