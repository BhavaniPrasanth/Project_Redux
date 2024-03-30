import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import Movieapi from "../../common/Apis/Movieapi";
import { APIKEY } from "../../common/Apis/MovieapiKey";

export const fetchAsyncMovies =createAsyncThunk(
   "movies/fetchAsyncMovies",
   async() => {
    const movieText ="Harry";
    const response=await Movieapi.get(
        `?apikey=${APIKEY}&s=${movieText}&type=movie`
    );
    return response.data;
   }
)

export const fetchAsyncShows =createAsyncThunk(
    "movies/fetchAsyncShows",
    async() => {
        const seriestext ="Friends";
        const response =await Movieapi.get(
            `?apikey = ${APIKEY}&s=${seriestext}&type=series`
        );
        return response.data;
    }
)


export const fetchAsyncMovieOrShowDetail=createAsyncThunk(
    "Movies/fetchAsyncMoviesOrShowDetail",
    async(id) => {
        const response = await Movieapi.get(
            `?apikey =${APIKEY}&i=${id}&Plot=full`
        );
        return response.data;
    }
)

const initialState= {
  Movies : {},
  shows : {},
  selectMovieOrShow : {}
 }

 const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, (state) => {
        console.log("Pending");
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        console.log("Fetched Successfully!");
        return { ...state, Movies: payload };
      })
      .addCase(fetchAsyncMovies.rejected, (state) => {
        console.log("Rejected!");
      })
      .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
        console.log("Fetched Successfully!");
        return { ...state, shows: payload };
      })
      .addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, { payload }) => {
        console.log("Fetched Successfully!");
        return { ...state, selectMovieOrShow: payload };
      });
  },
});

  export const {removeSelectedMovieOrShow}= movieSlice.actions;
  export const getAllMovies= (state) => state.Movies.movies;
  export const getAllShows =(state) => state.Movies.shows;
  export const getSelectedMovieOrShow =(state)=> state.Movies.selectMovieOrShow;
  export default movieSlice.reducer;