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
import testJon from '../../utils/Constants/json/testJson.json'
import point from '../../assets/Map/Exclamation_point.svg'
import krestik from '../../assets/Map/krestik.svg'
import clusterIcon from '../../assets/Map/markers/clusterIcon.svg'

import styled, { css } from 'styled-components'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Box, Paper } from '@mui/material'
import { Stack } from '@mui/system'
// import '../../../node_modules/leaflet.markercluster/dist/'
import L from "leaflet"
import '@changey/react-leaflet-markercluster/dist/styles.min.css'
import MarkerClusterGroup from '@changey/react-leaflet-markercluster'
import { FilterSubmit } from '../FilerSubmit'
import { fetch_api } from '../../hooks/fetch_api'
import { useDispatch, useSelector } from 'react-redux'
import { getIcon } from './markers/getIcon'
import { mapActions } from '../../store/slices/mapSlices'
const kyrgyzstan = getCoordinates('Кыргызстан', states).reverse();
const position = kyrgyzstan;

const colorMarker = '#58BF56';
const colorMarker2 = '#56BF94';
const colorMarker3 = '#58BF56';


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
    });
    return null;
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

function SetBoundsRectangles({ marker }) {
    const { institutions } = useSelector(store => store.translate)
    const [bounds, setBounds] = useState(outerBounds)
    const [rayons, setRayons] = useState(null)
    const [bool, setBool] = useState(false)
    // const [newTestJson, setNewTestJson] = useState([])
    const dispatch = useDispatch();

    // console.log(institutions);
    // console.log(statesKol)

    const map = useMap();
    useEffect(() => {
        console.log(marker)
        if (marker) {
            window.scrollTo({ top: 1100, left: 0, behavior: "smooth" });
            map.setView(marker, 17);
        }
    }, [marker]);
    const innerHandlers = (event, institution) => {
        // map.setView(event.latlng, 17);
        dispatch(mapActions.setMarker(event.latlng));
        dispatch(mapActions.setInstitution(institution));
        // console.log(institution)
    }

    const onChangeRayons = (country, layer) => {
        // layer.Tooltip(`<p>${country.id}</p>`);
        layer.on({
            click: (event) => {
                map.fitBounds(L.geoJson(country).getBounds());
                map.setView(event.latlng, 10);
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
                        return link;
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

    // useEffect(() => {
    //     var cluster = L.markerClusterGroup();
    //     var geoJson = L.geoJSON(testJon, {
    //         style: function () {
    //             return {
    //                 color: 'red'
    //             }
    //         }
    //     });
    //     // cluster.addLayer(geoJson);
    //     geoJson.addTo(map);
    // }, [])

    // const rayonStyle = {
    //     fillColor: 'transparent',
    //     color: 'transparent',
    // }
    const createClusterCustomIconGreen = function (cluster) {
        return L.divIcon({
            html: `<span>${cluster.getChildCount()}</span>`,
            className: 'marker-cluster-custom green',
            iconUrl: clusterIcon,
            iconSize: [25, 25]
        });
    }
    const createClusterCustomIconYellow = function (cluster) {
        return L.divIcon({
            html: `<span>${cluster.getChildCount()}</span>`,
            className: 'marker-cluster-custom yellow',
            iconUrl: clusterIcon,
            iconSize: [25, 25]
        });
    }
    const createClusterCustomIconYellowWhite = function (cluster) {
        return L.divIcon({
            html: `<span>${cluster.getChildCount()}</span>`,
            className: 'marker-cluster-custom yellowWhite',
            iconUrl: clusterIcon,
            iconSize: [25, 25]
        });
    }
    const createClusterCustomIconRed = function (cluster) {
        return L.divIcon({
            html: `<span>${cluster.getChildCount()}</span>`,
            className: 'marker-cluster-custom red',
            iconUrl: clusterIcon,
            iconSize: [25, 25]
        });
    }
    const createClusterCustomIconGreenWhite = function (cluster) {
        return L.divIcon({
            html: `<span>${cluster.getChildCount()}</span>`,
            className: 'marker-cluster-custom greenWhite',
            iconUrl: clusterIcon,
            iconSize: [25, 25]
        });
    }

    // useEffect(() => {
    //     setNewTestJson((prev) => {
    //         const one = [];
    //         const two = [];
    //         const three = [];
    //         const foure = [];
    //         const five = [];
    //         institutions.forEach((elem, index) => {
    //             if (elem.fullness >= 0 && elem.fullness < 50) {
    //                 one.push({ ...elem, id: 2 })
    //                 return
    //             } else if (elem.fullness >= 50 && elem.fullness < 75) {
    //                 two.push({ ...elem, id: 3 })
    //                 return
    //             } else if (elem.fullness >= 75 && elem.fullness < 100) {
    //                 three.push({ ...elem, id: 5 })
    //                 return
    //             } else if (elem.fullness >= 100 && elem.fullness < 125) {
    //                 foure.push({ ...elem, id: 7 })
    //                 return
    //             } else {
    //                 five.push({ ...elem, id: 5 })
    //                 return
    //             }
    //         })
    //         return [[...one], [...two], [...three], [...foure], [...five]];
    //     })
    // }, [institutions])
    // console.log(newTestJson)
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
            <MarkerClusterGroup>
                {
                    // institution_type_id
                    // capacity_percentage
                    institutions.map((elem, index) => {
                        const markerIcon = getIcon(elem.institution_type_id, elem.capacity_percentage);
                        return <Marker eventHandlers={{ click: (e) => innerHandlers(e, elem) }} icon={markerIcon} key={elem.id} position={[elem.latitude, elem.longitude]} ></Marker>
                    })
                }
            </MarkerClusterGroup>
            {/* <MarkerClusterGroup chunkedLoading> */}
            {/* <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIconGreen}>
                {
                    newTestJson[0]?.map((elem, index) => {
                        const markerIcon = getIcon(elem.institution_type_id, elem.capacity_percentage);
                        return <Marker eventHandlers={{ click: (e) => innerHandlers(e, elem) }} icon={markerIcon} key={elem.id} position={[elem.latitude, elem.longitude]} ></Marker>
                    })
                }
            </MarkerClusterGroup>
            <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIconYellow}>
                {
                    newTestJson[1]?.map((elem, index) => {
                        const markerIcon = getIcon(elem.institution_type_id, elem.capacity_percentage);
                        return <Marker eventHandlers={{ click: (e) => innerHandlers(e, elem) }} icon={markerIcon} key={elem.id} position={[elem.latitude, elem.longitude]} ></Marker>
                    })
                }
            </MarkerClusterGroup>
            <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIconYellowWhite}>
                {
                    newTestJson[2]?.map((elem, index) => {
                        const markerIcon = getIcon(elem.institution_type_id, elem.capacity_percentage);
                        return <Marker eventHandlers={{ click: (e) => innerHandlers(e, elem) }} icon={markerIcon} key={elem.id} position={[elem.latitude, elem.longitude]} ></Marker>
                    })
                }
            </MarkerClusterGroup>
            <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIconGreenWhite}>
                {
                    newTestJson[3]?.map((elem, index) => {
                        const markerIcon = getIcon(elem.institution_type_id, elem.capacity_percentage);
                        return <Marker eventHandlers={{ click: (e) => innerHandlers(e, elem) }} icon={markerIcon} key={elem.id} position={[elem.latitude, elem.longitude]} ></Marker>
                    })
                }
            </MarkerClusterGroup>
            <MarkerClusterGroup iconCreateFunction={createClusterCustomIconRed}>
                {
                    newTestJson[4]?.map((elem, index) => {
                        const markerIcon = getIcon(elem.institution_type_id, elem.capacity_percentage);
                        return <Marker eventHandlers={{ click: (e) => innerHandlers(e, elem) }} icon={markerIcon} key={elem.id} position={[elem.latitude, elem.longitude]} ></Marker>
                    })
                }
            </MarkerClusterGroup> */}
            {/* </MarkerClusterGroup> */}
        </>
    )
}




const marker = [42.857254, 74.600725];






export const MapLeaflet = ({ marker }) => {
    const animateRef = useRef(true)
    const eventHandlers = () => ({
        click(event) {
            // console.log(event)
        },
    })

    return <>
        {/* <Stack direction="row" justifyContent="flex-end" sx={{ marginBottom: '20px' }}>
            <Box sx={{ width: 'auto' }}>
                <FilterSubmit variant="desctop">Назад</FilterSubmit>
            </Box>
        </Stack> */}
        <Paper sx={{ width: "100%", height: "100%" }} elevation={6}>
            <MapBlock>
                <Map center={position} zoom={6} placeholder={<MapPlaceholder />} scrollWheelZoom={false}>
                    <LayerGroup>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        />
                        {/* <WMSTileLayer
                            url="https://geoserver.24mycrm.com/monmap/wms?"
                            version='1.0.0'
                            opacity={0.25}
                            srs="EPSG:4326"
                            layers="t2"
                            gridSet="999"
                            format="image/png"
                        /> */}
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
                    <SetViewOnClick animateRef={animateRef} />
                    <MyComponent />
                    <SetBoundsRectangles marker={marker} />
                </Map >
            </MapBlock >
        </Paper>
    </>
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





































