import React, { useState, useRef, useEffect } from "react";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";

import { ContextProvider } from "../context/Context";
import { useReactToPrint } from "react-to-print";

import CVPreview from "./CVPreview";
import ModalInfoContent from "./ModalInfoContent";
import ModalSummary from "./ModalSummary";
import ModalWork from "./ModalWork";

export const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

function Editor() {
  const [modalGenInfo, setModalGenInfo] = useState(false);
  const [modalSummary, setModalSummary] = useState(false);
  const [modalWork, setModalWork] = useState(false);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Current_CV",
  });

  return (
    <>
      <style type="text/css">{"@media print{@page {size: portrait}}"}</style>
      <ContextProvider>
        <Card className="cv-preview">
          <CVPreview ref={componentRef} />
        </Card>
        <Button
          variant="outline-dark mt-2"
          onClick={() => setModalGenInfo(true)}
        >
          Edit MainContent
        </Button>
        <Button
          variant="outline-dark mt-2 ms-2"
          onClick={() => setModalSummary(true)}
        >
          Edit Summary
        </Button>
        <Button
          variant="outline-dark mt-2 ms-2"
          onClick={() => setModalWork(true)}
        >
          Edit Work Experience
        </Button>
        <Button variant="outline-dark mt-2 ms-2" onClick={handlePrint}>
          Download PDF
        </Button>
        <ModalInfoContent
          show={modalGenInfo}
          onHide={() => setModalGenInfo(false)}
        />
        <ModalSummary
          show={modalSummary}
          onHide={() => setModalSummary(false)}
        />
        <ModalWork show={modalWork} onHide={() => setModalWork(false)} />
      </ContextProvider>
    </>
  );
}

export default Editor;
