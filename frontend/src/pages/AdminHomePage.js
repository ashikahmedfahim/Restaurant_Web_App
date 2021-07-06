import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
const AdminHomePage = () => {
    const [selectedbtn,setSelectedbtn] = useState('');
    const appliedbtn = (value) =>{
        setSelectedbtn(value)
    }
  return (
    <Container fluid className="px-0">
      <Row className="g-0">
        <Col sm={2} md={2} lg={2} xl={2}>
          <Sidebar appliedbtn={appliedbtn}/>
        </Col>

        <Col sm={12} md={9} lg={9} xl={10} style={{backgroundColor: 'red'}}>
         {selectedbtn === 'addType'?
          <p>nxsjnsjnxsjnx</p>
         :
         <p>sff</p>
         }
        </Col>
      </Row>
    </Container>
  );
};

export default AdminHomePage;
