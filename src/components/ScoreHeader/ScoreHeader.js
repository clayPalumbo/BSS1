import React, { Component } from 'react';
import header from './../../img/header.png';
import '../../App.css';
import { Col, Row, Container } from 'reactstrap';


class ScoreHeader extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <div className="scoreHeader ">
                        <Col md="3">
                        Hey
                        </Col>
                        <Col md="3" >
                        Hey
                        </Col>
                        

                    </div>
                </Row>
            </Container>

        );
    }
}

export default ScoreHeader;
