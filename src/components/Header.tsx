import React from 'react';
import tesla_wallpaper from '../images/nikola_wallpaper.jpg';
import {
  Row,
  Col,
  Jumbotron,
  Button,
  Card,
  CardTitle,
  CardBody
} from 'reactstrap';

const Header = () => {
  return (
    <Row className='mt-3'>
      <Col xs='12'>
        <Card className='header-container'>
          <CardTitle className='px-3 text-center'>
            <h1 className='display-4' id='title'>
              Nikola Tesla
            </h1>
            <hr className='my-2' />
            <h4 className='font-weight-lighter'>The Father of Electricity</h4>
          </CardTitle>
          <CardBody id='img-div'>
            <img src={tesla_wallpaper} id='image' />
            <p id='img-caption' className='lead mt-3 text-justify'>
              A multiple exposure picture of Tesla sitting next to his
              "magnifying transmitter" generating millions of volts. The 7-metre
              (23 ft) long arcs were not part of the normal operation, but only
              produced for effect by rapidly cycling the power switch.
            </p>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Header;
