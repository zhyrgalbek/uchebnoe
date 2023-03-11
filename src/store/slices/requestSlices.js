import { createSlice } from "@reduxjs/toolkit";
import { fetch_api } from "../../hooks/fetch_api";

const initialState = {
    requestFilter: [
        {
            type: 'region',
            value: '',
            text: ''
        },
        {
            type: 'areas',
            value: '',
            text: ''
        },
        {
            type: 'county',
            value: '',
            text: ''
        },
        {
            type: 'type',
            value: '',
            text: '',
        },
        {
            type: 'view',
            value: '',
            text: '',
        },
        {
            type: 'capacity',
            value: '',
            text: ''
        },
        {
            type: 'sector',
            value: '',
            text: ''
        },
        {
            type: 'fullness',
            fromValue: '',
            toValue: '',
            text: ''
        },
        {
            type: 'typeId',
            value: 'all',
            text: '',
        },
    ],
    activeFilterType: 'typeId',
}

const requestSlices = createSlice({
    name: 'requestSlices',
    initialState,
    reducers: {
        setActiveFilterType(state, action) {
            state.activeFilterType = action.payload
        },
        setRequestFilterReset(state) {
            state.requestFilter = state.requestFilter.map((elem) => {
                if (elem.type === 'typeId') {
                    return elem;
                }
                if (elem.type === 'fullness') {
                    return { ...elem, fromValue: '', toValue: '', text: '' }
                }
                return { ...elem, value: '', text: '' }
            })
        },
        setRequestFilter(state, action) {
            let { type, value, text, active } = action.payload;
            let idx = null;
            state.requestFilter = state.requestFilter.map((elem, index) => {
                if (type === 'capacity' && elem.type === 'fullness') {
                    if (value === 0) {
                        return { ...elem, fromValue: '', toValue: '' }
                    }
                    if (value === 1) {
                        return { ...elem, fromValue: '0', toValue: '62' }
                    }
                    if (value === 2) {
                        return { ...elem, fromValue: '63', toValue: '87' }
                    }
                    if (value === 3) {
                        return { ...elem, fromValue: '88', toValue: '112' }
                    }
                    if (value === 4) {
                        return { ...elem, fromValue: '113', toValue: '137' }
                    }
                    if (value === 5) {
                        return { ...elem, fromValue: '138', toValue: '1000' }
                    }
                    return elem;
                }
                if (elem.type === type) {
                    idx = index;
                    return { ...elem, value: value, text: text };
                }
                if (idx !== null && index > idx) {
                    if (elem.type === 'typeId') {
                        return elem;
                    }
                    return { ...elem, value: '', text: '' }
                }
                return elem;
            })
        },
    }
})

export const requestActions = requestSlices.actions;
export default requestSlices;