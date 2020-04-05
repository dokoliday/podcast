import React from "react";
import Player from "../Player";
import { Card, Modal, Button } from "react-bootstrap";

interface Props {
  image: string;
  title: string;
  src: string;
  show: boolean;
  handleClose: () => void;
};
const ModalAudio: React.FC<Props> = ({ image, title, src, handleClose, show }: Props) => {
  return (
    <Modal show={show} onHide={(): void => handleClose()}>
      <Modal.Header closeButton>
        <Card.Img variant="top" src={image} />
      </Modal.Header>
      <Modal.Title className="modalTitle">{title}</Modal.Title>
      <Player src={src} />
      <Modal.Footer>
        <Button variant="info" onClick={(): void => handleClose()}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalAudio;
