import { createSlice } from "@reduxjs/toolkit";
import { fetch_api } from "../../hooks/fetch_api";

const initialState = {
    institutions: [],
    status: ''
}

const institutionsSlices = createSlice({
    name: 'institutionsSlices',
    initialState,
    reducers: {
        setInstitutions(state, action) {
            state.institutions = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
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
            dispatch(institutionsActions.setInstitutions(institutions.data));
            setTimeout(() => {
                dispatch(institutionsActions.setStatus('fulfilled'));
            }, 2000)
        } catch (error) {
            console.log(error);
        }
    }
}