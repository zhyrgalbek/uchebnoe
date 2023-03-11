import { configureStore } from "@reduxjs/toolkit";
import mapSlices from "./slices/mapSlices";
import translationSlices from './slices/translationSlices'
import institutionInfoSlices from "./slices/institutionInfoSlices";
import filterAreasSlices from "./slices/filterAreasSlices";
import staticDatasSlices from "./slices/staticDatasSlices";
import requestSlices from "./slices/requestSlices";
import institutionsSlices from "./slices/institutionsSlices";
import refSlices from "./slices/refSlices";
import analizeSlices from "./slices/analizeSlices";

const store = configureStore({
    reducer: {
        mapSlicesStore: mapSlices.reducer,
        translationStore: translationSlices.reducer,
        institutionInfoStore: institutionInfoSlices.reducer,
        filterAreasStore: filterAreasSlices.reducer,
        staticDatasStore: staticDatasSlices.reducer,
        requestSlicesStore: requestSlices.reducer,
        institutionsStore: institutionsSlices.reducer,
        refSlicesStore: refSlices.reducer,
        analizeSlicesStore: analizeSlices.reducer
    }
})


export default store