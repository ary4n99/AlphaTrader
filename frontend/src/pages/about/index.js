import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

import React from "react";

const AboutPage = () => {
  return (
    <Container fluid="md" className="h-75">
      <Row className="h-100 justify-content-center align-items-center">
        <Col>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  What is AlphaTrader?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Card.Text>
                    AlphaTrader is a modern web application built with React and
                    Python, which allows users to backtest various trading
                    strategies and compare the alpha generated.
                  </Card.Text>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris consequat lacus nec ligula ultrices porttitor. Mauris
                    aliquet quam in magna pulvinar venenatis. Nulla elementum
                    condimentum tincidunt. Sed non lectus arcu. Integer quis
                    ultrices massa, a lacinia felis. Praesent faucibus rutrum
                    massa, sed rhoncus leo auctor eu. Donec sed tempor eros.
                    Mauris aliquet nisi odio, eu sodales tortor maximus quis.
                    Nullam ultrices urna vel sagittis volutpat. Nam ut
                    vestibulum tellus. Nam quis nisi arcu. Integer lobortis
                    tortor sed ex congue, ornare fringilla leo commodo. Ut id
                    elit tempus, rutrum ex vel, feugiat eros. Donec est ex,
                    tempor et egestas eget, scelerisque a urna. Vivamus nec
                    ultricies ex.
                  </Card.Text>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Question 2?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <Card.Text>
                    Aliquam varius luctus vehicula. Aenean fringilla, turpis
                    aliquet egestas interdum, sem arcu consequat augue, id
                    volutpat nisl libero nec leo. Proin ornare arcu ut sem
                    finibus pulvinar. Nulla fermentum laoreet magna a hendrerit.
                    Nunc interdum nibh eu augue fermentum, et sollicitudin massa
                    maximus. Donec et accumsan leo, ut facilisis ligula. Vivamus
                    vitae mollis justo. Praesent placerat id nunc quis
                    convallis. Interdum et malesuada fames ac ante ipsum primis
                    in faucibus. Morbi pretium felis venenatis, imperdiet ligula
                    eu, feugiat erat. Sed dapibus, nulla quis eleifend volutpat,
                    diam dolor pulvinar diam, sit amet pharetra nisi ante eget
                    nisl. Quisque quis orci velit. Fusce sit amet lorem sodales,
                    egestas dui sit amet, porta mauris. Praesent fringilla magna
                    at finibus rutrum.
                  </Card.Text>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Question 3?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <Card.Text>
                    Aliquam varius luctus vehicula. Aenean fringilla, turpis
                    aliquet egestas interdum, sem arcu consequat augue, id
                    volutpat nisl libero nec leo. Proin ornare arcu ut sem
                    finibus pulvinar. Nulla fermentum laoreet magna a hendrerit.
                    Nunc interdum nibh eu augue fermentum, et sollicitudin massa
                    maximus. Donec et accumsan leo, ut facilisis ligula. Vivamus
                    vitae mollis justo. Praesent placerat id nunc quis
                    convallis. Interdum et malesuada fames ac ante ipsum primis
                    in faucibus. Morbi pretium felis venenatis, imperdiet ligula
                    eu, feugiat erat. Sed dapibus, nulla quis eleifend volutpat,
                    diam dolor pulvinar diam, sit amet pharetra nisi ante eget
                    nisl. Quisque quis orci velit. Fusce sit amet lorem sodales,
                    egestas dui sit amet, porta mauris. Praesent fringilla magna
                    at finibus rutrum.
                  </Card.Text>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
