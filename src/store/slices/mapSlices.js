import { createSlice } from "@reduxjs/toolkit";
import { fetch_api } from "../../hooks/fetch_api";

const initialState = {
    filter: [],
    coordinate: {
        type: '',
        value: ''
    },
}

const mapSlices = createSlice({
    name: 'mapSlices',
    initialState,
    reducers: {
        setCoordinate(state, action) {
            state.coordinate = {
                type: action.payload.type,
                value: action.payload.text
            }
        },
        setFilterAreas(state, action) {
            const { id, type } = action.payload;
            if (type === 'region') {
                state.areas2 = state.areas.filter(elem => elem.parent_id === id);
            }
            if (type === 'areas') {
                state.county2 = state.county.filter(elem => elem.parent_id === id);
            }
        },
        setFilter(state, { payload }) {
            state[payload.type] = payload.data;
        },
    }
})

export const mapActions = mapSlices.actions;
export default mapSlices;

export const getFilterInstitutions = (requestFilter, areas, activeFilterType) => {
    // let institution = '&institution_type_id=';
    let obj = { typeId: '', type: '', view: '', sector: '', fullness: { from: '', to: '' } };
    requestFilter.forEach((elem) => {
        if (elem.type === 'fullness') {
            obj[elem.type].from = elem.fromValue;
            obj[elem.type].to = elem.toValue;
            return;
        }
        obj[elem.type] = elem.value;
    })
    let { typeId, type, view, sector, fullness } = obj;
    let institution_types = `&institution_type_id=${typeId}`;
    let other = `&institution_type_id=5&institution_type_id=7&institution_type_id=8&institution_type_id=9&institution_type_id=18&institution_type_id=19&institution_type_id=20&institution_type_id=21&institution_type_id=23`
    if (typeId === 'other' && activeFilterType === 'typeId') {
        institution_types = other;
    }
    if (typeId === 'all' && activeFilterType === 'typeId') {
        institution_types = ``;
    }
    if (activeFilterType === 'type') {
        institution_types = `&institution_type_id=${type}`;
    }
    if (activeFilterType === 'view') {
        institution_types = `&institution_view_id=${view}`;
    }
    let requestOblast = ``
    if (requestFilter[0].value !== '') {
        let arr = areas.map(elem => {
            return elem.id;
        })
        requestOblast = `area_ids=[${arr}]`;
    }
    if (requestFilter[1].value !== '') {
        requestOblast = `area_id=${requestFilter[1].value}`;
    }
    if (requestFilter[2].value !== '') {
        requestOblast = `area_aimak_id=${requestFilter[2].value}`;
    }
    return async (dispatch) => {
        try {
            dispatch(mapActions.setStatus('pending'))
            const institutions = await fetch_api({ types: `?action=institutions&${requestOblast}${institution_types}&institution_sector_id=${sector}&occupancy_from=${fullness.from}&occupancy_to=${fullness.to}` });
            dispatch(mapActions.setInstitutions(institutions.data));
            setTimeout(() => {
                dispatch(mapActions.setStatus('fulfilled'));
            }, 2000)
        } catch (error) {
            console.log(error)
        }
    }
}

// другие 5, 7, 8,9,18,19,20,21,23
export const getInstitutions = ({ id }) => {
    let searchParams = '?action=institutions';
    let other = `&institution_type_id=5&institution_type_id=7&institution_type_id=8&institution_type_id=9&institution_type_id=18&institution_type_id=19&institution_type_id=20&institution_type_id=21&institution_type_id=23`
    let institution = '&institution_type_id=';
    return async (dispatch) => {
        try {
            if (id === 'other') {
                searchParams = searchParams + other;
            } else if (id === 'all') {
                searchParams = searchParams + '';
            }
            else {
                searchParams = searchParams + institution + id;
            }
            const institutions = await fetch_api({ types: searchParams });
            dispatch(mapActions.setInstitutions(institutions.data));
        } catch (error) {
            console.log(error);
        }
    }
}

export const getFilter = ({ searchValues }) => {
    let searchParams = `action=areas`;
    let type = '';
    searchValues.forEach((elem, index, arr) => {
        if (elem.value !== '' && elem.type === 'county') {
            return
        }
        if (elem.value !== '' && elem.type === 'region' || elem.value !== '' && elem.type === 'areas') {
            searchParams += `&parent_id=${elem.value}`;
            type = arr[index + 1].type;
        }
        if (elem.type === 'type' && elem.value !== '') {
            searchParams = `action=view&institution_type_id=${elem.value}`;
            type = arr[index + 1].type;
        }
        if (elem.type === 'view' && elem.value !== '') {
            return
        }
    })
    return async (dispatch) => {
        try {
            const f = searchValues.find(elem => elem.type === 'view' && elem.value !== '');
            if (f) {
                return
            }
            const filter = await fetch_api({ types: `?${searchParams}` });
            dispatch(mapActions.setFilter({ type: type, data: filter.data }));
        } catch (error) {
            console.log(error);
        }
    }
}

