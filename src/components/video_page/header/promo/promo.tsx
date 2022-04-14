import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import bg from '../../../../image/bg_promo.jpg'
import topTen from '../../../../image/topten.png'






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
              justifyContent: 'center',
              alignItems: 'start',
              flexDirection: 'column',
              height: '100%',
              width: '100%',
          }} >
            <Box sx={{  
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              height: '100%',
              }} 
            >
              <Typography variant="h1" color="white" textAlign="center" mb="0" fontWeight="bold">
                YANIMDA               
              </Typography>
              <Typography variant="h2" color="white" textAlign="center" position="relative" top="-37px">
                  KAL
              </Typography> 
              <Box display="flex" justifyContent="space-around" textAlign="center" gap="15px">
                <Typography marginTop="5px"><img src={topTen} alt="top10" height="32px" width="32px" /></Typography>
                <Typography  variant="h6" color="white" fontSize="30px"> Türkiye’de Bugün 4 Numara</Typography>
              </Box> 
            </Box>
          </Box>
          </Container>
        </Box>

  )
}

export default Promo