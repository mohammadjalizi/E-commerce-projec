import { Navigation } from '@mui/icons-material'
import { Box, Container} from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";

// import required modules

const mySlider = [
  { text: "MEN", link: "src\image\banner-15.jpg" },
  { text: "WOMEN", link: ".//images/banner-25.jpg" },
];

const Hero = () => {
  return (
   <Container sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<Box>

<Swiper
          // loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          // modules={[Pagination]}
          className="mySwiper"
        >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      
      </Swiper>


</Box>

<Box>

<Box>

<img src='src\image\banner-16.jpg'/>
</Box>
<Box>
 <img src='src\image\banner-17.jpg'/>
</Box>
</Box>


   </Container>
  )
}

export default Hero