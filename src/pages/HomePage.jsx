import React, { useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import SwiperImg1 from '../assets/swiper1.png';
import SwiperImg2 from '../assets/swiper2.png';
import SwiperImg3 from '../assets/swiper3.png';
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid2 as Grid,
} from '@mui/material';
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
import SethescopeImg from '../assets/sethescope.png';
import CardioImg from '../assets/cardio.png';
import MriImg from '../assets/mri.png';
import PshycoImg from '../assets/pshycologist.png';
import BloodImg from '../assets/blood.png';
import XrayImg from '../assets/xray.png';
import ahmadImg from '../assets/carousel/ahmad.png';
import ankurImg from '../assets/carousel/ankur.png';
import hullImg from '../assets/carousel/hull.png';
import kenImg from '../assets/carousel/ken.png';
import saraImg from '../assets/carousel/sara.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { styled } from '@mui/material/styles';

const CardContainer = styled(Box)({
  textAlign: 'center',
  padding: '16px',
  borderRadius: '8px',
  backgroundColor: '#f8faff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
  },
});

const Image = styled('img')({
  width: '64px',
  height: '64px',
  marginBottom: '16px',
});

const specialists = [
  {
    name: 'Dr. John Doe',
    designation: 'Medicine',
    img: ahmadImg,
  },
  {
    name: 'Dr. Manoj Khanna',
    designation: 'Neurologist',
    img: ankurImg,
  },
  {
    name: 'Dr. Neetu Gokhale',
    designation: 'Orthopaedics',
    img: saraImg,
  },
  {
    name: 'Dr. Ankur Sharma',
    designation: 'Medicine',
    img: kenImg,
  },
];

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
      <Box width={'80%'} mx={'auto'} my={4}>
        {/* navbar */}
        <NavBar />
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <Box width={'50%'}>
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
          <Box width={'50%'} height={'500px'}>
            <img
              src={HeroImage}
              alt='hero image'
              width={'100%'}
              height={'auto'}
            />
          </Box>
        </Box>
      </Box>
      {/* search section */}
      <Box
        width={'80%'}
        mx={'auto'}
        // marginTop={0}
        backgroundColor={'#fff'}
        padding={4}
        borderRadius={'8px'}
        boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}
        marginBottom={'20px'}
        position={'relative'}
        zIndex={1}
        marginTop={'-100px'}
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
      <Box backgroundColor={'#fff'} padding={'2rem 0'}>
        <Box width={'80%'} margin={'0 auto'} backgroundColor={'#fff'}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={50}
            slidesPerView={3}
            // navigation
            pagination={{
              clickable: true,
            }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            style={{
              '--swiper-pagination-bottom': '0px',
              '--swiper-pagination-color': '#2AA7FF',
              paddingBottom: '40px',
            }}
          >
            <SwiperSlide>
              <Box>
                <img
                  src={SwiperImg1}
                  alt='discount'
                  width={'100%'}
                  height={'100%'}
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <img
                  src={SwiperImg2}
                  alt='discount'
                  width={'100%'}
                  height={'100%'}
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <img
                  src={SwiperImg3}
                  alt='discount'
                  width={'100%'}
                  height={'100%'}
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <img
                  src={SwiperImg1}
                  alt='discount'
                  width={'100%'}
                  height={'100%'}
                />
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>

      {/* specialisation section */}
      <Box>
        <Box sx={{ padding: '24px', backgroundColor: '#eef4fc' }}>
          <Typography
            variant='h4'
            textAlign='center'
            fontWeight='bold'
            color='#003366'
            mb={4}
          >
            Find By Specialisation
          </Typography>
          <Grid container spacing={3} justifyContent='center'>
            <Grid item xs={12} sm={6} md={3}>
              <CardContainer>
                <Image src={LabImage} alt='Dentistry' />
                <Typography variant='h6' color='#4a4a4a'>
                  Dentistry
                </Typography>
              </CardContainer>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CardContainer>
                <Image src={SethescopeImg} alt='Primary Care' />
                <Typography variant='h6' color='#4a4a4a'>
                  Primary Care
                </Typography>
              </CardContainer>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CardContainer>
                <Image src={CardioImg} alt='Cardiology' />
                <Typography variant='h6' color='#4a4a4a'>
                  Cardiology
                </Typography>
              </CardContainer>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CardContainer>
                <Image src={MriImg} alt='MRI Resonance' />
                <Typography variant='h6' color='#4a4a4a'>
                  MRI Resonance
                </Typography>
              </CardContainer>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CardContainer>
                <Image src={BloodImg} alt='Blood Test' />
                <Typography variant='h6' color='#4a4a4a'>
                  Blood Test
                </Typography>
              </CardContainer>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CardContainer>
                <Image src={PshycoImg} alt='Psicologist' />
                <Typography variant='h6' color='#4a4a4a'>
                  Psicologist
                </Typography>
              </CardContainer>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CardContainer>
                <Image src={LabImage} alt='Laboratory' />
                <Typography variant='h6' color='#4a4a4a'>
                  Laboratory
                </Typography>
              </CardContainer>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CardContainer>
                <Image src={XrayImg} alt='X-Ray' />
                <Typography variant='h6' color='#4a4a4a'>
                  X-Ray
                </Typography>
              </CardContainer>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* medical specialist section */}
      <Box sx={{ backgroundColor: '#eef4fc', py: 5 }}>
        <Container maxWidth='lg'>
          {/* Section Title */}
          <Typography
            variant='h4'
            component='h2'
            sx={{
              color: '#003366',
              fontWeight: 'bold',
              textAlign: 'center',
              mb: 5,
            }}
          >
            Our Medical Specialist
          </Typography>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              960: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
            }}
          >
            {/* Hardcoded Cards */}
            {specialists.map((specialist, index) => (
              <SwiperSlide key={index}>
                <Card
                  sx={{
                    maxWidth: 280,
                    height: 350,
                    mx: 'auto',
                    borderRadius: 3,
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                    backgroundColor: '#ffffff',
                  }}
                >
                  <CardMedia
                    component='img'
                    alt={specialist.name}
                    image={specialist.img} // Replace with actual image URL
                    sx={{
                      width: 120,
                      height: 120,
                      margin: '16px auto',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '4px solid #eef4fc',
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant='h6'
                      sx={{
                        fontWeight: 'bold',
                        color: '#003366',
                        mb: 1,
                      }}
                    >
                      {specialist.name}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      sx={{ fontSize: '0.9rem' }}
                    >
                      {specialist.designation}
                    </Typography>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Box>
      {/* goal section */}
      {/* news section */}
      {/* stats section */}
      {/* footer section */}
    </Box>
  );
};

export default HomePage;
