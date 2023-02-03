import { LayerGroup, LayersControl, MapContainer, Marker, Polygon, Popup, TileLayer, Tooltip, useMapEvent, useMapEvents, WMSTileLayer } from 'react-leaflet'
import states from '../utils/Constants/json/states2.json'
import statesJson from '../utils/Constants/json/statesJson.json'
import styled from 'styled-components'
import { useRef } from 'react'
const kyrgyzstan = getCoordinates('Кыргызстан', states).reverse()
const position = kyrgyzstan;

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
    const map = useMapEvents({
        click: () => {
            map.locate()
        },
        locationfound: (location) => {
            console.log('location found:', location)
        },
    })
    return null
}

const marker = [42.857254, 74.600725];

export const MapLeaflet = () => {
    const animateRef = useRef(true)
    console.log(statesJson)
    return <>
        <Map center={position} zoom={7} placeholder={<MapPlaceholder />} scrollWheelZoom={false}>
            <MyComponent />
            <Marker position={marker}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            <Tooltip>Hello world</Tooltip>
            <LayerGroup>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
            </LayerGroup>
            <LayersControl>
                <LayersControl.Overlay name="google">
                    <TileLayer
                        url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                        maxZoom="20"
                        subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                </LayersControl.Overlay>
                <LayersControl.Overlay name="WMS">
                    <LayerGroup>
                        <WMSTileLayer
                            layers='TOPO-OSM-WMS'
                            url="http://ows.mundialis.de/services/service?"
                        />
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Places">
                    <LayerGroup>
                        <WMSTileLayer
                            layers='OSM-Overlay-WMS'
                            url="http://ows.mundialis.de/services/service?"
                        />
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Topography, then places">
                    <LayerGroup>
                        <WMSTileLayer
                            layers='TOPO-WMS,OSM-Overlay-WMS'
                            url="http://ows.mundialis.de/services/service?"
                        />
                    </LayerGroup>
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Places, then topography">
                    <LayerGroup>
                        <WMSTileLayer
                            layers='OSM-Overlay-WMS,TOPO-WMS'
                            url="http://ows.mundialis.de/services/service?"
                        />
                    </LayerGroup>
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
            {
                statesJson.map(elem => {
                    return <Polygon key={elem.name} pathOptions={{ color: elem.color, fillColor: 'transparent' }} positions={elem.latlngs} />
                })
            }
            <SetViewOnClick animateRef={animateRef} />
        </Map >
    </>
}

const Map = styled(MapContainer)`
    /* border: 1px solid red; */
    & .leaflet-touch .leaflet-control-layers, .leaflet-touch .leaflet-bar{
        border: none;
    }
`





































