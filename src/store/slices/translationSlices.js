import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    translation: 0
}

const translationSlices = createSlice({
    name: 'translationSlices',
    initialState,
    reducers: {
        setTranslation(state, action) {
            state.translation = action.payload;
        },
    }
})

export const translationActions = translationSlices.actions;
export default translationSlices;
