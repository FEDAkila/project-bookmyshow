import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import { useRef } from "react";
import "./Cheat.scss";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setSelectSeat, upmoviename } from "../../Component/Reducer";
import { useEffect } from "react";

import { useRef } from "react";

import { Construction, ContactPageSharp } from "@mui/icons-material";

//  import { onValue,ref } from "firebase/database";
//  import { db } from '../Firebase';
var sample1=[];
var sam=1;
export const Cheat = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [param] = useSearchParams();
  const count = param.get("count");
  console.log(count);

  let array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22,
  ];
  let row = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
  ];
  let row1 = ["O", "P"];
  const state = useSelector(({ sample }) => sample);
  const { showTime, theater } = state;
  const { seats } = useSelector(({ sample }) => sample);

  let [seatSouldOut, setSeatSouldOut] = useState([]);
  let [arr, setArr] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  useEffect(() => {}, []);

  const store = () => {
    const check = JSON.parse(localStorage.getItem("disdata"));
    console.log(check);
  };
  store();

  const [seat, setSeat] = useState();
  const [selectedSeats, setSelectedSeats] = useState([]);
  console.log(selectedSeats);
  const [label, setLabel] = useState("");
  const [seatWithLabel, setSeatWithLabel] = useState([]);
  const isSeatSelected = (seat, id) => {
    return seatWithLabel?.includes(id + seat);
  };

  useEffect(() => {
    console.log(selectedSeats,"Hello");
    let mappedSeats = selectedSeats.map((e) => label + e);
    console.log(selectedSeats);
    console.log(label);
    console.log(mappedSeats);
    setSeatWithLabel(mappedSeats);
    
  }, [selectedSeats, label]);

  let NUM_COLS = 22;
  const backgroundColor=(e)=>{

    return selectedSeats.includes(e)
  }
  
  const seatClicked = (e, value) => {
    const firstId = e.target.id;
   console.log(firstId)
    const ss = firstId.charAt(firstId.length - 1);
    console.log(ss)
    let val = value <= 9 ? firstId.slice(0, -1) : firstId.slice(0, -2);
    console.log(val)
    var sample = [];
    for (let i = 0; i < count; i++) {
      let sss = value + Number(i);
      console.log(sss)
      if (sss <= array.length) {
        sample = [...sample, val + `${sss}`];
        console.log("hello",array,sample);
      }
    }

    if (sample.length == `${count}`) {
     setSelectedSeats([...sample]);
     console.log("Hello");
    } 
   else if(!sample.length!==`${count}`)
    {

      if(sam<=count)
      {
        sample1=[...sample1,firstId];  
        setSelectedSeats([...sample1]);
        sam++;   
      }
      console.log(selectedSeats)
      // else(document.getElementById(firstId).classList.contains("selected"))
      // {
      //   sample1=sample1.filter((val)=>{
      //     return !firstId;
      //   });
      //   setBookedSeats([...sample1]);
      // }   
    } 
    
  };

  const handlingPayNow = (e) => {
    if (localStorage === null) {
      const array = [];
      let obj = { tname: state.theater, time: state.showTime };

      localStorage.setItem("disdata", JSON.stringify([...array, obj]));
      console.log(obj);
    } else {
      const check = JSON.parse(localStorage.getItem("disdata"));
      console.log(check); 
    }

    if (Number(count) === selectedSeats.length) {
      navigate(`/Payment?count=${count}`);
    }
  };
  console.log(selectedSeats)
  return (
    <section>
      <div className="ceat-container">
        <div className="ceat-header" style={{ backgroundColor: "#1f2533" }}>
          <div>
            <span>{state.movieName}</span>
            <p style={{ marginBottom: "0px" }}>
              {state.theater} | Today, {state.showTime}
            </p>
          </div>
          <div>
            <Button
              style={{
                textTransform: "none",
                border: "1px solid white",
                color: "white",
              }}
              sx={{ mr: 2, ml: 2, pt: 0, pb: 0 }}
            >
              {count} Tickets
            </Button>
          </div>
        </div>
        <div className="ceats-rows" style={{ borderBottom: "1px dotted gray" }}>
          DIAMONT : 190.00
          {/* {selectedSeats.map((val)=>{
            return(<h1>{val}</h1>)
          })} */}
        </div>
        <div className="ceats-rows">
          {row.map((value1, index1) => {
            return (
              <div className="ceat-row" key={index1}>
                <div className="ceat">
                  <div className="ceat-no2 seat-bottom-gap">{value1}</div>
                </div>
                <div className="ceat">
                  {array.map((value2, index2) => {
                    return (
                      <button
                        className={`ceat-no seat-left-gap ${
                          backgroundColor(`${showTime}${theater}${value1}${value2}`)
                            ? "selected"
                            : "available"
                        }`}
                        id={`${showTime}${theater}${value1}${value2}`}
                        onClick={(e) => seatClicked(e, value2)}
                        key={index2}
                      >
                        {value2}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
          {row1.map((row1, rindex1) => {
            return (
              <div className="ceat-row" key={rindex1}>
                <div className="ceat">
                  <div className="ceat-no2 seat-bottom-gap">{row1}</div>
                </div>
                <div className="ceat">
                  {array.map((value2, index2) => {
                    return (
                      <button
                        className="ceat-no seat-left-gap"
                        id={row1 + value2}
                        onClick={() => seatClicked(value2)}
                        disabled
                        key={index2}
                      >
                        {value2}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <div className="space"></div>
          <div className="last-content">
            <div className="box"></div>
            <span>All eyes this way please </span>
          </div>
          <div className="seat-legent-wrapper">
            <div className="seat-legent-container">
              <div className="seat-legent-inner">
                <div className="seat-legent">
                  <div className="seat-box box1"></div>
                  <span>Sold</span>
                </div>
                <div className="seat-legent">
                  <div className="seat-box box2"></div>
                  <span>Available</span>
                </div>
                <div className="seat-legent">
                  <div className="seat-box box3"></div>
                  <span>Selected</span>
                </div>
              </div>
              <Button
                variant="contained"
                style={{ textTransform: "none", backgroundColor: "#f84464" }}
                sx={{ mr: 2, ml: 2 }}
                onClick={(e) => handlingPayNow(count)}
              >
                Pay Rs.{190.0 * count}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};