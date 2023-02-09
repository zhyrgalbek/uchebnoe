import { LayerGroup, LayersControl, MapContainer, Marker, Polygon, Popup, TileLayer, Tooltip, useMapEvent, useMapEvents, WMSTileLayer, GeoJSON } from 'react-leaflet'
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
import { useEffect, useRef } from 'react'
import { Paper } from '@mui/material'
import { Stack } from '@mui/system'
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


const color = ['#FDCA7B', '#AFD791', '#FCF58D', '#6CC49A', '#58C6C7', '#FBF48C', '#FAC97C', '#51C2C0', '#51C2C0', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)']

const marker = [42.857254, 74.600725];

export const MapLeaflet = () => {
    const animateRef = useRef(true)
    const onEachFeature = (country, layer) => {
        layer.on({
            click: (event) => {
                console.log(country.id)
                console.log(statesNarin)
            },
            mouseover: (event) => {
                event.target.setStyle({
                    fillColor: 'red'
                })
            },
            mouseout: (event) => {
                event.target.setStyle({
                    fillColor: 'transparent'
                })
            }
        })
    }
    const onMouseEvent = (event, type) => {
        switch (type) {
            case 'over':
                // Set the style of the Leaflet DOM element:
                event.target.setStyle({ fillColor: 'red' })
                break
            case 'out':
                event.target.setStyle({ fillColor: 'transparent' })
                break
            default:
                break
        }
    }
    const rayonStyle = {
        fillColor: 'transparent',
        color: 'transparent',
    }
    return <MapBlock>
        <Map center={position} zoom={7} placeholder={<MapPlaceholder />} scrollWheelZoom={false}>
            <MyComponent />
            {
                states.features.map(((elem, index) => {
                    const countryStyle = {
                        fillColor: 'transparent',
                        color: 'black'
                    }
                    if (color[index]) {
                        countryStyle.color = color[index]
                    }
                    return <GeoJSON key={elem.id} data={elem} pathOptions={countryStyle} eventHandlers={{
                        mouseover: (event, type) => onMouseEvent(event, 'over'),
                        mouseout: (event, type) => onMouseEvent(event, 'out'),
                    }}>
                    </GeoJSON>
                }))
            }
            {/* <GeoJSON data={statesBatken} pathOptions={rayonStyle} />
            <GeoJSON data={statesChuy} pathOptions={rayonStyle} />
            <GeoJSON data={statesDjalal} pathOptions={rayonStyle} />
            <GeoJSON data={statesKol} pathOptions={rayonStyle} />
            <GeoJSON data={statesNarin} pathOptions={rayonStyle} />
            <GeoJSON data={statesOsh} pathOptions={rayonStyle} />
            <GeoJSON data={statesTalas} pathOptions={rayonStyle} /> */}
            <Marker position={marker}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
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
        <InfoBlock>
            <Paper>
                <InfoColor>
                    <Item><SpanColor><Color color="#FF0600" /></SpanColor>100</Item>
                    <Item><SpanColor><Color color="#FFCD02" /></SpanColor>80</Item>
                    <Item><SpanColor><Color color="#FFF800" /></SpanColor>60</Item>
                    <Item><SpanColor><Color color="#A9FF00" /></SpanColor>40</Item>
                    <Item><SpanColor><Color color="#51FF00" /></SpanColor>20</Item>
                </InfoColor>
            </Paper>
        </InfoBlock>
        <InfoBlock right>
            <Paper>
                <InfoColor>
                    <Item right><SpanColor radius><Color color="#FF0600" radius /></SpanColor>20%</Item>
                    <Item right><SpanColor radius><Color color="#FFCD02" radius /></SpanColor>40%</Item>
                    <Item right><SpanColor radius><Color color="#FFF800" radius /></SpanColor>60%</Item>
                    <Item right><SpanColor radius><Color color="#A9FF00" radius /></SpanColor>80%</Item>
                    <Item right><SpanColor radius><Color color="#51FF00" radius /></SpanColor>100%</Item>
                </InfoColor>
            </Paper>
        </InfoBlock>
        <MapSnackbar>
            <Paper sx={{ padding: '10px' }}>
                <Stack direction="row" alignItems="center">
                    <Img src={point} alt="#" />
                    <Text>
                        Цвета иконок меняются в зависимости от заполненности
                    </Text>
                    <Img src={krestik} alt="#" krestik />
                </Stack>
            </Paper>
        </MapSnackbar>
    </MapBlock>
}

const Text = styled('p')`
    margin: 0;
    padding: 0;
    font-size: 12px;
`
const Img = styled('img')`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    ${props => props.krestik && css`
        margin: 0;
    `}
`
const MapSnackbar = styled('div')`
    position: absolute;
    top: 20px;
    right: 10px;
    background: #fff;
    border-radius: 6px;
    z-index: 1000;
    font-size: 12px;
    width: 320px;
`

const Color = styled('span')`
    display: inline-block;
    background-color: ${props => props.color};
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    ${props => props.radius && css`
        border-radius: 50%;
    `}
`

const SpanColor = styled('div')`
    display: inline-block;
    margin-right: 10px;
    width: 20px;
    height: 20px;
    overflow: hidden;
    ${props => props.radius && css`
        padding: 4px;
        margin-right: 4px;
    `}
`

const Item = styled('li')`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    font-size: 12px;
    ${props => props.right && css`
        margin-bottom: 8px;
     `}
    /* margin-top: -1px; */
    /* margin-bottom: -4px; */
`

const InfoBlock = styled('div')`
    position: absolute;
    bottom: 20px;
    left: 20px;
    /* border: 1px solid red; */
    z-index: 1000;
    ${props => props.right && css`
        bottom: auto;
        left: auto;
        right: 10px;
        top: 100px;
    `}
    @media screen and (max-width: 780px){
        bottom: 10px;
        left: 10px;
        ${props => props.right && css`
            bottom: auto;
            left: auto;
            right: 10px;
            top: 80px;
        `}
    }
`

const InfoColor = styled('ul')`
    background-color: #fff;
    border-radius: 16px;
    padding: 11px;
    list-style: none;
`

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





































