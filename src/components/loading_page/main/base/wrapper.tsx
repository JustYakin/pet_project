import { Box, Container } from '@mui/material'
import React, { PropsWithChildren } from 'react'

interface HeaderProps {
  children: any;
}

const WrapperContent: React.FC<PropsWithChildren<HeaderProps>> =  ({children}) => {
  return (
      <>

        <Box 
          sx={{
            width: "100hw",
            height: "auto",
            backgroundColor: '#000',  
            margin:"50px 0",
            borderBottom: "8px solid #222"
          }}>      <Container maxWidth="lg">

            {children}
            </Container>
        </Box>
    </>
  )
}

export default WrapperContent