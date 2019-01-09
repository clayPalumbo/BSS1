import React from 'react'
import { Col, Row, Container } from 'reactstrap';
import { className } from 'postcss-selector-parser';
import hur from './../../img/Hurricanes.png';
import nj from './../../img/nj.png';


const HScoreHeader = () => (

  <Row>
    <Col sm="3">
      <h2 className="pt-2 mb-0 text-right">Carolina Hurricanes</h2><div className="record text-right pt-0">Away (15-17-5)<span className="text-danger font-weight-bold"> (-1.5)</span></div>
    </Col>
    <Col sm="1">
      <img className="img3 pt-3" src={hur} alt={`Hurricanes Profile Pic`} />
    </Col>
    <Col sm="1">
      <h1 className="text-center score">0</h1>
    </Col>
    <Col sm="1">
      <h3 className="pt-2 mb-0 pb-0 text-center timeResult">1st Period</h3><div className="record text-center pt-0"></div><div className="record text-center pt-0 text-success">TOT: 2</div>
    </Col>
    <Col sm="1">
      <h1 className="text-center score">2</h1>
    </Col>
    <Col sm="1">
      <img className="img4 pt-3" src={nj} alt="ny" />
    </Col>
    <Col sm="3">
      <h2 className="pt-2 mb-0 text-left">New Jersey Devils</h2><div className="record text-left pt-0">Home (14-16-7)<span className="text-success font-weight-bold"> (+1.5)</span></div>
    </Col>
  </Row>
)

export default HScoreHeader