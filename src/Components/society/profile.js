import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,CardBody } from 'reactstrap';
import classnames from 'classnames';
import PostJob from './postJob';
import Recherche from './Recherche';

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
            Ajouter un nouveau emploi
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Recherche un cv
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
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
                      <PostJob></PostJob>
                  </CardBody>
                </Card>
             
            </Col>
            
          </Row>
          
        </TabPane>
        <TabPane tabId="2">
         
           
              <Card>
                  <CardBody>
                      <Recherche></Recherche>
                  </CardBody>
               
              </Card>
           
         
        </TabPane>
       
        <TabPane tabId="3">
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