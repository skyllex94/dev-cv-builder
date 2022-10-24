import React from "react";
import Header from "../components/Header";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl,
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
              <h1 className="my-4">About Website</h1>
              <h5>
                <b>Mission: </b> To provide a free and convenient way for
                software engineers to create and download their resume for free.
              </h5>
              <h5>
                <b>Objectives: </b> Creating a free platform for developers to
                browse through different IT-taylored templates and create their
                resumes which should be highly customizable.
              </h5>

              <Container className="py-5">
                <Image
                  src={Kamen}
                  alt="Jane"
                  fluid
                  rounded
                  width={"300px"}
                  className="mb-3"
                />

                <h2>Kamen Kanchev</h2>

                <p>
                  I'm passionate about developing responsive web app, which have
                  real world utility and use.
                </p>
                <p>Email: kkanchev94@gmail.com</p>
              </Container>
            </Container>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default About;
