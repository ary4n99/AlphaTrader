import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import LoginModal from "src/components/login";
import SignUpModal from "src/components/signup";

const NavBar = () => {
  const [loginShow, setLoginShow] = React.useState(false);
  const [signUpShow, setSignUpShow] = React.useState(false);
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/home">AlphaTrader</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/settings">Settings</Nav.Link>
      </Nav>
      <Button
        onClick={() => setLoginShow(true)}
        variant="outline-primary"
        className="mr-2"
      >
        Log in
      </Button>
      <Button onClick={() => setSignUpShow(true)} variant="primary">
        Sign up
      </Button>
      <LoginModal show={loginShow} onHide={() => setLoginShow(false)} />
      <SignUpModal show={signUpShow} onHide={() => setSignUpShow(false)} />
    </Navbar>
  );
};

export default NavBar;
