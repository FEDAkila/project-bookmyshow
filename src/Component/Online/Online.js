import React from 'react'
import Image from '../Img/img.avif'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector} from "react-redux";
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Img from '../Img/img.avif'
import './Online.scss'


export const Online=()=>{
    const state=useSelector(({sample})=>sample)
    const dispatch=useDispatch()
    // const m=useNavigate()
        
        const settings = {
            dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 5,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                dots: false,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: false
              }
            }
           
          ]
          };
    return(
        <Box id="Online">
           
           
            <Container>
                <Box>
                <Box>
               <h2>Online Streaming Events</h2>
            </Box>

    <Slider {...settings}>

            {state.Online.map((v,i)=>{
                return(
                    <Box  >
                        
                    <Box sx={{padding:"10px"}}> 
                      <Box>
                        <Typography
                        component="img"
                        src={v.img}
                        
                        sx={{width:"100%",borderRadius:"10px"}}>

                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                        component="h3"
                        sx={{fontWeight:"700"}}>{v.title}

                        </Typography>

                    </Box>
                    <Box>
                        <Typography
                        component="h4"
                        sx={{color:"gray"}}>{v.name}

                        </Typography>

                    </Box>
                    </Box>
                    </Box>
                   
                )
            })}
       </Slider>

                </Box>
            
            </Container>
            </Box>
      
    )
}