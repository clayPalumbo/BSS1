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
      <ScoreHeader />
  </Row>
  <Row>
    <Col md="6" className="centerss">
     <AdOne />
    </Col>
  </Row>
  <Row>
    <Col lg="6" className="centerss">
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
