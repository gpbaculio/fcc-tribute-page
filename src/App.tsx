import React from 'react';
import { Col, Container } from 'reactstrap';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div id='main'>
      <Container>
        <Header />
        <Body />
        <Footer />
      </Container>
    </div>
  );
};

export default App;
