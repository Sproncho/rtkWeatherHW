import {createSlice} from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        message: 'Enter city name',
        weatherInfo: {}
    },
    reducers: {
        putWeatherInfo(state, action) {
            state.weatherInfo = action.payload;
            state.message = null
        },
        putMessage(state, action) {
            state.message = action.payload;
        }
    }
})
export const {putWeatherInfo,putMessage} = weatherSlice.actions;
export default weatherSlice.reducer;