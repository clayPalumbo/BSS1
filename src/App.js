import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Col, Row, Container } from 'reactstrap';
import ScoreHeader from './components/ScoreHeader';
import Header from './components/Header';
import BoxScoreLeft from './components/BoxScoreLeft';
import BoxScoreRight from './components/BoxScoreRight';
import AdOne from './components/Ads';
import AdTwo from './components/Ads/AdTwo';
import AdThree from './components/Ads/AdThree';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return <Container fluid>
        <Row>
          <Header />
        </Row>
        <Row className="borderTop">
          <Col md='12' className='centerss'>
            <ScoreHeader />
          </Col>
        </Row>
        <Row>
          <Col md='6' className='centerss mt-4'>
            <AdOne />
          </Col>
        </Row>

        <Row>
          <Col sm='1'>
          </Col>
          <Col lg='4' className='centerss pr-0 pb-4 mr-0 mb-5 mt-4 border1'>
            <BoxScoreLeft />
          </Col>
          <Col lg='4' className='centerss pl-0 ml-0 mb-5 mt-4 border2 borderLeft'>
            <BoxScoreRight />
          </Col>
          <Col sm='3'>
            <AdTwo />
            <AdThree />
          </Col>
        </Row>
        <Row />
        <Row>
          <Footer />
        </Row>
      </Container>;
  }
}

export default App;
