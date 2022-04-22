import { Stack } from '@mui/material'
import React, { PropsWithChildren } from 'react'

interface HeaderProps {
  children: any;
}

const Flex: React.FC<PropsWithChildren<HeaderProps>> =  ({children}) => {
  return (
      <>
        <Stack
             direction="row"
             justifyContent="center"
             alignItems="center"
             spacing={6}
             padding="0 0 50px 0"
            >
            {children}
        </Stack>
    </>
  )
}

export default Flex;