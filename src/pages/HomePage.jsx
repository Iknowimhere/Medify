import React, { useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import SwiperImg1 from '../assets/swiper1.png';
import SwiperImg2 from '../assets/swiper2.png';
import SwiperImg3 from '../assets/swiper3.png';
import { Card, Grid2 as Grid, List, ListItem, ListItemIcon } from '@mui/material';
import ankushImg from '../assets/PngItem_1939059 1.png'
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
import { Search, Verified } from '@mui/icons-material';
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
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import VerifiedIcon from '@mui/icons-material/Verified';

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
        <Box padding={'2rem 0'} textAlign={'center'}>
          <Typography variant='h4' color={'#102851'} fontWeight={'bold'}>
            Find By Specialisation
          </Typography>
        </Box>
        <Box width={'50%'} margin={'40px auto'}>
          <Grid container spacing={3}>
            {/* First Row */}
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <Card sx={{ minHeight: 100, p: 4 }}>
                <img src={LabImage} alt='Lab' height={'75px'} width={'75px'} />
                <Typography
                  variant='subtitle2'
                  textAlign={'center'}
                  color='#ABB6C7'
                >
                  Dentistry
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <Card sx={{ minHeight: 100, p: 4, minwidth: 100 }}>
                <img
                  src={SethescopeImg}
                  alt='Sethescope'
                  height={'75px'}
                  width={'75px'}
                />
                <Typography
                  variant='subtitle2'
                  textAlign={'center'}
                  color='#ABB6C7'
                >
                  Primary Care
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <Card sx={{ minHeight: 100, p: 4 }}>
                <img
                  src={CardioImg}
                  alt='Cardio'
                  height={'75px'}
                  width={'75px'}
                />
                <Typography
                  variant='subtitle2'
                  textAlign={'center'}
                  color='#ABB6C7'
                >
                  Cardiology
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <Card sx={{ minHeight: 100, p: 4 }}>
                <img src={MriImg} alt='Mri' height={'75px'} width={'75px'} />
                <Typography
                  variant='subtitle2'
                  textAlign={'center'}
                  color='#ABB6C7'
                >
                  MRI resonance
                </Typography>
              </Card>
            </Grid>

            {/* Second Row */}
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <Card sx={{ minHeight: 100, p: 4 }}>
                <img
                  src={BloodImg}
                  alt='blood'
                  height={'75px'}
                  width={'75px'}
                />
                <Typography
                  variant='subtitle2'
                  textAlign={'center'}
                  color='#ABB6C7'
                >
                  Blood Test
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <Card sx={{ minHeight: 100, p: 4 }}>
                <img
                  src={PshycoImg}
                  alt='Phsyco'
                  height={'75px'}
                  width={'75px'}
                />
                <Typography
                  variant='subtitle2'
                  textAlign={'center'}
                  color='#ABB6C7'
                >
                  Physcologist
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <Card sx={{ minHeight: 100, p: 4 }}>
                <img
                  src={LabImage}
                  alt='Laboratory'
                  height={'75px'}
                  width={'75px'}
                />
                <Typography
                  variant='subtitle2'
                  textAlign={'center'}
                  color='#ABB6C7'
                >
                  Laboaratory
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <Card sx={{ minHeight: 100, p: 4 }}>
                <img src={XrayImg} alt='xray' height={'75px'} width={'75px'} />
                <Typography
                  variant='subtitle2'
                  textAlign={'center'}
                  color='#ABB6C7'
                >
                  X-Ray
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Box padding={'1rem 0'} textAlign={'center'}>
          <Button variant="contained" color='primary' style={{ color: '#fff' }}>View all</Button>
        </Box>
      </Box>
      {/* medical specialist section */}
      <Box backgroundColor="#fff" padding={'2rem 0'} textAlign={'center'}>
        <Box padding={'1rem 0'}>
          <Typography variant='h4' color={'#102851'} fontWeight={'bold'}>Our Medical Specialists</Typography>
        </Box>
        <Box width={'100%'} margin={'0 auto'} backgroundColor={'#fff'}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            // spaceBetween={10}
            slidesPerView={4}
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
              <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
                <Box position="relative" width="60%">
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      background: `linear-gradient(144.2deg, #E1F3FF 0%, #2AA7FF 100%)`,
                      padding: '1em',
                      borderTopLeftRadius: '250px',
                      borderTopRightRadius: '250px',
                      height: '100%',
                      width: '100%',
                      zIndex: 1,
                      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                  />
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 2,
                      padding: '1em',
                      width: '100%'
                    }}
                  >
                    <img
                      src={ankushImg}
                      alt=""
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'block'
                      }}
                    />
                  </Box>
                </Box>
                <Box textAlign={'center'} marginTop={'2rem'}>
                  <Typography variant="subtitle1" color={'#102851'}> Dr. Ankush</Typography>
                  <Typography variant="subtitle1" color='primary'> Cardiologist</Typography>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
                <Box position="relative" width="60%">
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      background: `linear-gradient(144.2deg, #E1F3FF 0%, #2AA7FF 100%)`,
                      padding: '1em',
                      borderTopLeftRadius: '250px',
                      borderTopRightRadius: '250px',
                      height: '100%',
                      width: '100%',
                      zIndex: 1,
                      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                  />
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 2,
                      padding: '1em',
                      width: '100%'
                    }}
                  >
                    <img
                      src={ankushImg}
                      alt=""
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'block'
                      }}
                    />
                  </Box>
                </Box>
                <Box textAlign={'center'} marginTop={'2rem'}>
                  <Typography variant="subtitle1" color={'#102851'}> Dr. Ankush</Typography>
                  <Typography variant="subtitle1" color='primary'> Cardiologist</Typography>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
                <Box position="relative" width="60%"  >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      background: `linear-gradient(144.2deg, #E1F3FF 0%, #2AA7FF 100%)`,
                      padding: '1em',
                      borderTopLeftRadius: '250px',
                      borderTopRightRadius: '250px',
                      height: '100%',
                      width: '100%',
                      zIndex: 1,
                      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                  />
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 2,
                      padding: '1em',
                      width: '100%'
                    }}
                  >
                    <img
                      src={ankushImg}
                      alt=""
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'block'
                      }}
                    />
                  </Box>
                </Box>
                <Box textAlign={'center'} marginTop={'2rem'}>
                  <Typography variant="subtitle1" color={'#102851'}> Dr. Ankush</Typography>
                  <Typography variant="subtitle1" color='primary'> Cardiologist</Typography>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
                <Box position="relative" width="60%">
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      background: `linear-gradient(144.2deg, #E1F3FF 0%, #2AA7FF 100%)`,
                      padding: '1em',
                      borderTopLeftRadius: '250px',
                      borderTopRightRadius: '250px',
                      height: '100%',
                      width: '100%',
                      zIndex: 1,
                      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                  />
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 2,
                      padding: '1em',
                      width: '100%'
                    }}
                  >
                    <img
                      src={ankushImg}
                      alt=""
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'block'
                      }}
                    />
                  </Box>
                </Box>
                <Box textAlign={'center'} marginTop={'2rem'}>
                  <Typography variant="subtitle1" color={'#102851'}> Dr. Ankush</Typography>
                  <Typography variant="subtitle1" color='primary'> Cardiologist</Typography>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
                <Box position="relative" width="60%">
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      background: `linear-gradient(144.2deg, #E1F3FF 0%, #2AA7FF 100%)`,
                      padding: '1em',
                      borderTopLeftRadius: '250px',
                      borderTopRightRadius: '250px',
                      height: '100%',
                      width: '100%',
                      zIndex: 1,
                      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                  />
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 2,
                      padding: '1em',
                      width: '100%'
                    }}
                  >
                    <img
                      src={ankushImg}
                      alt=""
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'block'
                      }}
                    />
                  </Box>
                </Box>
                <Box textAlign={'center'} marginTop={'2rem'}>
                  <Typography variant="subtitle1" color={'#102851'}> Dr. Ankush</Typography>
                  <Typography variant="subtitle1" color='primary'> Cardiologist</Typography>
                </Box>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
      {/* goal section */}
      <Box>
        {/* image section */}
        <Box>
          {/* image1  */}
          <Box>
            <img src="" alt="" />
          </Box>
          {/* image2  */}
          <Box>
            <img src="" alt="" />
          </Box>
        </Box>
        {/* text section */}
        <Box>
          <Typography variant="subtitle2" color={'rgba(42, 167, 255, 1)'} >HELPING PATIENTS FROM AROUND THE GLOBE!!</Typography>
          <Typography variant="h4" color={'#102851'} fontWeight={'bold'}>
            Patient <i style={{ fontStyle: 'normal', color: 'rgba(42, 167, 255, 1)' }}>Caring</i>
          </Typography>
          <Typography variant="subtitle1" color={'rgba(119, 130, 157, 1)'}>
            Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <VerifiedIcon color="primary" />
              </ListItemIcon>
              <Typography variant="subtitle1" color={'rgba(27, 60, 116, 1)'}>Stay Updated About Your Health</Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <VerifiedIcon color="primary" />
              </ListItemIcon>
              <Typography variant="subtitle1" color={'rgba(27, 60, 116, 1)'}>Check Your Results Online</Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <VerifiedIcon color="primary" />
              </ListItemIcon>
              <Typography variant="subtitle1" color={'rgba(27, 60, 116, 1)'}>Manage Your Appointments</Typography>
            </ListItem>
          </List>
        </Box>
      </Box>
      {/* news section */}
      {/* stats section */}
      {/* footer section */}
    </Box>
  );
};

export default HomePage;
