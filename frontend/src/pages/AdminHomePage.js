import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import AddType from '../components/Admin/AddType';
import AddCategory from '../components/Admin/AddCategory';
import AddFood from '../components/Admin/AddFood';
import AllFood from '../components/Admin/AllFood';
import Orders from '../components/Admin/Orders';
import Users from '../components/Admin/Users';
import HomePanel from '../components/Admin/HomePanel';
import '../assets/css/AdminHomePage.css';
const AdminHomePage = () => {
  const [selectedbtn, setSelectedbtn] = useState('');
  const appliedbtn = (value) => {
    setSelectedbtn(value);
  };
  return (
    <Container
      fluid
      className="py-0 px-0"
      style={{backgroundColor: 'white'}}
    >
      <Row className="g-0">
        <Col sm={2} md={3} lg={2} xl={2}>
          <Sidebar appliedbtn={appliedbtn} />
        </Col>

        {selectedbtn === 'addType' ? (
          <Col
            sm={12}
            md={9}
            lg={10}
            xl={10}
            style={{backgroundColor: 'white'}}
            className="d-flex justify-content-center align-items-start py-5"
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
            className="d-flex justify-content-center align-items-start py-5"
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
            className="d-flex justify-content-center align-items-start py-5"
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
            className="d-flex justify-content-center align-items-start py-5"
          >
            <AllFood />
          </Col>
        ) : selectedbtn === 'orders' ? (
          <Col
            sm={12}
            md={9}
            lg={10}
            xl={10}
            style={{backgroundColor: 'white'}}
            className="py-5 admin-home-page"
          >
            <Orders />
          </Col>
        ) : selectedbtn === 'Users' ? (
          <Col
            sm={12}
            md={9}
            lg={10}
            xl={10}
            style={{backgroundColor: 'white'}}
            className="d-flex admin-home-page justify-content-center align-items-start py-5"
          >
            <Users />
          </Col>
        ) : (
          <Col
            sm={12}
            md={9}
            lg={10}
            xl={10}
            className="d-flex admin-home-page justify-content-start px-2 py-5"
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
