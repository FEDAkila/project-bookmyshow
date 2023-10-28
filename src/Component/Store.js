import { configureStore } from "@reduxjs/toolkit";
import Slice from './Reducer'

 export const Store=configureStore(
    {
        reducer:{
            sample:Slice
        }
    }
 )