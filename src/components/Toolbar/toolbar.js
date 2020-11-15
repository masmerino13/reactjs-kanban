import React from 'react'
import { Nav } from 'react-bootstrap'
import MaterialIcon, {colorPalette} from 'material-icons-react'

import './toolbar.scss'

const Toolbar = () => {
  return (
    <>
      <Nav className="justify-content-end navbar navbar-expand-lg navbar-light bg-light border-bottom" activeKey="/home">
        <Nav.Item>
          <MaterialIcon icon="add" />{' '}
          Create new task
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Toolbar;
