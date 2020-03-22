import React, { useState } from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import './DisplayPodcast.css';
import play from '../../assets/play.png';
import ModalAudio from '../../components/ModalAudio';

const DisplayPodcast = ({ image, title, src, resume }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid >
      <Card style={{ width: '18rem' }} className='DisplayPodcast'>
        <Card.Img variant='top' src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{resume}</Card.Text>
          <Button variant='outline-info' onClick={handleShow}>
            <img src={play} alt='play' className='play' />
          </Button>
        </Card.Body>
      </Card>
    <ModalAudio image={image}title={title} src={src} handleClose={handleClose} show={show} />
    </Container>
  );
};
export default DisplayPodcast;
