import React from 'react'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{minHeight:"2rem",backgroundColor:"#f50057",padding:"0.5rem"}}>
        <Typography variant="h6" color="initial" align='center' sx={{color:"#f9f9f9"}}>Made with ❤ by AkashWebDesigns</Typography>
    </Box>
  )
}

export default Footer