import React, { Fragment } from 'react';
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardImg,
  CardBody,
  CardText
} from 'reactstrap';

import img_alternating_currents from '../images/alternating_system.jpg';
import img_electric_motor from '../images/electric_motor.jpg';
import img_fluorescent_bulbs from '../images/fluorescent_bulbs.jpeg';
import img_x_ray from '../images/x_ray.jpg';
import img_radio from '../images/radio.jpg';
import img_remote_control from '../images/remote_control.jpg';
import img_tesla_coil from '../images/tesla_coil.jpg';
import img_wireless_communication from '../images/wireless_communication.jpg';

const Body = () => {
  const tesla_inventions = [
    {
      title: 'Alternating Currents',
      description: `An electric current that reverses its direction many times a second at regular intervals, typically used in power supplies. It caused a stir at the 1893 World's Expo in Chicago, ignting the war of currents.`,
      img_src: img_alternating_currents
    },
    {
      title: 'Flourescent Bulbs',
      description: `Of course he didn't invent light itself, but he did invent how light can be harnessed and distributed. Tesla developed and used fluorescent bulbs in his lab some 40 years before industry "invented" them.`,
      img_src: img_fluorescent_bulbs
    },
    {
      title: 'X-Ray',
      description: `Electromagnetic and ionizing radiation was heavily researched in the late 1800s, but Tesla researched the entire gamut. Everything from a precursor to Kirlian photography, which has the ability to document life force.`,
      img_src: img_x_ray
    },
    {
      title: 'Radio',
      description: `Guglielmo Marconi was initially credited, and most believe him to be the inventor of radio to this day. However, the Supreme Court overturned Marconi's patent in 1943, when it was proven that Tesla invented the radio years previous to Marconi.`,
      img_src: img_radio
    },
    {
      title: 'Remote Control',
      description: `This invention was a natural outcropping of radio. Patent No. 613809 was the first remote controlled model boat, demonstrated in 1898. Utilizing several large batteries and radio signals controlled switches.`,
      img_src: img_remote_control
    },
    {
      title: 'Electric Motor',
      description: `Tesla's invention of a motor with rotating magnetic fields could have freed mankind much sooner from the stranglehold of Big Oil. However, his invention in 1930 succumbed to the economic crisis and the world war that followed.`,
      img_src: img_electric_motor
    },
    {
      title: 'Tesla Coil',
      description: `The Tesla Coil is certainly something that big industry would have liked to suppress: the concept that the Earth itself is a magnet that can generate electricity (electromagnetism) utilizing frequencies as a transmitter.`,
      img_src: img_tesla_coil
    },
    {
      title: 'Wireless Communication',
      description: `Tesla built a tower that would use the natural frequencies of our universe to transmit data, including a wide range of information communicated through images, voice messages, and text.`,
      img_src: img_wireless_communication
    }
  ];
  return (
    <section id='tribute-info'>
      <Row>
        <Col xs='12' className='my-5 text-center'>
          <h1 className='font-weight-lighter'>Inventions</h1>
          <hr className='mt-2' />
        </Col>
      </Row>
      <Row>
        {tesla_inventions.map(tesla_invention => (
          <Col xs='6' lg='3' className='mb-4'>
            <Card>
              <CardImg
                top
                width='100%'
                src={tesla_invention.img_src}
                alt='Card image cap'
              />
              <CardBody>
                <CardTitle className='lead'>
                  <strong>{tesla_invention.title}</strong>
                  <hr className='my-2' />
                </CardTitle>
                <CardText>{tesla_invention.description}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Body;
