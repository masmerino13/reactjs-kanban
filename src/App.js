import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import {Container, Row, Col } from "react-bootstrap"

import { Sidebar } from './components/Sidebar'
import { Toolbar } from './components/Toolbar'

class App extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row>
              <Col xs={2} className='MainSidebar border-right'>      
                <Sidebar />
                <p className='MainSidebarAutor'>By Ricardo Merino</p>
              </Col>
              <Col  xs={10} className='MainContainer'>
                <Toolbar />
              </Col> 
          </Row>
        </Container>
      </>
    )
  }
}

export default hot(module)(App)