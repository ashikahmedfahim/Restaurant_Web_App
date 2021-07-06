import 'react-bootstrap-drawer/lib/style.css';
import React, {useState} from 'react';
import {Col, Collapse, Container, Row} from 'react-bootstrap';
import {Drawer} from 'react-bootstrap-drawer';

const Sidebar = ({props, appliedbtn}) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);

  const handleSelectedBtn = () => {
    appliedbtn('addType');
  };
  return (
    <Drawer {...props} style={{backgroundColor: 'white'}}>
      <Drawer.Toggle onClick={handleToggle} className="mr-auto" />

      <Collapse in={open}>
        <Drawer.Overflow>
          <Drawer.ToC>
            {/* <Drawer.Header href="/">Application</Drawer.Header> */}

            <Drawer.Nav>
              <Drawer.Item>
                <p
                  onClick={() => {
                    appliedbtn('home');
                    handleToggle()
                  }}
                  style={{cursor: 'pointer'}}
                  className="mb-0"
                >
                  Home
                </p>
              </Drawer.Item>
              <Drawer.Item>
                <p
                  onClick={() => {
                    appliedbtn('addType');
                    handleToggle()
                  }}
                  style={{cursor: 'pointer'}}
                  className="mb-0"
                >
                  Add Type
                </p>
              </Drawer.Item>
              <Drawer.Item>
                <p
                  onClick={() => {
                    appliedbtn('addCategory');
                     handleToggle()
                  }}
                  style={{cursor: 'pointer'}}
                  className="mb-0"
                >
                  Add Category
                </p>
              </Drawer.Item>
              <Drawer.Item>
                <p
                  onClick={() => {
                    appliedbtn('addFood');
                     handleToggle()
                  }}
                  style={{cursor: 'pointer'}}
                  className="mb-0"
                >
                  Add Food
                </p>
              </Drawer.Item>
              <Drawer.Item>
                <p
                  onClick={() => {
                    appliedbtn('allFood');
                     handleToggle()
                  }}
                  style={{cursor: 'pointer'}}
                  className="mb-0"
                >
                  All Food
                </p>
              </Drawer.Item>
              <Drawer.Item>
                <p
                  onClick={() => {
                    appliedbtn('orders');
                     handleToggle()
                  }}
                  style={{cursor: 'pointer'}}
                  className="mb-0"
                >
                  Orders
                </p>
              </Drawer.Item>
              <Drawer.Item>
                <p
                  onClick={() => {
                    appliedbtn('Users');
                     handleToggle()
                  }}
                  style={{cursor: 'pointer'}}
                  className="mb-0"
                >
                  Users
                </p>
              </Drawer.Item>
            </Drawer.Nav>
          </Drawer.ToC>
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
