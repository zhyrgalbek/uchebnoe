import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGeolocated } from "react-geolocated";
import L from 'leaflet';
import { toast } from 'react-toastify';
import { IconButton } from '@mui/material';
import imhereicon from './imherer.png'

export const Demo = () => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

    console.log(isGeolocationEnabled)

    return !isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? (
        <table>
            <tbody>
                <tr>
                    <td>latitude</td>
                    <td>{coords.latitude}</td>
                </tr>
                <tr>
                    <td>longitude</td>
                    <td>{coords.longitude}</td>
                </tr>
                <tr>
                    <td>altitude</td>
                    <td>{coords.altitude}</td>
                </tr>
                <tr>
                    <td>heading</td>
                    <td>{coords.heading}</td>
                </tr>
                <tr>
                    <td>speed</td>
                    <td>{coords.speed}</td>
                </tr>
            </tbody>
        </table>
    ) : (
        <div>Getting the location data&hellip; </div>
    );
};

export function getIconImHere() {
    return new L.divIcon({
        // html: `<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="#fff">
        // <path d="M18.4 44V17.1q-4.75-1-7.625-4.275Q7.9 9.55 7.9 5.2h3q0 3.9 3.025 6.55T21.3 14.4h5q1.9 0 2.8.325.9.325 2.3 1.525l9.2 8.6L38.45 27l-9.25-8.7V44h-3V31.25h-4.8V44Zm5.4-32.7q-1.5 0-2.575-1.075Q20.15 9.15 20.15 7.65q0-1.5 1.075-2.575Q22.3 4 23.8 4q1.5 0 2.575 1.075Q27.45 6.15 27.45 7.65q0 1.5-1.075 2.575Q25.3 11.3 23.8 11.3Z"/>
        // </svg>`,
        html: `<img src="${imhereicon}" alt="#" />`,
        // icon: imhereicon,
        // iconUrl: imhereicon,
        iconAnchor: null,
        // popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        // iconSize: new L.Point(60, 75),
        iconSize: [34, 34],
        className: 'leaflet-div-icon imhere'
    });
}

const GeoLocation = ({ onSetCoords, onClickGeoLocation }) => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });
    const notify = ({ text, variant }) => {
        return toast[variant](text);
    }
    useEffect(() => {
        if (coords) {
            onSetCoords({ coords })
        }
        if (!isGeolocationEnabled) {
            notify({ text: 'Пожалуйста, включите геолокацию на вашем устройстве', variant: 'info' })
        }
    }, [coords, isGeolocationEnabled])

    return (
        <GeoLocationBlock onClick={onClickGeoLocation}>
            <IconButton sx={{
                backgroundColor: '#FFFFFF', border: '1px solid #3763FF', padding: '12px', borderRadius: '50%', "&:hover": {
                    backgroundColor: '#FFFFFF'
                }
            }}>
                {/* <GeoLocationIcon> */}
                <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.2959 11.3699L20.8515 1.52778L11.5883 22.3056L9.52982 13.557L1.2959 11.3699Z" stroke="#3763FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                {/* </GeoLocationIcon> */}
            </IconButton>
        </GeoLocationBlock>
    )
}

export default GeoLocation

const GeoLocationIcon = styled('div')`
    border: 1px solid #3763FF;
    background-color: #FFFFFF;
    padding: 12px;
    border-radius: 50%;
`

const GeoLocationBlock = styled('div')`
    /* border: 1px solid red; */
    position: absolute;
    bottom: 50px;
    left: 20px;
    z-index: 1000;
    cursor: pointer;
`