import React, { useRef, useEffect } from "react";
import Header from "./Header";
import ControlPanel from "./ControlPanel";
import Editor from "./Editor";
import { Col, Row, Container } from "react-bootstrap";

import { useReactToPrint } from "react-to-print";
import { ContextProvider } from "../context/Context";
import { toast } from "react-toastify";

function Builder() {
  // Check if user is already logged-in
  const data = JSON.parse(window.localStorage.getItem("UserData"));

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current ?? null,
    documentTitle: "Current_CV",
  });

  const contrPanelRef = useRef(null);
  const cvPreview = useRef(null);
  const dimmingCoverRef = useRef(null);

  const beginInstructions = () => {
    // Decrale constants of the refs to be focused attention on
    const cvComponent = cvPreview.current;
    const ctrlPanelComponent = contrPanelRef.current;

    // Disable all clickable events for the instructions period
    ctrlPanelComponent.style.pointerEvents = "none";

    // Step 1 Instructions with focus on Control Panel

    toastMessage("1. Click on any section title to open and fill it.", 5500);

    // Step 2 Instructions with focus on CVPreview
    setTimeout(() => {
      toastMessage(
        "2. All the information will be shown in the resume preview. Enjoy!",
        5000
      );

      cvComponent.style.position = "relative";
      cvComponent.style.zIndex = "200";
      cvComponent.style.pointerEvents = "none";

      ctrlPanelComponent.style.zIndex = "0";
      ctrlPanelComponent.style.pointerEvents = "auto";
      setTimeout(() => {
        cvComponent.style.pointerEvents = "auto";
        coverRemoval(dimmingCoverRef);
      }, 6000);
    }, 7000);
  };

  const toastMessage = (message, time) => {
    toast.info(message, {
      autoClose: time,
      hideProgressBar: false,
      pauseOnHover: false,
      closeOnClick: false,
      pauseOnFocusLoss: false,
    });
  };

  const coverRemoval = (ref) => {
    const coverRemoval = ref.current;
    coverRemoval.className = "removeCover";
  };

  // Heroku and Netlify instructions
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

  useEffect(() => {
    const genInfo = window.localStorage.getItem("GenInfo");
    const summary = window.localStorage.getItem("Summary");
    const work = window.localStorage.getItem("Work");
    const projects = window.localStorage.getItem("Projects");
    const skills = window.localStorage.getItem("Skills");
    const languages = window.localStorage.getItem("Languages");

    if (genInfo || summary || work || projects || skills || languages) {
      coverRemoval(dimmingCoverRef);
    } else {
      beginInstructions();
    }
  }, []);

  return (
    <ContextProvider>
      {data ? <Header username={data.name} /> : <Header />}
      <Container fluid className="p-4 bg-light">
        <Row className="d-flex justify-content-lg-center">
          <Col ref={contrPanelRef} className="control-panel" disabled>
            <ControlPanel handlePrint={handlePrint} />
          </Col>
          <Col ref={cvPreview} className="cv-preview">
            <Editor ref={componentRef} />
          </Col>
        </Row>
      </Container>
      <div ref={dimmingCoverRef} className="dimming-cover" />
    </ContextProvider>
  );
}

export default Builder;
