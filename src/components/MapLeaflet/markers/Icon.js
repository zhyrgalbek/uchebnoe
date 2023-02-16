import L from 'leaflet'
// import ellipse from '../../../assets/Map/markers/Ellipse1.svg'
// import ellipse2 from '../../../assets/Map/markers/Ellipse2.svg'
import { HandySvg } from 'handy-svg'
import { injector } from 'handy-svg/lib/injector';
import styles from './Icon.module.css'
import marker1 from '../../../assets/Map/markers/marker1.svg'
import marker1Green from '../../../assets/Map/markers/marker1Green.svg'
import marker1GreenWhite from '../../../assets/Map/markers/marker1GreenWhite.svg'
import marker1Yellow from '../../../assets/Map/markers/marker1Yellow.svg'
import marker1YellowWhite from '../../../assets/Map/markers/marker1YellowWhite.svg'
import marker1Red from '../../../assets/Map/markers/marker1Red.svg'

import marker2 from '../../../assets/Map/markers/marker2.svg'
import marker2Green from '../../../assets/Map/markers/marker2Green.svg'
import marker2GreenWhite from '../../../assets/Map/markers/marker2GreenWhite.svg'
import marker2Yellow from '../../../assets/Map/markers/marker2Yellow.svg'
import marker2YellowWhite from '../../../assets/Map/markers/marker2YellowWhite.svg'
import marker2Red from '../../../assets/Map/markers/marker2Red.svg'




import marker3 from '../../../assets/Map/markers/marker3.svg'
import marker3Green from '../../../assets/Map/markers/marker3Green.svg'
import marker3GreenWhite from '../../../assets/Map/markers/marker3GreenWhite.svg'
import marker3Yellow from '../../../assets/Map/markers/marker3Yellow.svg'
import marker3YellowWhite from '../../../assets/Map/markers/marker3YellowWhite.svg'
import marker3Red from '../../../assets/Map/markers/marker3Red.svg'


import marker4 from '../../../assets/Map/markers/marker4.svg'
import marker4Green from '../../../assets/Map/markers/marker4Green.svg'
import marker4GreenWhite from '../../../assets/Map/markers/marker4GreenWhite.svg'
import marker4Yellow from '../../../assets/Map/markers/marker4Yellow.svg'
import marker4YellowWhite from '../../../assets/Map/markers/marker4YellowWhite.svg'
import marker4Red from '../../../assets/Map/markers/marker4Red.svg'


import marker5 from '../../../assets/Map/markers/marker5.svg'
import marker6 from '../../../assets/Map/markers/marker6.svg'
import marker7 from '../../../assets/Map/markers/marker7.svg'
import iconInstitut from '../../../assets/Map/markers/iconInstitut.svg'
import React from 'react';


export const IconInstitutionTest = () => {
    return <HandySvg src={iconInstitut} className={styles.icon} width="60" height="60" />
}

export const IconUmbrella = () => {
    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="14.5" fill="#3763FF" stroke="white" />
            <path d="M20.5321 20.467V16.4412C20.5261 15.8369 20.2802 15.2597 19.8487 14.8366C19.4172 14.4135 18.8353 14.1791 18.231 14.185H14.9305C14.5798 14.1838 14.2333 14.2624 13.9174 14.4149C13.6014 14.5673 13.3243 14.7896 13.107 15.065" stroke="white" stroke-miterlimit="10" />
            <path d="M15.3385 17.2775C15.2684 16.6906 14.9856 16.1497 14.5435 15.7573C14.1014 15.3649 13.5308 15.1483 12.9397 15.1483H11.0323C10.3917 15.1483 9.77734 15.4028 9.32435 15.8558C8.87137 16.3088 8.61688 16.9232 8.61688 17.5638V20.467" stroke="white" stroke-miterlimit="10" />
            <path d="M8.64307 17.2775C8.71312 16.6906 8.99598 16.1497 9.43807 15.7573C9.88015 15.3649 10.4508 15.1483 11.0419 15.1483H12.9492C13.5898 15.1483 14.2042 15.4028 14.6572 15.8558C15.1102 16.3088 15.3647 16.9232 15.3647 17.5638V20.467" stroke="white" stroke-miterlimit="10" />
            <path d="M11.8173 13.5022C10.9279 13.5022 10.207 12.7813 10.207 11.8919C10.207 11.0026 10.9279 10.2816 11.8173 10.2816C12.7067 10.2816 13.4276 11.0026 13.4276 11.8919C13.4276 12.7813 12.7067 13.5022 11.8173 13.5022Z" stroke="white" stroke-miterlimit="10" />
            <path d="M17.0956 12.7866C15.9592 12.7866 15.038 11.8653 15.038 10.7289C15.038 9.59255 15.9592 8.67133 17.0956 8.67133C18.232 8.67133 19.1532 9.59255 19.1532 10.7289C19.1532 11.8653 18.232 12.7866 17.0956 12.7866Z" stroke="white" stroke-miterlimit="10" />
            <path d="M20.8903 12.8148C21.4827 13.4088 22.548 13.3188 22.548 13.3188C22.548 13.3188 22.6359 12.2525 22.0435 11.6584C21.451 11.0644 20.3877 11.1524 20.3877 11.1524C20.3877 11.1524 20.2982 12.2188 20.8903 12.8148Z" fill="white" />
        </svg>
    )
}

export const getIconTest = new L.Icon({
    iconUrl: <IconUmbrella />,
    iconRetinaUrl: <IconUmbrella />,
    iconAnchor: null,
    // popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});


export const iconInstitution1 = new L.Icon({
    iconUrl: marker1,
    iconRetinaUrl: marker1,
    iconAnchor: null,
    // popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export const iconInstitution1Green = new L.Icon({
    iconUrl: marker1Green,
    iconRetinaUrl: marker1Green,
    iconAnchor: null,
    // popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export const iconInstitution1GreenWhite = new L.Icon({
    iconUrl: marker1GreenWhite,
    iconRetinaUrl: marker1GreenWhite,
    iconAnchor: null,
    // popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export const iconInstitution1Yellow = new L.Icon({
    iconUrl: marker1Yellow,
    iconRetinaUrl: marker1Yellow,
    iconAnchor: null,
    // popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export const iconInstitution1YellowWhite = new L.Icon({
    iconUrl: marker1YellowWhite,
    iconRetinaUrl: marker1YellowWhite,
    iconAnchor: null,
    // popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export const iconInstitution1Red = new L.Icon({
    iconUrl: marker1Red,
    iconRetinaUrl: marker1Red,
    iconAnchor: null,
    // popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export const iconInstitution2 = new L.Icon({
    iconUrl: marker2,
    iconRetinaUrl: marker2,
    iconAnchor: null,
    // popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export const iconInstitution2Green = new L.Icon({
    iconUrl: marker2Green,
    iconRetinaUrl: marker2Green,
    iconAnchor: null,
    // popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export const iconInstitution2GreenWhite = new L.Icon({
    iconUrl: marker2GreenWhite,
    iconRetinaUrl: marker2GreenWhite,
    iconAnchor: null,
    // popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export const iconInstitution2Yellow = new L.Icon({
    iconUrl: marker2Yellow,
    iconRetinaUrl: marker2Yellow,
    iconAnchor: null,
    // popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export const iconInstitution2YellowWhite = new L.Icon({
    iconUrl: marker2YellowWhite,
    iconRetinaUrl: marker2YellowWhite,
    iconAnchor: null,
    // popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export const iconInstitution2Red = new L.Icon({
    iconUrl: marker2Red,
    iconRetinaUrl: marker2Red,
    iconAnchor: null,
    // popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export const iconInstitution3 = new L.Icon({
    iconUrl: marker3,
    iconRetinaUrl: marker3,
    iconAnchor: null,
    // popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});


export const iconInstitution3Green = new L.Icon({
    iconUrl: marker3Green,
    iconRetinaUrl: marker3Green,
    iconAnchor: null,
    // popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});


export const iconInstitution3GreenWhite = new L.Icon({
    iconUrl: marker3GreenWhite,
    iconRetinaUrl: marker3GreenWhite,
    iconAnchor: null,
    // popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(40, 55),
    className: 'leaflet-div-icon'
});

export const iconInstitution3Yellow = new L.Icon({
    iconUrl: marker3Yellow,
    iconRetinaUrl: marker3Yellow,
    iconAnchor: null,
    // popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export const iconInstitution3YellowWhite = new L.Icon({
    iconUrl: marker3YellowWhite,
    iconRetinaUrl: marker3YellowWhite,
    iconAnchor: null,
    // popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export const iconInstitution3Red = new L.Icon({
    iconUrl: marker3Red,
    iconRetinaUrl: marker3Red,
    iconAnchor: null,
    // popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export const iconInstitution4 = new L.Icon({
    iconUrl: marker4,
    iconRetinaUrl: marker4,
    iconAnchor: null,
    // popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export const iconInstitution4Green = new L.Icon({
    iconUrl: marker4Green,
    iconRetinaUrl: marker4Green,
    iconAnchor: null,
    // popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export const iconInstitution4GreenWhite = new L.Icon({
    iconUrl: marker4GreenWhite,
    iconRetinaUrl: marker4GreenWhite,
    iconAnchor: null,
    // popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export const iconInstitution4Yellow = new L.Icon({
    iconUrl: marker4Yellow,
    iconRetinaUrl: marker4Yellow,
    iconAnchor: null,
    // popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export const iconInstitution4YellowWhite = new L.Icon({
    iconUrl: marker4YellowWhite,
    iconRetinaUrl: marker4YellowWhite,
    iconAnchor: null,
    // popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export const iconInstitution4Red = new L.Icon({
    iconUrl: marker4Red,
    iconRetinaUrl: marker4Red,
    iconAnchor: null,
    // popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export const iconInstitution5 = new L.Icon({
    iconUrl: marker5,
    iconRetinaUrl: marker5,
    iconAnchor: null,
    // popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export const iconInstitution6 = new L.Icon({
    iconUrl: marker6,
    iconRetinaUrl: marker6,
    iconAnchor: null,
    // popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export const iconInstitution7 = new L.Icon({
    iconUrl: marker7,
    iconRetinaUrl: marker7,
    iconAnchor: null,
    // popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});
