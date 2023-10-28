import React from 'react'

import { useNavigate } from "react-router-dom";
import SuccessAnim from "./Success.json";
import Lottie from "lottie-react";
import './Success.scss';
import { useSelector } from 'react-redux';
export const Success = () => {
    const state=useSelector(({sample})=>sample)
    console.log(state.Success)
    const navigate=useNavigate();
    const goBack=()=>{
        navigate('/');
        
    }
  return (
    <div className="animation_success">
    <div>
        <Lottie
            animationData={SuccessAnim}
            loop={false}
        />
        <p>Payment Successfull</p>
        <div className="ani-btn">
            <button onClick={goBack}>Go Back</button>
        </div>
    </div>
</div>
  )
}

