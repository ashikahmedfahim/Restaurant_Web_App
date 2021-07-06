import 'react-bootstrap-drawer/lib/style.css';
import React, {useState} from 'react';
import {Col, Collapse, Container, Row} from 'react-bootstrap';
import {Drawer} from 'react-bootstrap-drawer';

const Sidebar = ({props,appliedbtn}) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);
  return (
    <Drawer {...props} style={{backgroundColor: 'red'}}>
      <Drawer.Toggle onClick={handleToggle} className="mr-auto" />

      <Collapse in={open}>
        <Drawer.Overflow>
          {/* <Drawer.ToC> */}
          {/* <Drawer.Header href="/">Application</Drawer.Header> */}

          <Drawer.Nav >
            <Drawer.Item onClick={()=>appliedbtn('addType')}>Add Type</Drawer.Item>
            <Drawer.Item href="/settings">Add Category</Drawer.Item>
            <Drawer.Item href="/settings">Add Food</Drawer.Item>
            <Drawer.Item href="/settings">All Food</Drawer.Item>
            <Drawer.Item href="/settings">Orders</Drawer.Item>
            <Drawer.Item href="/settings">Users</Drawer.Item>
            <Drawer.Item href="/settings">Settings</Drawer.Item>
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
