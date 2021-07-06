import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import AddType from '../components/Admin/AddType';
import AddCategory from '../components/Admin/AddCategory';
import AddFood from '../components/Admin/AddFood';
import AllFood from '../components/Admin/AllFood';
import HomePanel from '../components/Admin/HomePanel';
const AdminHomePage = () => {
  const [selectedbtn, setSelectedbtn] = useState('');
  const appliedbtn = (value) => {
    setSelectedbtn(value);
  };
  return (
    <Container fluid className="py-5">
      <Row className="g-0">
        <Col sm={2} md={2} lg={2} xl={2}>
          <Sidebar appliedbtn={appliedbtn} />
        </Col>

        {selectedbtn === 'addType' ? (
          <Col
            sm={12}
            md={9}
            lg={10}
            xl={10}
            style={{backgroundColor: 'white'}}
            className="d-flex justify-content-center align-items-center"
          >
            <AddType />
          </Col>
        ) : selectedbtn === 'addCategory' ? (
          <Col
            sm={12}
            md={9}
            lg={10}
            xl={10}
            style={{backgroundColor: 'white'}}
            className="d-flex justify-content-center align-items-center"
          >
            <AddCategory />
          </Col>
        ) : selectedbtn === 'addFood' ? (
          <Col
            sm={12}
            md={9}
            lg={10}
            xl={10}
            style={{backgroundColor: 'white'}}
            className="d-flex justify-content-center align-items-center"
          >
            <AddFood />
          </Col>
        ) : selectedbtn === 'allFood' ? (
          <Col
            sm={12}
            md={9}
            lg={10}
            xl={10}
            style={{backgroundColor: 'white'}}
            className="d-flex justify-content-center align-items-center my-5"
          >
            <AllFood />
          </Col>
        ) : selectedbtn === 'orders' ? (
          <p>orders</p>
        ) : selectedbtn === 'Users' ? (
          <p>Users</p>
        ) : selectedbtn === 'Users' ? (
          <Col
            sm={12}
            md={9}
            lg={10}
            xl={10}
            className="d-flex justify-content-start px-2"
            style={{backgroundColor: 'white'}}
          >
            <HomePanel />
          </Col>
        ) : (
          <Col
            sm={12}
            md={9}
            lg={10}
            xl={10}
            className="d-flex justify-content-start px-2"
            style={{backgroundColor: 'white'}}
          >
            <HomePanel />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default AdminHomePage;
