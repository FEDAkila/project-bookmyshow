
import { useDispatch, useSelector } from "react-redux";

import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick'
import { useNavigate } from "react-router";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from '@mui/material/Link'

import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Recom.scss'


export const Recom = () => {
    const state=useSelector(({sample})=>sample)
const dispatch=useDispatch()
const m=useNavigate()
let gotodetails=(id)=>{
    m(`./Details?id=${id}`)
}
    
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
  return (
    <Box id="Recom">
        <Container>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <Box>
               <h2>Recommended Movies</h2>
            </Box>
          
           
          </Box>

    <Slider {...settings}>

            {state.Movie.map((v,i)=>{
                return(
                    <Box  >
                        
                    <Box sx={{padding:"10px"}} onClick={()=>gotodetails(v.id)}> 
                      <Box >
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
    </Container>
       </Box>
       )
       
   
}

