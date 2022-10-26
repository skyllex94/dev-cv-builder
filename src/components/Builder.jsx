import React, { useRef } from "react";
import Header from "./Header";
import ControlPanel from "./ControlPanel";
import Editor from "./Editor";

import { Col, Row, Container } from "react-bootstrap";

import { useReactToPrint } from "react-to-print";
import { ContextProvider } from "../context/Context";

function Builder() {
  // Check if user is already logged-in
  const data = JSON.parse(window.localStorage.getItem("UserData"));

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current ?? null,
    documentTitle: "Current_CV",
  });

  // node --max_old_space_size=1560 node_modules/.bin/ - add when deploying to Heroku to start and build before react-scripts

  // "dev": "react-scripts start",
  // "start": "serve -s build",
  // "build": "react-scripts build",
  // "test": "react-scripts test --env=jsdom",
  // "eject": "react-scripts eject",
  // "heroku-postbuild": "npm run build"

  // For Netlify Deployment - use the regular dev scripts & remove the the secondary scripts below
  // 1. Add -
  // "start": "react-scripts start",
  //   "build": "react-scripts build",
  //   "eject": "react-scripts eject"
  // 2. Remove those -
  // "eslintConfig": {
  //   "extends": [
  //     "react-app",
  //     "react-app/jest"
  //   ]
  // },
  // "browserslist": {
  //   "production": [
  //     ">0.2%",
  //     "not dead",
  //     "not op_mini all"
  //   ],
  //   "development": [
  //     "last 1 chrome version",
  //     "last 1 firefox version",
  //     "last 1 safari version"
  //   ]
  // }

  return (
    <ContextProvider>
      {data ? <Header username={data.name} /> : <Header />}
      <Container fluid className="p-4 bg-light">
        <Row className="d-flex justify-content-lg-center">
          <Col className="control-panel">
            <ControlPanel handlePrint={handlePrint} />
          </Col>
          <Col className="cv-preview">
            <Editor ref={componentRef} />
          </Col>
        </Row>
      </Container>
    </ContextProvider>
  );
}

export default Builder;
