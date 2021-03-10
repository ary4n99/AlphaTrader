import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";

const SignUpModal = (props) => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Form>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="password" placeholder="Name" />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email address" />
          </Form.Group>
          <Form.Group controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="email" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formGridPassword">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control type="password" placeholder="Confirm password" />
          </Form.Group>
          <Form.Text muted>
            By signing up you are agreeing to AlphaTrader's Terms and Conditions
          </Form.Text>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Sign up</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default SignUpModal;
