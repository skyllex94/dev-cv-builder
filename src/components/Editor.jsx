import React, { useState } from "react";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";

// import InfoContent from "./InfoContent";
import CVPreview from "./CVPreview";
import ModalInfoContent from "./ModalInfoContent";

function Editor() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Card>
        <CVPreview />
      </Card>
      <Button variant="outline-dark" onClick={() => setModalShow(true)}>
        Edit MainContent
      </Button>

      <ModalInfoContent show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Editor;
