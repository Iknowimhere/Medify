import React, { useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import {
  Box,
  Button,
  Input,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import HeroImage from '../assets/hero_image.png';
import { useTheme } from '@emotion/react';
import { Search } from '@mui/icons-material';
import DoctorImage from '../assets/doctor.png';
import LabImage from '../assets/lab.png';
import HospitalImage from '../assets/hospital.png';
import MedicineImage from '../assets/medicine.png';
import AmbulanceImage from '../assets/ambulance.png';

const HomePage = () => {
  let theme = useTheme();

  // const [state, setState] = useState('');
  // const [city, setCity] = useState('');
  return (
    <Box sx={{ backgroundImage: `linear-gradient(#E7F0FF,#E8F1FF78)` }}>
      {/* tagline */}
      <Box
        backgroundColor={theme.palette.primary.main}
        color={'#fff'}
        p={2}
        textAlign={'center'}
      >
        <Typography variant='subtitle2'>
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Typography>
      </Box>
      {/* hero section" */}
      <Box width={'90%'} mx={'auto'} position={'relative'}>
        {/* navbar */}
        <NavBar />
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <Box width={'50%'} height={'500px'}>
            <Typography variant='h5' color='#102851'>
              Skip the travel! Find Online Medical Centers
            </Typography>
            <Typography variant='h2' fontWeight={700}>
              Medical{' '}
              <Typography
                sx={{ display: 'inline' }}
                variant='p'
                fontWeight={700}
                color='primary'
              >
                Centers
              </Typography>
            </Typography>
            <Typography variant='h6' color='#102851'>
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </Typography>
            <Button
              variant='contained'
              color='primary'
              sx={{ marginTop: '1rem' }}
            >
              <Typography color='#fff'>Find Centers</Typography>
            </Button>
          </Box>
          <Box width={'50%'}>
            <img src={HeroImage} alt='hero image' />
          </Box>
        </Box>
      </Box>
      {/* search section */}
      <Box
        width={'90%'}
        mx={'auto'}
        backgroundColor={'#fff'}
        padding={4}
        borderRadius={'8px'}
        position={'relative'}
        top={'-270px'}
        boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}
      >
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={4}
          width={'70%'}
          margin={'20px auto'}
        >
          <Select
            // value={state}
            // onChange={(e) => setState(e.target.value)}
            fullWidth
            displayEmpty
            label='State'
            startAdornment={
              <InputAdornment position='start'>
                <Search />
              </InputAdornment>
            }
          >
            <MenuItem value='' disabled>
              Select State
            </MenuItem>
            <MenuItem value='CA'>California</MenuItem>
            <MenuItem value='NY'>New York</MenuItem>
            <MenuItem value='TX'>Texas</MenuItem>
          </Select>

          <Select
            // value={city}
            // onChange={(e) => setCity(e.target.value)}
            fullWidth
            displayEmpty
            label='City'
            startAdornment={
              <InputAdornment position='start'>
                <Search />
              </InputAdornment>
            }
          >
            <MenuItem value='' disabled>
              Select City
            </MenuItem>
            <MenuItem value='SF'>San Francisco</MenuItem>
            <MenuItem value='LA'>Los Angeles</MenuItem>
            <MenuItem value='NYC'>New York City</MenuItem>
          </Select>
          <Button
            variant='contained'
            color='primary'
            startIcon={<Search />}
            sx={{
              width: '200px',
              height: '50px',
              borderRadius: '8px',
              color: '#fff',
              padding: '1rem 2rem',
            }}
          >
            Search
          </Button>
        </Box>
        <Box textAlign={'center'}>
          <Typography variant='subtitle2' color='#102851' mt={4}>
            You may be looking for
          </Typography>
          <Box
            display={'flex'}
            justifyContent={'space-evenly'}
            alignItems={'baseline'}
            mt={4}
          >
            <Box
              padding={'1rem 2rem'}
              borderRadius={'8px'}
              backgroundColor={'#ABB6C714'}
            >
              <img
                src={DoctorImage}
                alt='doctor'
                height={'50px'}
                width={'50px'}
              />
              <Typography variant='subtitle2' color='#ABB6C7'>
                Doctors
              </Typography>
            </Box>
            <Box
              padding={'1rem 2rem'}
              borderRadius={'8px'}
              backgroundColor={'#ABB6C714'}
            >
              <img src={LabImage} alt='lab' height={'50px'} width={'50px'} />
              <Typography variant='subtitle2' color='#ABB6C7'>
                Labs
              </Typography>
            </Box>
            <Box
              border={'2px solid #2AA7FF'}
              padding={'1rem 2rem'}
              borderRadius={'8px'}
              backgroundColor={'#2AA7FF14'}
            >
              <img
                src={HospitalImage}
                alt='Hospital'
                height={'50px'}
                width={'50px'}
              />
              <Typography variant='subtitle2' color='#2AA7FF'>
                Hospitals
              </Typography>
            </Box>
            <Box
              padding={'1rem 2rem'}
              borderRadius={'8px'}
              backgroundColor={'#ABB6C714'}
            >
              <img
                src={MedicineImage}
                alt='Medicine'
                height={'50px'}
                width={'50px'}
              />
              <Typography variant='subtitle2' color='#ABB6C7'>
                Medical Store
              </Typography>
            </Box>
            <Box
              padding={'1rem 2rem'}
              borderRadius={'8px'}
              backgroundColor={'#ABB6C714'}
            >
              <img
                src={AmbulanceImage}
                alt='ambulance'
                height={'50px'}
                width={'50px'}
              />
              <Typography variant='subtitle2' color='#ABB6C7'>
                Doctors
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* discount carousel */}
      {/* specialisation section */}
      {/* medical specialist section */}
      {/* goal section */}
      {/* news section */}
      {/* stats section */}
      {/* footer section */}
    </Box>
  );
};

export default HomePage;
