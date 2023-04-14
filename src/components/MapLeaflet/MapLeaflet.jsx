import { LayerGroup, MapContainer, Marker, Popup, TileLayer, Tooltip, useMapEvent, useMapEvents, WMSTileLayer, GeoJSON, useMap, Rectangle, LayersControl } from 'react-leaflet'
import states from '../../utils/Constants/json/states2.json'
import statesBatken from '../../utils/Constants/json/statesBatken.json'
import statesChuy from '../../utils/Constants/json/statesChuy.json'
import statesDjalal from '../../utils/Constants/json/statesDjalal.json'
import statesKol from '../../utils/Constants/json/statesKol.json'
import statesNarin from '../../utils/Constants/json/statesNarin.json'
import statesOsh from '../../utils/Constants/json/statesOsh.json'
import statesTalas from '../../utils/Constants/json/statesTalas.json'
import statesBishkek from '../../utils/Constants/json/statesBishkek.json'
import clusterIcon from '../../assets/Map/markers/clusterIcon.svg'

import styled from 'styled-components'
import { useEffect, useRef, useState } from 'react'
import { Box, IconButton, Paper } from '@mui/material'
import { Stack } from '@mui/system'
import L from "leaflet"
import '@changey/react-leaflet-markercluster/dist/styles.min.css'
import MarkerClusterGroup from '@changey/react-leaflet-markercluster'
import { FilterSubmit } from '../FilerSubmit'
import { useDispatch, useSelector } from 'react-redux'
import { getIcon } from './markers/getIcon'
import { institutionInfoActions } from '../../store/slices/institutionInfoSlices'
import InfoBlock from './InfoBlock';
import InfoBlockRight from './InfoBlockRight';
import React from 'react'
import { analizeSlicesActions } from '../../store/slices/analizeSlices'

import 'react-toastify/dist/ReactToastify.css';
import GeoLocation, { getIconImHere } from './GeoLocation'
import { useCallback } from 'react'
import RadioMaps from './RadioMaps'
import PrevBtn from './PrevBtn'
const kyrgyzstan = getCoordinates('Кыргызстан', states).reverse();
const position = kyrgyzstan;



const regions = [states, statesBatken, statesChuy, statesDjalal, statesKol, statesNarin, statesTalas, statesOsh, statesBishkek];


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
            // console.log('location found:', location)
        },
    })
    return null
}



const color = ['#FDCA7B', '#AFD791', '#FCF58D', '#6CC49A', '#58C6C7', '#FBF48C', '#FAC97C', '#51C2C0', '#51C2C0', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)']

function SetBoundsRectangles({ marker, setPrevBtn, prevBtn, bottomMap, coords, onSetCoords }) {
    const { institutions, status } = useSelector(store => store.institutionsStore)
    const { institution } = useSelector(store => store.institutionInfoStore)
    const { coordinate } = useSelector(store => store.mapSlicesStore)
    const { occupancyInstitutes } = useSelector(store => store.analizeSlicesStore)
    const [rayons, setRayons] = useState(null)
    const dispatch = useDispatch();
    // console.log('Hello world')
    const map = useMap();
    useEffect(() => {
        if (!prevBtn && rayons) {
            map.removeLayer(rayons);
            map.fitBounds(L.geoJson(states).getBounds());
        }
        if (!marker) {
            map.fitBounds(L.geoJson(states).getBounds());
        }
    }, [prevBtn])

    useEffect(() => {
        map.addEventListener('click', (e) => {
            console.log(e)
        })
    }, [])

    useEffect(() => {
        if (marker) {
            // window.scrollTo({ top: 1200, left: 0, behavior: "smooth" });
            // bottomMap.current.scrollIntoView({ block: "start", behavior: "smooth" });
            map.setView(marker, 17);
        }
    }, [marker]);

    const innerHandlers = useCallback((event, institution) => {
        let markerCoordinate = {
            lat: event.latlng.lat,
            lng: event.latlng.lng
        }
        dispatch(institutionInfoActions.setStatus('pending'));
        dispatch(institutionInfoActions.setMarker(markerCoordinate));
        dispatch(institutionInfoActions.setInstitution(institution));
    }, [])

    const paintAreas = (country) => {
        let s = 0;
        map.fitBounds(L.geoJson(country).getBounds())
        const link = L.geoJSON(country, {
            style: function (feature) {
                s++;
                return { color: color[4] }
            },
            // onEachFeature: onChangeRayons
        }).addTo(map);
        setRayons((prev) => {
            if (prev) {
                map.removeLayer(prev);
            }
            return link;
        })
    }

    const paintRegions = (country, boolffff) => {
        boolffff = true
        setPrevBtn(true)
        map.fitBounds(L.geoJson(country).getBounds())
        if (country.id === 'г.Бишкек') {
            let s = 0;
            const link = L.geoJSON(statesBishkek, {
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
                return link;
            })
        }
        if (country.id === 'г.Ош') {
            let s = 0;
            const link = L.geoJSON(statesBishkek, {
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
                return link;
            })
        }
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
                return link;
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
    }

    useEffect(() => {
        if (coordinate.type === 'areas' && !marker) {
            regions.forEach((elem, index) => {
                if (index > 0) {
                    elem.features.forEach((el) => {
                        if (el.id === coordinate.value && !marker) {
                            paintAreas(el)
                        }
                    })
                }
            })
        }
        if (coordinate.type === 'region' && !marker) {
            regions[0].features.forEach(elem => {
                if (elem.id === coordinate.value && !marker) {
                    let boolffff = false;
                    paintRegions(elem, boolffff)
                }
            })
        }
        if (coordinate.type === '' && !marker && rayons) {
            map.removeLayer(rayons);
            map.fitBounds(L.geoJson(states).getBounds());
        }
    }, [coordinate, marker])

    const onChangeRayons = (country, layer) => {
        layer.on({
            click: (event) => {
                paintAreas(country)
            },
        })
    }

    const onEachFeature = (country, layer) => {
        let boolffff = false;
        layer.on({
            click: (event) => {
                paintRegions(country, boolffff)
            }
            // console.log(district1)
        })
    }

    const createClusterCustomIconGreen = useCallback(function (cluster) {
        return L.divIcon({
            html: `<span>${cluster.getChildCount()}</span>`,
            className: 'marker-cluster-custom green',
            iconUrl: clusterIcon,
            iconSize: [25, 25]
        });
    }, [])
    const createClusterCustomIconYellow = useCallback(function (cluster) {
        return L.divIcon({
            html: `<span>${cluster.getChildCount()}</span>`,
            className: 'marker-cluster-custom yellow',
            iconUrl: clusterIcon,
            iconSize: [25, 25]
        });
    }, [])
    const createClusterCustomIconYellowWhite = useCallback(function (cluster) {
        return L.divIcon({
            html: `<span>${cluster.getChildCount()}</span>`,
            className: 'marker-cluster-custom yellowWhite',
            iconUrl: clusterIcon,
            iconSize: [25, 25]
        });
    }, [])
    const createClusterCustomIconRed = useCallback(function (cluster) {
        return L.divIcon({
            html: `<span>${cluster.getChildCount()}</span>`,
            className: 'marker-cluster-custom red',
            iconUrl: clusterIcon,
            iconSize: [25, 25]
        });
    }, [])
    const createClusterCustomIconGreenWhite = useCallback(function (cluster) {
        return L.divIcon({
            html: `<span>${cluster.getChildCount()}</span>`,
            className: 'marker-cluster-custom greenWhite',
            iconUrl: clusterIcon,
            iconSize: [25, 25]
        });
    }, [])
    const createClusterCustomIconGrey = useCallback(function (cluster) {
        return L.divIcon({
            html: `<span>${cluster.getChildCount()}</span>`,
            className: 'marker-cluster-custom grey',
            iconUrl: clusterIcon,
            iconSize: [25, 25]
        });
    }, [])

    useEffect(() => {
        dispatch(analizeSlicesActions.setOccupancyInstitutes({ institutions }))
    }, [institutions])


    const onClickGeoLocation = () => {
        map.setView([coords.latitude, coords.longitude], 17);
    }


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
            {/* <MarkerClusterGroup chunkedLoading> */}
            {
                coords && <IconButton>
                    <Marker autoPan={true} icon={getIconImHere()} position={[coords.latitude, coords.longitude]} className="markerClassCustom">
                        <Popup className="customPopup">Ваше местоположение</Popup>
                    </Marker>
                </IconButton>
            }
            {marker && !bottomMap && <Marker icon={getIcon(institution.institution_type_id, institution.capacity_percentage)} position={[institution.latitude, institution.longitude]} ></Marker>}
            {status === 'fulfilled' && bottomMap && <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIconGreen}>
                {
                    occupancyInstitutes[0]?.map((elem, index) => {
                        const markerIcon = getIcon(elem.institution_type_id, elem.capacity_percentage, index);
                        return <Marker eventHandlers={{ click: (e) => innerHandlers(e, elem) }} icon={markerIcon} key={elem.id} position={[elem.latitude, elem.longitude]} ></Marker>
                    })
                }
            </MarkerClusterGroup>}
            {
                status === 'fulfilled' && bottomMap && <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIconGreenWhite}>
                    {
                        occupancyInstitutes[1]?.map((elem, index) => {
                            const markerIcon = getIcon(elem.institution_type_id, elem.capacity_percentage, index);
                            return <Marker riseOnHover={true} eventHandlers={{ click: (e) => innerHandlers(e, elem) }} icon={markerIcon} key={elem.id} position={[elem.latitude, elem.longitude]} ></Marker>
                        })
                    }
                </MarkerClusterGroup>
            }
            {
                status === 'fulfilled' && bottomMap && <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIconYellow}>
                    {
                        occupancyInstitutes[2]?.map((elem, index) => {
                            const markerIcon = getIcon(elem.institution_type_id, elem.capacity_percentage, index);
                            return <Marker riseOnHover={true} eventHandlers={{ click: (e) => innerHandlers(e, elem) }} icon={markerIcon} key={elem.id} position={[elem.latitude, elem.longitude]} ></Marker>
                        })
                    }
                </MarkerClusterGroup>
            }
            {
                status === 'fulfilled' && bottomMap && <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIconYellowWhite}>
                    {
                        occupancyInstitutes[3]?.map((elem, index) => {
                            const markerIcon = getIcon(elem.institution_type_id, elem.capacity_percentage, index);
                            return <Marker riseOnHover={true} eventHandlers={{ click: (e) => innerHandlers(e, elem) }} icon={markerIcon} key={elem.id} position={[elem.latitude, elem.longitude]} ></Marker>
                        })
                    }
                </MarkerClusterGroup>
            }
            {
                status === 'fulfilled' && bottomMap && <MarkerClusterGroup iconCreateFunction={createClusterCustomIconRed}>
                    {
                        occupancyInstitutes[4]?.map((elem, index) => {
                            const markerIcon = getIcon(elem.institution_type_id, elem.capacity_percentage, index);
                            return <Marker riseOnHover={true} eventHandlers={{ click: (e) => innerHandlers(e, elem) }} icon={markerIcon} key={elem.id} position={[elem.latitude, elem.longitude]} ></Marker>
                        })
                    }
                </MarkerClusterGroup>
            }
            {
                status === 'fulfilled' && bottomMap && <MarkerClusterGroup iconCreateFunction={createClusterCustomIconGrey}>
                    {
                        occupancyInstitutes[5]?.map((elem, index) => {
                            const markerIcon = getIcon(elem.institution_type_id, elem.capacity_percentage, 5);
                            return <Marker riseOnHover={true} eventHandlers={{ click: (e) => innerHandlers(e, elem) }} icon={markerIcon} key={elem.id} position={[elem.latitude, elem.longitude]} ></Marker>
                        })
                    }
                </MarkerClusterGroup>
            }
            {/* </MarkerClusterGroup> */}
            <GeoLocation onSetCoords={onSetCoords} onClickGeoLocation={onClickGeoLocation} />
        </>
    )
}
const SetBoundsRectanglesMemoized = React.memo(SetBoundsRectangles);






export const MapLeaflet = ({ marker, bottomMap }) => {
    const { status } = useSelector(store => store.institutionsStore)
    const [prevBtn, setPrevBtn] = useState(false)
    const [coords, setCoords] = useState();
    const [zoom, setZoom] = useState(7.1)

    const animateRef = useRef(true)

    const onSetCoords = ({ coords }) => {
        setCoords(coords)
    }

    const onClickPrevBtn = () => {
        setPrevBtn(false)
    }

    return <>
        {
            prevBtn && !marker && <DivBtn>
                <Box sx={{ width: 'auto' }}>
                    <FilterSubmit variant="desctop" map onClick={onClickPrevBtn}>Назад</FilterSubmit>
                </Box>
            </DivBtn>
        }
        {
            !marker && <PrevBtn />
        }
        <Paper sx={{ width: "100%", height: "100%" }} elevation={6}>
            <MapBlock>
                <Map center={position} zoom={zoom} placeholder={<MapPlaceholder />} scrollWheelZoom={true}>
                    <LayerGroup>
                        {/* <TileLayer
                            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                            // maxZoom="20"
                            attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
                        /> */}
                        <TileLayer
                            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=99425f3c-24bb-4e1e-94fc-c257d13c34a5"
                            maxZoom="20"
                            attribution="&copy; <a href=&quot;https://stadiamaps.com/&quot;>Stadia Maps</a>, &copy; <a href=&quot;https://openmaptiles.org/&quot;>OpenMapTiles</a> &copy; <a href=&quot;http://openstreetmap.org&quot;>OpenStreetMap</a> contributors"
                        />
                        {/* <TileLayer
                            url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
                            maxZoom="20"
                            subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
                            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        /> */}
                        {/* <WMSTileLayer
                            url="https://geoserver.24mycrm.com/monmap/wms?&tiled=true"
                            version='1.0.0'
                            opacity={0.3}
                            transparent={true}
                            srs="EPSG:4326"
                            layers="monmap:t2monmap"
                            gridSet="999"
                            format="image/png"
                        /> */}
                        {
                            !bottomMap && <TileLayer
                                url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
                                maxZoom="20"
                                subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
                                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                            />
                        }
                    </LayerGroup>
                    {
                        bottomMap && <LayersControl>
                            <LayersControl.BaseLayer checked name="Школы">
                                <LayerGroup>
                                    <WMSTileLayer
                                        url="https://geoserver.24mycrm.com/monmap/wms?&tiled=true"
                                        version='1.1.0'
                                        opacity={0.3}
                                        transparent={true}
                                        srs="EPSG:4326"
                                        layers="monmap:monmap-3"
                                        gridSet="999"
                                        format="image/png"
                                    />
                                </LayerGroup>
                            </LayersControl.BaseLayer>
                            <LayersControl.BaseLayer name="Садики">
                                <LayerGroup>
                                    <WMSTileLayer
                                        url="https://geoserver.24mycrm.com/monmap/wms?&tiled=true"
                                        version='1.1.0'
                                        opacity={0.3}
                                        transparent={true}
                                        srs="EPSG:4326"
                                        layers="monmap:monmap-2"
                                        gridSet="999"
                                        format="image/png"
                                    />
                                </LayerGroup>
                            </LayersControl.BaseLayer>
                        </LayersControl>
                    }
                    {/* {
                        !marker && <LayersControl position="bottomright">
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
                            <LayersControl.Overlay name="тепловая карта">
                                <LayerGroup>
                                    <WMSTileLayer
                                        url="https://geoserver.24mycrm.com/monmap/wms?&tiled=true"
                                        version='1.0.0'
                                        opacity={0.3}
                                        transparent={true}
                                        srs="EPSG:4326"
                                        layers="monmap:t2monmap"
                                        gridSet="999"
                                        format="image/png"
                                    />
                                </LayerGroup>
                            </LayersControl.Overlay>
                        </LayersControl>
                    } */}
                    {/* <SetViewOnClick animateRef={animateRef} /> */}
                    <MyComponent />
                    <SetBoundsRectanglesMemoized onSetCoords={onSetCoords} marker={marker} coords={coords} setPrevBtn={setPrevBtn} prevBtn={prevBtn} bottomMap={bottomMap} />
                    {
                        bottomMap && <InfoBlock />
                    }
                    {
                        status === 'pending' && <Preloader>
                            {/* <span className="map_loader"></span> */}
                            <span className="map2_loader"></span>
                        </Preloader>
                    }
                    {/* <InfoBlockRight /> */}
                </Map >
            </MapBlock >
        </Paper>
    </>
}

export const MemoizedMapLeaflet = React.memo(MapLeaflet);

const Preloader = styled('div')`
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
`


const MapBlock = styled('div')`
    position: relative;
    width: 100%;
    height: 100%;
`

const Map = styled(MapContainer)`
    & .leaflet-touch .leaflet-control-layers, .leaflet-touch .leaflet-bar{
        border: none;
    }
`
const DivBtn = styled('div')`
    /* border: 1px solid red; */
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: -12px;
    right: 0;
    @media (max-width: 992px){
        top: 16px;
    }
    @media (max-width: 768px){
        top: 12px;
    }
`




































