import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";
import L from "leaflet";

export default function Map() {
  const suitcasePoint = new L.Icon({
    iconUrl: "location_on.svg",
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
    iconSize: [40, 40],
    shadowSize: [29, 40],
    shadowAnchor: [7, 40],
  });
  const [position, setPosition] = useState([-29.312633, -49.773583]);

  return (
    <MapContainer
      center={{ lat: -29.312633, lng: -49.773583 }}
      zoom={15}
      scrollWheelZoom={true}
      style={{ height: "70vh", width: "80vw" }}
      className="mx-auto"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        eventHandlers={{
          click: (e) => {
            setPosition([e.latlng.lat, e.latlng.lng]);
            //console.log("marker clicked", e);
          },
        }}
        icon={suitcasePoint}
        position={position}
        draggable={true}
        animate={true}
      >
        <Popup>Possição selecionda {position}</Popup>
      </Marker>
    </MapContainer>
  );
}