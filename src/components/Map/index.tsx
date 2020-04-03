import React, { useState } from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import { Button } from "react-bootstrap";
import "./Map.css";
import ModalAudio from "../ModalAudio";

interface Props {
  audioFiles: AudioFile[];
}
interface AudioFile {
  title: string;
  address: string;
  src: string;
  img: string;

  lat: number;
  long: number;
}
const Map: React.FC<Props> = ({ audioFiles }: Props) => {
  const [show, setShow] = useState(false);
  const handleClose = (): void => setShow(false);
  const handleShow = (): void => setShow(true);
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
      {audioFiles.map((audio, key) => {
        return (
          <Marker position={[audio.lat, audio.long]} key={key}>
            <Popup>
              <Button variant="outline-info" onClick={handleShow}>
                {audio.title}
                <br />
                {audio.address}
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
    </LeafletMap >
  );
};

export default Map;
