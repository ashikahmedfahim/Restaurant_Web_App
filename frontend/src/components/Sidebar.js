import 'react-bootstrap-drawer/lib/style.css';
import React, {useState} from 'react';
import {Col, Collapse, Container, Row} from 'react-bootstrap';
import {Drawer} from 'react-bootstrap-drawer';
import '../assets/css/Sidebar.css';
const Sidebar = ({props, appliedbtn}) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);

 
  return (
    <Drawer {...props} style={{backgroundColor: 'white'}}>
      <Drawer.Toggle onClick={handleToggle} className="mr-auto" />

      <Collapse in={open}>
        <Drawer.Overflow style={{backgroundColor: 'white'}}>
          {/* <Drawer.ToC> */}
            {/* <Drawer.Header>Admin Panel</Drawer.Header> */}

            <Drawer.Nav>
              <Drawer.Item className="sidebar-links-bg">
                <p
                  onClick={() => {
                    appliedbtn('home');
                    handleToggle();
                  }}
                  className="mb-0 sidebar-links"
                >
                  Home
                </p>
              </Drawer.Item>
              <Drawer.Item>
                <p
                  onClick={() => {
                    appliedbtn('addType');
                    handleToggle();
                  }}
                  className="mb-0 sidebar-links"
                >
                  Add Type
                </p>
              </Drawer.Item>
              <Drawer.Item>
                <p
                  onClick={() => {
                    appliedbtn('addCategory');
                    handleToggle();
                  }}
                  className="mb-0 sidebar-links"
                >
                  Add Category
                </p>
              </Drawer.Item>
              <Drawer.Item>
                <p
                  onClick={() => {
                    appliedbtn('addFood');
                    handleToggle();
                  }}
                  className="mb-0 sidebar-links"
                >
                  Add Food
                </p>
              </Drawer.Item>
              <Drawer.Item>
                <p
                  onClick={() => {
                    appliedbtn('allFood');
                    handleToggle();
                  }}
                  className="mb-0 sidebar-links"
                >
                  All Food
                </p>
              </Drawer.Item>
              <Drawer.Item>
                <p
                  onClick={() => {
                    appliedbtn('orders');
                    handleToggle();
                  }}
                  className="mb-0 sidebar-links"
                >
                  Orders
                </p>
              </Drawer.Item>
              <Drawer.Item>
                <p
                  onClick={() => {
                    appliedbtn('Users');
                    handleToggle();
                  }}
                  className="mb-0 sidebar-links"
                >
                  Users
                </p>
              </Drawer.Item>
            </Drawer.Nav>
          {/* </Drawer.ToC> */}
        </Drawer.Overflow>
      </Collapse>
    </Drawer>
  );
};
const Application = (props) => {
  return (
    <Container fluid>
      <Row className="flex-xl-nowrap">
        <Col as={Sidebar} xs={4} md={3} lg={2} />
        <Col xs={4} md={4} lg={4}>
          {props.children}
        </Col>
      </Row>
    </Container>
  );
};
export default Sidebar;
