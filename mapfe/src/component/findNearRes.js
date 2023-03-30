
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'


export default function NearRes({ myData, myResData }) {

    return (
        <MapContainer center={[47.91920771813385, 106.91770129766084]} zoom={6} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {myData?.map((e) => {
                console.log(e?.location?.coordinates)

                const lat = e?.location?.coordinates[0];
                const long = e?.location?.coordinates[1];

                return (
                    <Marker position={[lat, long]}>
                        <Popup>{e?.userName}</Popup>
                    </Marker>
                )
            })}
            {myResData.map((e) => {
                console.log(e)
                return (
                    <Marker position={[e.location.coordinates[1], e.location.coordinates[0]]}>
                        <Popup>{e.restaurantName}</Popup>
                    </Marker>
                )
            })}
        </MapContainer >
    )
}