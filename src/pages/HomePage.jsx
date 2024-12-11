import React from 'react'
import NavBar from '../components/NavBar/NavBar';
import { Box, Button, Typography } from '@mui/material';
import HeroImage from '../assets/hero_image.png'

const HomePage = () => {
  return (
    <Box sx={{ backgroundImage: `linear-gradient(#E7F0FF,#E8F1FF78)` }}>
      {/* hero section */}
      <Box>
        {/* navbar */}
        <NavBar />
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <Box width={600} height={450} display={'flex'} flexDirection={'column'} justifyContent={'start'} alignItems={'start'}>
            <Typography variant='h5' color='#102851'>
              Skip the travel! Find Online
              Medical Centers
            </Typography>
            <Typography variant='h2' fontWeight={700}>
              Medical  <Typography sx={{ display: 'inline' }} variant='h2' fontWeight={700} color='primary'>Centers</Typography>
            </Typography>
            <Typography variant='h6' color='#102851'>
              Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
            </Typography>
            <Button variant='contained' color='primary' sx={{ marginTop: '1rem' }}>
              <Typography color='#fff'>Find Centers</Typography>
            </Button>
          </Box>
          <Box>
            <img src={HeroImage} alt="hero image" />
          </Box>
        </Box>
      </Box>
      {/* search section */}
      {/* discount carousel */}
      {/* specialisation section */}
      {/* medical specialist section */}
      {/* goal section */}
      {/* news section */}
      {/* stats section */}
      {/* footer section */}
    </Box>

  )
}

export default HomePage;