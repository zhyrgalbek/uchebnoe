import { createSlice } from "@reduxjs/toolkit";
import { fetch_api } from "../../hooks/fetch_api";
import { heatmap_url } from "../../utils/Constants/Constants";

const initialState = {
    data: null
}

const heatMapdataSlices = createSlice({
    name: 'heatMapdataSlices',
    initialState,
    reducers: {
        setData(state, action) {
            state.data = action.payload
        }
    }
})

export const heatMapdataActions = heatMapdataSlices.actions;
export default heatMapdataSlices;

export const getHeatMapdata = () => {
    return async () => {
        try {
            const response = fetch(`${heatmap_url}wms?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&FORMAT=image%2Fjpeg&TRANSPARENT=true&QUERY_LAYERS=monmap%3At2monmap&STYLES&LAYERS=monmap%3At2monmap&exceptions=application%2Fvnd.ogc.se_inimage&INFO_FORMAT=text%2Fhtml&FEATURE_COUNT=50&X=50&Y=50&SRS=EPSG%3A4326&WIDTH=101&HEIGHT=101&BBOX=73.751220703125%2C40.41870117187501%2C75.970458984375%2C42.63793945312501`)
        } catch (error) {
            console.log(error)
        }
    }
}