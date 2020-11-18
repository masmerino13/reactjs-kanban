import React, { useEffect } from 'react'
import { hot } from 'react-hot-loader'
import {Container, Row, Col } from "react-bootstrap"
import { useStoreActions } from 'easy-peasy'

import { Sidebar } from './components/Sidebar'
import { Toolbar } from './components/Toolbar'
import { Kaban } from './components/Kaban'

const App = () => {
  const initialise = useStoreActions(actions => actions.initialise)

  useEffect(() => {
    initialise()
  }, [])

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
              <Kaban />
            </Col> 
        </Row>
      </Container>
    </>
  )
}

export default hot(module)(App)