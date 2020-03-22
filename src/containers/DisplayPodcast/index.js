import React, { useState } from 'react';
import Player from '../../components/Player';
import { Card, Container, Modal, Button } from 'react-bootstrap';
import './DisplayPodcast.css';
import play from '../../assets/play.png';

const DisplayPodcast = ({ image, title, src, resume }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className='DisplayPodcast'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{resume}</Card.Text>
          <Button variant='outline-info' onClick={handleShow}>
            <img src={play} alt='play' className='play' />
          </Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Card.Img variant='top' src={image} />
        </Modal.Header>
        <Modal.Title className='modalTitle'>{title}</Modal.Title>
        <Player src={src} />
        <Modal.Footer>
          <Button variant='info' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
export default DisplayPodcast;
