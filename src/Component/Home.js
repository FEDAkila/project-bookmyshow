import React from "react";


import Carousel from "./Carousel/Carousel";
import { Recom } from "./Recom/Recom";
import { LiveMovie } from "./LiveEvent/LiveMovie";
import { Premier } from "./Premier/Premier";
import {Online} from  './Online/Online'


export const Home = () => {
  return (
    <div>
          <Carousel /> 
          <Recom/>  
          <LiveMovie/>
          <Premier/>
          <Online/>
    </div>
  );
};
