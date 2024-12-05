import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
export default function Map() {
  return (
    <MapContainer center={[6.3703, 2.3912]} zoom={13} scrollWheelZoom={true} style={{ height: "700px", width: "100%" }}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[6.3703, 2.3912]}>
    <Popup>
      Bienvenue à Cotonou, Bénin !
    </Popup>
  </Marker>
</MapContainer>

  );
}