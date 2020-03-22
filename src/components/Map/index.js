import React, { useState } from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import { Button } from "react-bootstrap";
import "./Map.css";
import ModalAudio from "../ModalAudio";

const Map = ({ audioFiles }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <LeafletMap
      center={[50, 10]}
      zoom={3}
      maxZoom={10}
      attributionControl={true}
      zoomControl={false}
      doubleClickZoom={true}
      scrollWheelZoom={true}
      dragging={true}
      animate={true}
    >
      <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
      {audioFiles.map(audio => {
        return (
          <Marker position={[audio.lat, audio.long]}>
            <Popup>
              <Button variant="outline-info" onClick={handleShow}>
              {audio.title}
              </Button>
            </Popup>

            <ModalAudio
              image={audio.img}
              title={audio.title}
              src={audio.src}
              handleClose={handleClose}
              show={show}
            />
          </Marker>
        );
      })}
    </LeafletMap>
  );
};

export default Map;
