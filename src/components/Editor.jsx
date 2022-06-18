import React, { useState, useContext, useRef } from "react";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";

import CVPreview from "./CVPreview";
import ModalInfoContent from "./ModalInfoContent";

import { ContextProvider } from "../context/Context";
import { useReactToPrint } from "react-to-print";

function Editor() {
  const [modalShow, setModalShow] = useState(false);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <style type="text/css">{"@media print{@page {size: portrait}}"}</style>
      <ContextProvider>
        <Card className="cv-preview">
          <CVPreview ref={componentRef} />
        </Card>
        <Button variant="outline-dark mt-2" onClick={() => setModalShow(true)}>
          Edit MainContent
        </Button>
        <Button variant="outline-dark mt-2 ms-2" onClick={handlePrint}>
          Download PDF
        </Button>
        <ModalInfoContent show={modalShow} onHide={() => setModalShow(false)} />
      </ContextProvider>
    </>
  );
}

export default Editor;
