import { createSlice } from "@reduxjs/toolkit";
import { fetch_api } from "../../hooks/fetch_api";

const initialState = {
    institutions: [],
    visualInstitutions: [],
    update_time: '',
    status: '',
    messages: ''
}

const institutionsSlices = createSlice({
    name: 'institutionsSlices',
    initialState,
    reducers: {
        setVisualInstitutions(state, action) {
            const { requestOblast,
                institution_types,
                sector,
                fullness } = action.payload;
        },
        setInstitutions(state, action) {
            state.institutions = action.payload;
        },
        setUpdated(state, action) {
            state.update_time = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
        setMessages(state, action) {
            state.messages = action.payload;
        }
    }
})

export const institutionsActions = institutionsSlices.actions;
export default institutionsSlices;

export const getInstitutions = ({ requestOblast, institution_types, sector, fullness }) => {
    return async (dispatch) => {
        try {
            dispatch(institutionsActions.setStatus('pending'));
            const institutions = await fetch_api({ types: `?action=institutions&${requestOblast}${institution_types}&institution_sector_id=${sector}&occupancy_from=${fullness.from}&occupancy_to=${fullness.to}` });
            if (institutions.error !== '') {
                throw new Error('Таких учреждений нет!');
            }
            let arr = [];
            institutions.data.forEach(elem => {
                let update = arr.find(el => el === elem.updated_at);
                if (!update) {
                    arr.push(elem.updated_at)
                }
            })
            dispatch(institutionsActions.setUpdated(arr[arr.length - 1]));
            dispatch(institutionsActions.setInstitutions(institutions.data));
            setTimeout(() => {
                dispatch(institutionsActions.setStatus('fulfilled'));
            }, 2000);
        } catch (error) {
            console.log(error);
            dispatch(institutionsActions.setMessages('Таких учреждений нет!'));
            dispatch(institutionsActions.setStatus('rejected'));
        }
    }
}