import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import Marker from './PodcastMarker'
import "./Map.css";

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

  return (
    <LeafletMap
      center={[35, -20]}
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
          <div key={key}>
            <Marker title={audio.title} address={audio.address} src={audio.src} img={audio.img} lat={audio.lat} long={audio.long} />
          </div>
        );
      })}
    </LeafletMap >
  );
};

export default Map;
