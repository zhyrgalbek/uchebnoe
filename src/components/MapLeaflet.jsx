import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import styled from 'styled-components'
const position = [51.505, -0.09]
export const MapLeaflet = () => {
    return <MapContainer center={position} zoom={13}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
    </MapContainer>
}
