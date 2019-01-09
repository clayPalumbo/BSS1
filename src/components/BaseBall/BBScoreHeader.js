import React from 'react'
import { Col, Row, Container } from 'reactstrap';
import { className } from 'postcss-selector-parser';
import sox from './../../img/Sox.png';
import blue from './../../img/bluejays.png';


const BBScoreHeader = () => (

  <Row>
    <Col sm="3">
      <h2 className="pt-2 mb-0 text-right">Boston Red Socks</h2><div className="record text-right pt-0">Away (68-30)<span className="text-danger font-weight-bold"> (-1.5)</span></div>
    </Col>
    <Col sm="1">
      <img className="img3 pt-3" src={sox} alt={`Sox Profile Pic`} />
    </Col>
    <Col sm="1">
      <h1 className="text-center score">5</h1>
    </Col>
    <Col sm="1">
      <h3 className="pt-2 mb-0 pb-0 text-center timeResult">Top 12th</h3><div className="record text-center pt-0"></div><div className="record text-center pt-0 text-success">TOT: 7</div>
    </Col>
    <Col sm="1">
      <h1 className="text-center score">2</h1>
    </Col>
    <Col sm="1">
      <img className="img4 pt-3" src={blue} alt="sox" />
    </Col>
    <Col sm="3">
      <h2 className="pt-2 mb-0 text-left">Toronto Blue Jays</h2><div className="record text-left pt-0">Home (43-52)<span className="text-success font-weight-bold"> (+1.5)</span></div>
    </Col>
  </Row>
)

export default BBScoreHeader