import React, { useState } from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import play from '../../assets/headPhone2.png';
import ModalAudio from '../ModalAudio';
import './DisplayPodcast.css';

interface Props {
  image: string;
  title: string;
  src: string;
  resume: string;
  date: string;
};

const DisplayPodcast: React.FC<Props> = ({ image, title, resume, src, date }: Props) => {
  const [show, setShow] = useState(false);
  const handleClose = (): void => setShow(false);
  const handleShow = (): void => setShow(true);
  return (
    <Container fluid >
      <Card className='displayPodcast'>
        <Card.Img variant='top' src={image} style={{ height: '35vh' }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text >{resume}</Card.Text>
          <Button variant='outline-info' onClick={(): void => handleShow()}>
            <img src={play} alt='play' className='play' style={{ width: '3rem' }} />
            <p >{date}</p>
          </Button>
        </Card.Body>
      </Card>
      <ModalAudio
        image={image}
        title={title} src={src} handleClose={handleClose} show={show} />
    </Container>
  );
};
export default DisplayPodcast;
