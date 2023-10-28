import { createSlice } from "@reduxjs/toolkit";
import User from './Data.json'
import One from '../Page/Cheat/Main.json'

export const Slice=createSlice(
    {
        name:"Bookmyshow",
        initialState:{
           Movie:User.MovieList,
           Liveimg:User.Liveimg,
           Premier:User.Premier,
           Online:User.Online,
           view:User.Theater,
            Backimg:User.Back,
            Cast:User.DetailsCast,
            Success:User.Success,
            theater:"",
            seat:[],
           showTime:"",
           selectSeats: [],
           payment:[],
           name:"",
           array:[],
           moviename:"G K Cinemas",
           showTime:"10.30",
          
          },
        reducers:{
            upMovie:(state,action)=>{
                state.Movie=action.payload
            },
            upview:(state,action)=>{
                state.Movie=action.payload
            },
            upLive:(state,action)=>{
                state.Liveimg=action.payload

            },
            upPrime:(state,action)=>{
                state.Premier=action.payload

            },
            upOnline:(state,action)=>{
                state.Online=action.payload
            },
            setTickets: (state, action) => {
                state.tickets = action.payload;
              },
              setTheater: (state, action) => {
                state.theater = action.payload;
              },
              setShowTime: (state, action) => {
                state.showTime = action.payload;
              },
              upmoviename: (state, action) => {
                state.moviename= action.payload;
              },
              setSelectSeat: (state, action) => {
                state.selectSeats = action.payload;
              },
              setbackimg: (state, action) => {
                state.Backimg = action.payload;
              },
              setCast: (state, action) => {
                state.Cast = action.payload;
              },
              setSuccess: (state, action) => {
                state.Success = action.payload;
              },
              seating: (state, action) => {
                state.seat = action.payload;
              },
            payment: (state, action) => {
                state.payment = action.payload;
              },
              upname:(state,action)=>{
                state.name=action.payload
              },
              updateTicketArray:(state,action)=>{
                state.array=action.payload
              },
              theaterAplhabet:(state,action)=>{
                state.theaterAplhabet=action.payload
              },
              updateduplicateTheaterSeat:(state,action)=>{
                state.duplicateTheaterSeat=action.payload
            },

            

        }    }
)

export default Slice.reducer
export const {upMovie}=Slice.actions
export const {upLive}=Slice.actions
export const {upPrime}=Slice.actions
export const {upview}=Slice.actions
export const {upOnline}=Slice.actions
export const {setTickets}=Slice.actions
export const {setTheater}=Slice.actions
export const  {setShowTime}=Slice.actions
export const {upmoviename}=Slice.actions
export const {setSelectSeat}=Slice.actions
export const {setbackimg}=Slice.actions
export const {setCast}=Slice.actions
export const {setSuccess}=Slice.actions
export const {seating}=Slice.actions  
export const {payment}=Slice.actions  
export const {upname}=Slice.actions
export const {theaterAplhabet}=Slice.actions
export const {updateTicketArray}=Slice.actions