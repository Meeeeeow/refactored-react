import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../Apis/movieApi'
import { APIKey } from '../../Apis/apiKey'
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',async (searchText)=>{

    const response = await movieApi
            .get(`?apiKey=${APIKey}&s=${searchText}&type=movie`)
            console.log('response from API');
            console.log(response);
            return response.data;
})
export const fetchAsyncSeries = createAsyncThunk('movies/fetchAsyncSeries',async (searchText)=>{

    const response = await movieApi
            .get(`?apiKey=${APIKey}&s=${searchText}&type=series`)
            console.log('response from API');
            console.log(response);
            return response.data;
})
export const fetchAsyncShowsSingle = createAsyncThunk('movies/fetchAsyncShowsSingle',async (id)=>{
    const response = await movieApi
            .get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
            return response.data;
})
const initialState = {
    movies:{},
    series:{},
    selectedShow:{}
}

const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies:((state,action) =>{
            state.movies = action.payload
        }),
        removeSelecetedShows:((state,action)=>{
            state.selectedShow ={}
        })

    },
    extraReducers:{
        [fetchAsyncMovies.pending] : () =>{
            console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled] : (state,action) =>{
            return {...state,movies:action.payload}
        },
        [fetchAsyncMovies.rejected] : () =>{
            console.log("Rejected error");
        },
        [fetchAsyncSeries.fulfilled] : (state,action) =>{
            return {...state,series:action.payload}
        },
        [fetchAsyncShowsSingle.fulfilled] : (state,action) =>{
            return {...state,selectedShow:action.payload}
        }
    }
})

export const actions = movieSlice.actions;
export const getAllMovies = state => state.movies;
export const getAllShows = state => state.series;
export const getSelectedSeries = state => state.selectedShow;
export default movieSlice;