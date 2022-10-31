import React from "react";
import Header from "../components/Header";
import {
  Container,
  Button,
  Row,
  Col,
  Card,
  FloatingLabel,
  Image,
} from "react-bootstrap";
import Kamen from "../img/me.jpg";

function About() {
  const data = JSON.parse(window.localStorage.getItem("UserData"));

  return (
    <div>
      {data ? <Header username={data.name} /> : <Header />}

      <Row className="justify-content-center align-items-start">
        <Col md={6}>
          <Card>
            <Container className="px-5">
              <h1 className="mt-4">About Website</h1>
              <h5>
                <b>Mission: </b> To provide a free and convenient way for
                software engineers to create and download their resume for free.
              </h5>
              <h5>
                <b>Objectives: </b> Creating a free platform for developers to
                browse through different IT-taylored templates and create their
                resumes which should be highly customizable.
              </h5>

              <Container className="py-3">
                <h3 className="mb-4">
                  Contacts for questions and/or suggestions
                </h3>
                <Image
                  src={Kamen}
                  alt="Jane"
                  fluid
                  rounded
                  width={"200px"}
                  className="mb-3"
                />
                <Row className="justify-content-center">
                  <Col className="col-auto">
                    <p>Name: Kamen Kanchev</p>
                  </Col>
                  <Col className="col-auto">
                    <p>Email: kkanchev94@gmail.com</p>
                  </Col>
                </Row>
              </Container>
            </Container>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default About;
