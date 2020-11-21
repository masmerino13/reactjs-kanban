import React from "react"
import PropTypes from "prop-types"
import _ from "lodash"
import { Button, Modal } from "react-bootstrap"

import "./dialog.scss"

const Dialog = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{ props.title }</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        { props.children }
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Cancel
        </Button>
        <Button onClick={props.onSuccessAction} variant="primary" type="submit">{ props.onSuccessLabel }</Button>
      </Modal.Footer>
    </Modal>
  )
}

Dialog.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onSuccessLabel: PropTypes.string,
  onSuccessAction: PropTypes.func,
  onHide: PropTypes.func
}

Dialog.defaultProps = {
  show: false,
  onSuccessLabel: 'Confirm',
  onSuccessAction: () => {},
  onHide: () => {}
}

export default Dialog
