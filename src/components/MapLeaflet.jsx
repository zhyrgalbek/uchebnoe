import { MapContainer, Marker, Polygon, Popup, TileLayer } from 'react-leaflet'
import states from '../utils/Constants/json/states2.json'
import statesBatken from '../utils/Constants/json/statesBatken.json'
import statesChuy from '../utils/Constants/json/statesChuy.json'
import statesDjalal from '../utils/Constants/json/statesDjalal.json'
import statesKol from '../utils/Constants/json/statesKol.json'
import statesNaryn from '../utils/Constants/json/statesNarin.json'
import statesOsh from '../utils/Constants/json/statesOsh.json'
import statesTalas from '../utils/Constants/json/statesTalas.json'
import statesJson from '../utils/Constants/json/statesJson.json'
import styled from 'styled-components'
const kyrgyzstan = getCoordinates('Кыргызстан', states).reverse()
const naryn = reverseGet(getCoordinates('Нарынская', states)[0])
const chuy = reverseGet(getCoordinates('Чуйская', states)[0])
const issykKul = reverseGet(getCoordinates("Ыссык-Кульская", states)[0])
const talas = reverseGet(getCoordinates("Таласская", states)[0])
const jalalAbad = reverseGet(getCoordinates("Джалал-Абадская", states)[0])
const osh = reverseGet(getCoordinates("Ошская", states)[0])
const batken = reverseGet(getCoordinates("Баткенская", states)[0])
const bishkek = reverseGet(getCoordinates("г.Бишкек", states)[0])
const oshCity = reverseGet(getCoordinates("г.Ош", states)[0])
const position = kyrgyzstan;
const batkenRayons = getStates(statesBatken)
const chuyRayons = getStates(statesChuy)
const issykKulRayoins = getStates(statesKol)
const narynRayons = getStates(statesNaryn)
const oshRayons = getStates(statesOsh)
const talasRayons = getStates(statesTalas)
const djalalRayons = getStates(statesDjalal)


function getStates(states) {
    let arr = states.features;
    let newArr = [];
    let reversArr = [];
    arr.forEach(elem => {
        newArr.push({ id: elem.id, polygon: getCoordinates(elem.id, states) })
    })
    newArr.forEach(elem => {
        let arr = [];
        elem.polygon.forEach(el => {
            if (!Array.isArray(el)) {
                arr.push(el)
            }
        })
        if (arr.length !== 0) {
            elem.polygon = [arr]
        }
        if (glubina(elem.polygon) < 2) {
            elem.polygon = [elem.polygon]
        }
    })
    newArr.forEach(elem => {
        const newElem = reverseGet(elem.polygon[0])
        elem.polygon[0] = newElem;
        reversArr.push(elem)
    })
    return newArr;
}

getStates(statesTalas)

function glubina(arr) {
    if (arr.filter(i => i.constructor.name === "Array").length != 0) {
        return 1 + glubina([].concat(...arr.filter(i => i.constructor.name === "Array")));
    } else {
        return 0;
    }
}

function getCoordinates(name, states) {
    const arr = states.features;
    let getArr = []
    for (let i = 0; i < arr.length; i++) {
        if (String(arr[i].id) === name) {
            getArr = arr[i].geometry.coordinates.flat();
            break;
        }
    }
    return getArr;
}

function reverseGet(arr) {
    return arr.map(elem => {
        return elem.reverse();
    })
}

const polygon = []

const purpleOptions = { color: '#0166FF', fillColor: 'transparent' }


export const MapLeaflet = () => {
    console.log(statesJson)
    return <Map center={position} zoom={7}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {/* <Marker position={position}>
            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker> */}
        {
            statesJson.map(elem => {
                return <Polygon key={elem.name} pathOptions={{ color: elem.color, fillColor: elem.fillColor }} positions={elem.latlngs} />
            })
        }
    </Map>
}

const Map = styled(MapContainer)`
    /* border: 1px solid red; */
    & > div > div > .leaflet-touch .leaflet-control-layers, .leaflet-touch .leaflet-bar{
        border: 2px solid rgba(0,0,0,0.2);
        background-clip: padding-box;s
        border: 1px solid red;
    }
    & .leaflet-control-zoom .leaflet-bar .leaflet-control a {
        border-radius: 50%;
    }
`





































