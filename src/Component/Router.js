import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./Home";
import { Details } from "../Page/Details/Details";

import { Theaters } from "../Page/Theater/Theater";
import {Cheat} from "../Page/Cheat/Cheat"
import {Payment} from "../Page/Payment/Payment"
import {Success} from "../Page/Success/Success"





export const Router=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}>  </Route>
            <Route path="/Details" element={<Details/>}></Route>
           
            <Route path="/Theater" element={<Theaters/>}></Route>
            <Route path="/Cheat" element={<Cheat/>}></Route>
            <Route path="/Payment" element={<Payment/>}></Route>
            <Route path="/Success" element={<Success/>}></Route>
        
          </Routes>

        </BrowserRouter>
    )
}