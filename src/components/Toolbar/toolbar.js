import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import MaterialIcon from 'material-icons-react'
import { AddTaskDialog } from '../common';

import './toolbar.scss'

const Toolbar = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Nav className="justify-content-end navbar navbar-expand-lg navbar-light bg-light border-bottom t_TopBar" activeKey="/home">
        <Nav.Item onClick={() => setShow(true)}>
          <MaterialIcon icon="add" />{' '}
          Create new task
        </Nav.Item>
      </Nav>

      <AddTaskDialog show={show} setShow={setShow} />
    </>
  );
}

export default Toolbar;
