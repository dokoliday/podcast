import React from "react";
import Player from "../../components/Player";
import { Card, Modal, Button } from "react-bootstrap";

const ModalAudio = ({ image, title, src, handleClose,show }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Card.Img variant="top" src={image} />
      </Modal.Header>
      <Modal.Title className="modalTitle">{title}</Modal.Title>
      <Player src={src} />
      <Modal.Footer>
        <Button variant="info" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalAudio;
