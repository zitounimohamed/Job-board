import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,CardBody } from 'reactstrap';
import classnames from 'classnames';
import Cv from './cv';
import Listcv from '../../views/cvs'
const Example = (props) => {
  //  const [isOpen, setIsOpen] = useState(false);

  //const togglee = () => setIsOpen(!isOpen);
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
 
     

  return (
    <div className='container'>
        <br/><br/><br/><br/>
                <figure></figure>
<br/><br/><br/>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Ajouter un nouveau Cv
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Moar Tabs
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Votre Cv
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
          >
            Les demandes
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
              
             <Col sm="12">
            
                <Card>
                  <CardBody>
                 <Cv></Cv>
                  </CardBody>
                </Card>
             
            </Col>
            
          </Row>
          
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
              
             <Col sm="12">
            
                <Card>
                  <CardBody>
                 <Listcv></Listcv>
                  </CardBody>
                </Card>
            
             
            </Col>
          </Row>
          
        </TabPane>
        <TabPane tabId="4">
          <Row>
              
             <Col sm="12">
            
                <Card>
                  <CardBody>
                      test
                  </CardBody>
                </Card>
            
             
            </Col>
          </Row>
          
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Example;