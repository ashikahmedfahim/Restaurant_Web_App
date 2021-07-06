import React from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Cards from './Cards';
const HomePanel = () => {
  return (
    <Row style={{height: '100px'}}>
      <Col sm={12} md={4} lg={4} xl={3}>
        <Cards name={'New Order'} count={'5'} price={'10'} bg={'success'} />
      </Col>
      <Col sm={12} md={4} lg={4} xl={3}>
        <Cards name={'Total Order'} count={'15'} price={'150'} bg={'info'} />
      </Col>
      <Col sm={12} md={4} lg={4} xl={3}>
        <Cards name={'Total Order'} count={'15'} price={'150'} bg={'info'} />
      </Col>
      <Col sm={12} md={4} lg={4} xl={3}>
        <Cards name={'Total Order'} count={'15'} price={'150'} bg={'info'} />
      </Col>
      <Col sm={12} md={4} lg={4} xl={3}>
        <Cards name={'Total Order'} count={'15'} price={'150'} bg={'info'} />
      </Col>
    </Row>
  );
};

export default HomePanel;
