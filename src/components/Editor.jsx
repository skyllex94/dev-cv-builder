import React, { useRef, useEffect } from "react";
import Card from "react-bootstrap/esm/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CVPreview from "./CVPreview";

export const Editor = React.forwardRef((props, ref) => {
  return (
    <>
      <style type="text/css">{"@media print{@page {size: portrait}}"}</style>
      <Card className="cv-preview">
        <CVPreview ref={ref} />
      </Card>
    </>
  );
});

export const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export default Editor;
