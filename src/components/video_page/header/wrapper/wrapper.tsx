import { Box } from '@mui/material'
import React from 'react'

const WrapperContent: React.FC = ({children}) => {
  return (
      <>
        <Box style={{
          padding: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '200px',
          height: 'fit-content',
          backgroundColor: 'black',
          color: 'white',
          fontSize: '18px'
          }}>
            {children}
        </Box>
    </>
  )
}

export default WrapperContent