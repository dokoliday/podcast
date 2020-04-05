import React, { useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { Button } from "react-bootstrap";
import ModalAudio from "../ModalAudio";

import "./Map.css";

interface Props {
  title: string;
  address: string;
  src: string;
  img: string;
  lat: number;
  long: number;
}
const PodcastMarker: React.FC<Props> = ({ title, address, src, img, lat, long }: Props) => {
  const [show, setShow] = useState(false);
  const handleClose = (): void => setShow(false);
  const handleShow = (): void => setShow(true);
  return (
    <Marker position={[lat, long]}>
      <Popup>
        <Button variant="outline-info" onClick={handleShow}>
          {title}
          <br />
          {address}
        </Button>
      </Popup>
      <ModalAudio image={img}
        title={title}
        src={src}
        handleClose={handleClose}
        show={show}
      />
    </Marker>
  );
};

export default PodcastMarker;
