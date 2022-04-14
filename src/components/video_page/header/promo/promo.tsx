import React from 'react'
import { Box } from '@mui/material'
import bg from '../../../../image/bg_promo.jpg'





const Promo = () => {
  return (

        <Box sx={{  
              display: 'flex',
              justifyContent: 'space-around',
              padding: "2rem",
              height: '50.625rem',
              width: '100%',
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              marginTop: "3rem"
          }}
        >
         </Box>

  )
}

export default Promo