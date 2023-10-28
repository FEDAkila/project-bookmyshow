import React, { useEffect, useState } from "react";
import "./Theater.scss";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
 
 import { setTheater,setShowTime ,upmoviename,upview,setTickets} from '../../Component/Reducer'
 import { AiOutlineInfoCircle } from 'react-icons/ai';
 import {  PiHamburgerLight } from 'react-icons/pi';

 import {  MdOutlinePhoneAndroid } from 'react-icons/md';
 import {  AiFillHeart } from 'react-icons/ai';
 import {  FaAngleDown } from 'react-icons/fa';
 import {  HiOutlineChevronRight } from 'react-icons/hi';
 import {  HiOutlineChevronLeft } from 'react-icons/hi';
 import {  GoSearch } from 'react-icons/go';
 import PropTypes from "prop-types";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import cycle from '../Img/cycle.png';
import scooter from '../Img/newscooter.png';
import auto from '../Img/newauto.png';
import car from '../Img/newcar.png';
import car2 from '../Img/newcar2.png';
import van from '../Img/van.png';
import { useRef } from "react";

// import  {setTickets} from '../Component/Reducer';

// import "./Tickets.scss";
// import Slice from './Reducer'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  textAlign: "center",
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2, 
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#49ba8e",
}));


export const Theaters = () => {
  const [param]=useSearchParams()
  const a=param.get('id')
  console.log(a)
 const [head,setHead]=useState({})
 



  const check=()=>{
  let title=state.Movie.find((v,i)=>{
    return console.log(a)===console.log(v.title)
  })
  console.log(title)
  setHead(title)
  
  


  }
  useEffect(()=>{
    check()
  },[])
const state=useSelector(({sample})=>sample);
// console.log(state.Movie)
var [general]=state.Movie.filter((e)=>{
  return a===e['title'];
})
 console.log([general])
 const dispatch=useDispatch();
  const navigate = useNavigate();
  const nav=useNavigate();
  const seatsHandle = () => {
    // navigate("/Tickets");
   
  };
  const toDay = new Date();
  const tomorrow=new Date(toDay);
  tomorrow.setDate(toDay.getDate()+1);
  const dayAfter=new Date(toDay);
  dayAfter.setDate(toDay.getDate()+2);
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  var theaterLoop=state.view.find((e)=>{return e.movieName===a});
  console.log(theaterLoop)
  // console.log(state.view.theaterList)
  var theaterLoop1=theaterLoop.theaterList;
  console.log(theaterLoop1)
var theaterLoop2=[];
for(var i=0;i<theaterLoop1.length;i++)
{
theaterLoop2[i]=theaterLoop1[i].showTime;
}



  var currentTime=toDay.getHours();
  var currentMin=toDay.getMinutes();
  var timeWithMin=currentTime+"."+currentMin;


  const [open, setOpen] = React.useState(false);
  const buttons= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [ticketCount,setTicketCount]=React.useState(0);
  const refe = useRef(null);
  const [imageSrc,setImageSrc]=React.useState(scooter);
  const navi = useNavigate();
 
  const handlingSeatSelection=(e)=>{
    console.log(ticketCount)

    
     navigate(`/Cheat?count=${ticketCount}`)
   }

  
  const handleOpen=()=>{
    setOpen(true)
  }
  const handleClose=(e)=>{
    setOpen(false);
  
    
  }
 
 
  const changeBackground = (e, refe) => {
    
    console.log(refe.current)
    if (!refe.current) {
      return;
    }
    if (!refe.current.classList.contains("changebg")) {
      refe.current.classList.add("changebg");
      setTicketCount(refe.current.innerHTML);
    } else {
      refe.current.classList.remove("changebg");
      refe.current = null;
    }
   ChangeImage(e.target.innerHTML)
  };
  const ChangeImage=(value)=>{
    switch(value)
    {
      case '1':
        setImageSrc(cycle);
      break;
      case '2':
        setImageSrc(scooter);
      break;
      case'3':
      setImageSrc(auto);
      break;
      case '4':
        setImageSrc(car2);
      break;
      case'5'||'6'||'7':
      setImageSrc(car);
      break;
      case '8'||'9'||'10':
        setImageSrc(van);
      break;
      default:
      break
    }
  }
  return (
    <>
     
      <div className="theater_header">
        <h1 className="hover">{a} - Tamil</h1>
        <div className="thHead">
          <div className="cert">UA</div>
          <div className="genre">{general['name']}</div>
        </div>
      </div>
      <div className="theater_sticky">
        <div className="theater_date">
          <div className="chevron">
           <HiOutlineChevronLeft/>
          </div>
          <div className="date_month bgColor">
            <p>{days[toDay.getDay()]}</p>
            <h3>{toDay.getDate()}</h3>
            <p>{months[toDay.getMonth()]}</p>
          </div>
          <div className="date_month">
            <p>{days[tomorrow.getDay()]}</p>
            <h3>{tomorrow.getDate()}</h3>
            <p>{months[tomorrow.getMonth()]}</p>
          </div>
          <div className="date_month">
            <p>{days[dayAfter.getDay()]}</p>
            <h3>{dayAfter.getDate()}</h3>
            <p>{months[dayAfter.getMonth()]}</p>
          </div>
          <div className="chevron">
           <HiOutlineChevronRight/>
          </div>
        </div>
        <div className="filter">
          <div>Tamil - 2D</div>
          <div className="none">
          
            <p>Filter Price Range</p> <FaAngleDown/>
          </div>
          <div className="none">Filter Show Timings</div>
          <div>
            
          <GoSearch/>
          </div>
        </div>
      </div>
      <Grid style={{ background: "#f2f2f2", padding: "20px 0" }}>
            <Grid
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            background: "#fff",
            width: "98%",
            margin: "auto",
            
          }}
        >
          <Grid style={{ width: "75%" }} ></Grid>
          <Grid
            style={{
              width: "25%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "11px",
              padding: "8px",
              color: "#000",
              opacity: 0.7,
              
            }}
            className="same"
          >
            <div className="avail"></div>
            <div>AVALABLE</div>
            <div className="fastfill"></div>
            <div>FAST FILLING</div>
            <div className="subtitle">LAN</div>
            <div>SUBTITLES LANGUAGE</div>
          </Grid>
        </Grid>
        {theaterLoop1.map((value,index)=>{
          return(
            <div key={index}> 
            <Grid
          style={{
            display: "flex",
            background: "#fff",
            width: "98%",
            margin: "auto",
            borderTop: "1px solid #cccccc",
            padding:'10px 0px',
           
          }}
          className="the"
        >
          <Grid className="cinema_cont">
            <Grid
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0 20px 20px",
              }}
            >
            <AiFillHeart className="heart"/>
            </Grid>
            <Grid className="cinema">
              <h5>{value.theatername}</h5>
              <Grid container spacing={2} >
                <Grid>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#49ba8e",
                    }}
                  >
                    <div>
                     <MdOutlinePhoneAndroid/>
                    </div>
                    <p>M-Ticket</p>
                  </div>
                </Grid>
                <Grid style={{ marginLeft: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "orange",
                    }}
                  >
                    <div >
                      <PiHamburgerLight/>
                    
                    </div>
                    <p>Food & Beverge</p>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              style={{
                fontSize: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#000",
                opacity: 0.8,
                padding: "0 20px 20px",
              }}
            >  
             <AiOutlineInfoCircle className="circle"/>
              INFO
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            className="cinema_timing"
            id="cin"
            style={{ alignContent: "center" }}
          >
           {theaterLoop2[index].map((theList,theindex)=>{
            return(          
              <Grid item xs={2} key={theindex} >
            <Item onClick={()=>{
              parseInt(theList)>timeWithMin? handleOpen():handleClose()
              dispatch(setTheater(value.theatername))
               dispatch(setShowTime(value.showTime[theindex]))
            }} style={{ cursor: "pointer" }}>
              <p>{theList<12?(parseInt(theList).toFixed(2)+"AM"):((theList-12).toFixed(2)+"PM")}</p>  
              <p>{value.screen}</p>            
            </Item>
          </Grid>
            )
           })}
            
          </Grid>
        </Grid>
        </div>
          )
        })}
         
      </Grid>
      <Grid
        style={{
          background: "#fff",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          color: "#000",
          opacity: 0.8,
        }}
      >
        Home
        <i className="las la-long-arrow-alt-right"></i>
        Movies in Chennai
        <i className="las la-long-arrow-alt-right"></i>
        {state.movie}
      </Grid>
      <Grid
        className="privacy_policy"
        style={{
          background: "#f2f2f2",
          padding: "24px 50px 10px 50px",
          fontSize: "12px",
          color: "#999999",
        }}
      >
        <h4>Privacy Note</h4>
        <p>
          By using www.bookmyshow.com(our website), you are fully accepting the
          Privacy Policy available at{" "}
          <span>https://bookmyshow.com/privacy</span> governing your access to
          Bookmyshow and provision of services by Bookmyshow to you. If you do
          not accept terms mentioned in the <span>Privacy Policy</span> , you
          must not share any of your personal information and immediately exit
          Bookmyshow.
        </p>
      </Grid>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
         How Many Seats? 
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <img src={imageSrc} alt='poop' id="popupImg"/>
          <ul className="booking-container">
            {buttons.map((value, index) => {
              return (
                <li key={index}>
                  <button
                    onClick={(e) => {
                      changeBackground(e, refe);
                      e.stopPropagation();
                      refe.current = e.target;
                      changeBackground(e, refe);
                    }}
                    onMouseOver={(e)=>ChangeImage(e.target.innerHTML)}
                    className="booking-btn">
                    
                    {value}
                  </button>
                </li>
              );
            })}
          </ul>
        </DialogContent>
        <DialogActions style={{justifyContent:'center'}}>
            <div className="selectAmont">
              <span style={{color:'#666'}}>DIAMOUNT</span>
              <span><b>Rs.190.00</b></span>
              <span style={{color:'#4abd5d'}}>Available</span>
            </div>
            <div className="selectAmont">
              <span style={{color:'#666'}}>PEARL</span>
              <span><b>Rs.60.00</b></span>
              <span style={{color:'#999'}}>Sould Out</span>
            </div>
        </DialogActions>
        <DialogActions>
          <Button
            variant="contained"
            style={{ textTransform: "none" }}
            onClick={(evnt)=>handlingSeatSelection(evnt)}
            id='selectSeat'
          >
            Select Seates
          </Button>
        </DialogActions>
      </BootstrapDialog>
     
    </>
  );
};

