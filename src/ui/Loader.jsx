import loaderImg from '../assets/images/logo-loader.png'
import { Box, CircularProgress } from '@mui/material'

export default function Loader() {
  return (
    <Box sx={{width:"100%", display: "flex", justifyContent:"center", marginTop:"20px"}}>
      <CircularProgress/>
    </Box>
  )
}
