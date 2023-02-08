import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    translation: 0
}

const mapSlices = createSlice({
    name: 'mapSlices',
    initialState,
    reducers: {
        setTranslation(state, action) {
            state.translation = action.payload
        }
    }
})

export const mapActions = mapSlices.actions;
export default mapSlices;