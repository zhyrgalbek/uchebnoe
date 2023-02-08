import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    translation: 0
}

const mapSlices = createSlice({
    name: 'mapSlices',
    initialState,
    reducers: {
        setTranslation(state, action) {
            if (state.translation == 0) {
                state.translation = 1;
            } else {
                state.translation = 0;
            }
        }
    }
})

export const mapActions = mapSlices.actions;
export default mapSlices;