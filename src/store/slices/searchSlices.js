import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    result: []
}

const searchSlices = createSlice({
    name: 'searchSlices',
    initialState,
    reducers: {
        resetResult(state, action) {
            state.result = [];
        },
        setAsyncResultFunc(state, action) {
            const { institutions, seachText } = action.payload
            let arr = institutions.filter(elem => {
                if (seachText === '') {
                    return;
                }
                if (elem.name.toLowerCase().trim().replace(/[^a-zа-яё0-9\s]/gi, "").indexOf(seachText.toLowerCase().trim().replace(/[^a-zа-яё0-9\s]/gi, "")) !== -1) {
                    return { name: elem.name, id: elem.id }
                }
            });
            console.log(arr);
            state.result = arr
        }
    }
})

export const searchSlicesActions = searchSlices.actions;
export default searchSlices

export const setResuktAsync = ({ institutions, seachText }) => {

    return async (dispatch) => {
        let promise = new Promise(async (resolve, reject) => {
            let arr = await institutions.filter(elem => {
                if (seachText === '') {
                    return;
                }
                if (elem.name.toLowerCase().trim().replace(/[^a-zа-яё0-9\s]/gi, "").indexOf(seachText.toLowerCase().trim().replace(/[^a-zа-яё0-9\s]/gi, "")) !== -1) {
                    return { name: elem.name, id: elem.id }
                }
            })
            resolve(arr);
        })
        promise.then(data => {
            dispatch(searchSlicesActions.setAsyncResultFunc(data))
        })
    }
}