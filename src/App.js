import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Col, Row, Container } from "reactstrap";
import ScoreHeader from './components/ScoreHeader';
import Header from './components/Header';
import BoxScore from './components/BoxScore';
import AdOne from './components/AdOne';
import Footer from './components/Footer';



class App extends Component {
  render() {
    return (
<Container fluid>
  <Row>
      <Header />
  </Row>
  <Row>
    <Col lg="12" className="centerss">
     <ScoreHeader />
    </Col>
  </Row>
  <Row>
    <Col md="6" className="centerss mt-5">
     <AdOne />
    </Col>
  </Row>
  <Row>
    <Col sm="4" className="centerss mb-5 mt-5 border1 pb-3">
     <BoxScore />
    </Col>
  </Row>
  <Row>
      <Footer />
  </Row>


</Container>
    );
  }
}

export default App;
