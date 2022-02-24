import logo from './logo.svg';
import './App.css';
import WebsiteAdd from './Components/website-Add/website-Add';
import WebsiteList from './Components/website-List/website-List';
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col/>
          <Col lg={10}>
            <WebsiteAdd/>
            <br></br>
            <WebsiteList/>
          </Col>
          <Col/>
        </Row>
      </Container>
     {/* <WebsiteAdd />
     <br></br>
     <WebsiteList /> */}
    </div>
  );
}

export default App;
