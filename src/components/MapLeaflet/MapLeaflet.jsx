import { LayerGroup, LayersControl, MapContainer, Marker, Polygon, Popup, TileLayer, Tooltip, useMapEvent, useMapEvents, WMSTileLayer, GeoJSON, useMap, Rectangle } from 'react-leaflet'
import states from '../../utils/Constants/json/states2.json'
import statesJson from '../../utils/Constants/json/statesJson.json'
import statesBatken from '../../utils/Constants/json/statesBatken.json'
import statesChuy from '../../utils/Constants/json/statesChuy.json'
import statesDjalal from '../../utils/Constants/json/statesDjalal.json'
import statesKol from '../../utils/Constants/json/statesKol.json'
import statesNarin from '../../utils/Constants/json/statesNarin.json'
import statesOsh from '../../utils/Constants/json/statesOsh.json'
import statesTalas from '../../utils/Constants/json/statesTalas.json'
import point from '../../assets/Map/Exclamation_point.svg'
import krestik from '../../assets/Map/krestik.svg'

import styled, { css } from 'styled-components'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Paper } from '@mui/material'
import { Stack } from '@mui/system'
import L from "leaflet"
import { getIconTest, iconInstitution1, iconInstitution1Green, iconInstitution1GreenWhite, iconInstitution1Red, iconInstitution1Yellow, iconInstitution1YellowWhite, iconInstitution2, iconInstitution2Green, iconInstitution2GreenWhite, iconInstitution2Red, iconInstitution2Yellow, iconInstitution2YellowWhite, iconInstitution3, iconInstitution3Green, iconInstitution3GreenWhite, iconInstitution4, iconInstitution4Green, iconInstitution5, iconInstitution6, iconInstitution7 } from './markers/Icon'
const kyrgyzstan = getCoordinates('Кыргызстан', states).reverse();
const position = kyrgyzstan;
console.log(states)

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




function SetViewOnClick({ animateRef }) {
    const map = useMapEvent('click', (e) => {
        map.setView(e.latlng, map.getZoom(), {
            animate: animateRef.current || false,
        })
    })
    return null
}

function MapPlaceholder() {
    return (
        <p>
            Map of London.{' '}
            <noscript>You need to enable JavaScript to see this map.</noscript>
        </p>
    )
}

function MyComponent() {
    const mapEvents = useMapEvents({
        click: () => {
            mapEvents.locate()
        },
        locationfound: (location) => {
            console.log('location found:', location)
        },
    })
    return null
}

function getReverseArr(arr) {
    return arr.map(elem => {
        return elem.reverse()
    })
}

const innerBounds = [
    [49.505, -2.09],
    [53.505, 2.09],
]
const outerBounds = [
    [50.505, -29.09],
    [52.505, 29.09],
]

const redColor = { color: 'red' }
const whiteColor = { color: 'white' }

const color = ['#FDCA7B', '#AFD791', '#FCF58D', '#6CC49A', '#58C6C7', '#FBF48C', '#FAC97C', '#51C2C0', '#51C2C0', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)']

const markers = [
    [42.868135, 74.633753],
    [42.852028, 74.526636],
    [42.882727, 74.539339],
    [42.867883, 74.631693],
    [42.839694, 74.602511]
]

function SetBoundsRectangles() {
    const [bounds, setBounds] = useState(outerBounds)
    const [rayons, setRayons] = useState(null)
    const [bool, setBool] = useState(false)

    const map = useMap()
    const innerHandlers = useMemo(
        () => ({
            click() {
                setBounds(innerBounds)
                map.fitBounds(innerBounds)
            },
        }),
        [map],
    )

    const onChangeRayons = (country, layer) => {
        // layer.Tooltip(`<p>${country.id}</p>`);
        layer.on({
            click: (event) => {
                map.fitBounds(L.geoJson(country).getBounds())
            },
            mouseover: (event) => {
                // event.target.setStyle({
                //     fillColor: 'red'
                // })
            },
            mouseout: (event) => {
                // event.target.setStyle({
                //     fillColor: 'transparent'
                // })
            }
        })
    }

    useEffect(() => {
        console.log(rayons)
    }, [rayons])

    const onEachFeature = (country, layer) => {
        let boolffff = false;
        layer.on({
            click: (event) => {
                boolffff = true
                map.fitBounds(L.geoJson(country).getBounds())
                if (country.id === 'Ыссык-Кульская') {
                    let s = 0;
                    const link = L.geoJSON(statesKol, {
                        style: function (feature) {
                            s++;
                            return { color: color[s] }
                        },
                        onEachFeature: onChangeRayons
                    }).addTo(map);
                    setRayons((prev) => {
                        if (prev) {
                            map.removeLayer(prev);
                        }
                        return link
                    })
                }
                if (country.id === "Нарынская") {
                    let s = 0;
                    const link = L.geoJSON(statesNarin, {
                        style: function (feature) {
                            s++;
                            return { color: color[s] }
                        },
                        onEachFeature: onChangeRayons
                    }).addTo(map);
                    setRayons(prev => {
                        if (prev) {
                            map.removeLayer(prev);
                        }
                        return link
                    })

                }
                if (country.id === "Чуйская") {
                    let s = 0;
                    const link = L.geoJSON(statesChuy, {
                        style: function (feature) {
                            s++;
                            return { color: color[s] }
                        },
                        onEachFeature: onChangeRayons
                    }).addTo(map);
                    setRayons(prev => {
                        if (prev) {
                            map.removeLayer(prev);
                        }
                        return link
                    })
                }
                if (country.id === "Таласская") {
                    // setDistrict(L.geoJSON(statesNarin).addTo(map))
                    let s = 0;
                    const link = L.geoJSON(statesTalas, {
                        style: function (feature) {
                            s++;
                            return { color: color[s] }
                        },
                        onEachFeature: onChangeRayons
                    }).addTo(map);
                    setRayons(prev => {
                        if (prev) {
                            map.removeLayer(prev);
                        }
                        return link
                    })
                }
                if (country.id === "Джалал-Абадская") {
                    // setDistrict(L.geoJSON(statesNarin).addTo(map))
                    let s = 0;
                    const link = L.geoJSON(statesDjalal, {
                        style: function (feature) {
                            s++;
                            return { color: color[s] }
                        },
                        onEachFeature: onChangeRayons
                    }).addTo(map);
                    setRayons(prev => {
                        if (prev) {
                            map.removeLayer(prev);
                        }
                        return link
                    })
                }
                if (country.id === "Ошская") {
                    // setDistrict(L.geoJSON(statesNarin).addTo(map))
                    let s = 0;
                    const link = L.geoJSON(statesOsh, {
                        style: function (feature) {
                            s++;
                            return { color: color[s] }
                        },
                        onEachFeature: onChangeRayons
                    }).addTo(map);
                    setRayons(prev => {
                        if (prev) {
                            map.removeLayer(prev);
                        }
                        return link
                    })
                }
                if (country.id === "Баткенская") {
                    // setDistrict(L.geoJSON(statesNarin).addTo(map))
                    let s = 0;
                    const link = L.geoJSON(statesBatken, {
                        style: function (feature) {
                            s++;
                            return { color: color[s] }
                        },
                        onEachFeature: onChangeRayons
                    }).addTo(map);
                    setRayons(prev => {
                        if (prev) {
                            map.removeLayer(prev);
                        }
                        return link
                    })
                }
                // console.log(district1)
            },
            mouseover: (event) => {
                if (!boolffff) {
                    event.target.setStyle({
                        fillColor: 'red'
                    })
                }
            },
            mouseout: (event) => {
                if (!boolffff) {
                    event.target.setStyle({
                        fillColor: 'transparent'
                    })
                }
            }
        })
    }

    // const rayonStyle = {
    //     fillColor: 'transparent',
    //     color: 'transparent',
    // }
    return (
        <>
            {
                states.features.map(((elem, index) => {
                    const countryStyle = {
                        fillColor: 'transparent',
                        color: 'black',
                    }
                    if (color[index]) {
                        countryStyle.color = color[index]
                    }
                    if (elem.id !== 'Кыргызстан') {
                        return <GeoJSON key={elem.id} markersInheritOptions data={elem} pathOptions={countryStyle} onEachFeature={onEachFeature} >
                        </GeoJSON>
                    }
                }))
            }
            {
                markers.map(elem => {
                    return <Marker icon={iconInstitution3GreenWhite} position={elem} eventHandlers={{
                        click: (e) => {
                            console.log(e.latlng)
                            map.setView(e.latlng, 18)
                        }
                    }}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                })
            }
        </>
    )
}




const marker = [42.857254, 74.600725];




export const MapLeaflet = () => {
    const animateRef = useRef(true)

    const eventHandlers = () => ({
        click(event) {
            console.log(event)
        },
    })

    return <MapBlock>
        <Map center={position} zoom={7} placeholder={<MapPlaceholder />} scrollWheelZoom={false}>
            <MyComponent />
            <SetBoundsRectangles />

            {/* <Marker icon={iconInstitution3GreenWhite} position={marker}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker> */}
            <LayerGroup>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
            </LayerGroup>
            <LayersControl position="bottomright">
                <LayersControl.Overlay name="google">
                    <TileLayer
                        url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                        maxZoom="20"
                        subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Hybrid">
                    <LayerGroup>
                        <TileLayer
                            url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
                            maxZoom="20"
                            subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
                            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        />
                    </LayerGroup>
                </LayersControl.Overlay>
            </LayersControl>
            {/* {
                statesJson.map(elem => {
                    return <Polygon key={elem.name} pathOptions={{ color: elem.color, fillColor: 'transparent' }} positions={elem.latlngs} />
                })
            } */}
            <SetViewOnClick animateRef={animateRef} />
        </Map >
    </MapBlock>
}





const MapBlock = styled('div')`
    position: relative;
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
`

const Map = styled(MapContainer)`
    /* border: 1px solid red; */
    & .leaflet-touch .leaflet-control-layers, .leaflet-touch .leaflet-bar{
        border: none;
    }
`





































