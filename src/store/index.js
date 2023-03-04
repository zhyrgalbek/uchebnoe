import { configureStore } from "@reduxjs/toolkit";
import mapSlices from "./slices/mapSlices";

const store = configureStore({
    reducer: {
        translate: mapSlices.reducer,
    }
})


export default store