import React, { useState } from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import './DisplayPodcast.css';
import play from '../../assets/play.png';
import ModalAudio from '../../components/ModalAudio';

interface Props {
  image: string;
  title: string;
  src: string;
  resume: string;
};

const DisplayPodcast: React.FC<Props> = ({ image, title, resume, src }: Props) => {
  const [show, setShow] = useState(false);
  const handleClose = (): void => setShow(false);
  const handleShow = (): void => setShow(true);
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
      <ModalAudio image={image} title={title} src={src} handleClose={handleClose} show={show} />
    </Container>
  );
};
export default DisplayPodcast;
