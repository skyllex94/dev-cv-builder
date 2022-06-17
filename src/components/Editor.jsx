import React, { useState, useContext } from "react";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";

import CVPreview from "./CVPreview";
import ModalInfoContent from "./ModalInfoContent";

import { ContextProvider } from "../context/Context";
import Context from "../context/Context";

function Editor() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <ContextProvider>
        <Card className="cv-preview">
          <CVPreview />
          console.log(click)
        </Card>
        <Button variant="outline-dark mt-2" onClick={() => setModalShow(true)}>
          Edit MainContent
        </Button>

        <ModalInfoContent show={modalShow} onHide={() => setModalShow(false)} />
      </ContextProvider>
    </>
  );
}

export default Editor;
