import React, { useRef, useEffect } from "react";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";

import CVPreview from "./CVPreview";
import { useContext } from "react";
import Context from "../context/Context";
import { useReactToPrint } from "react-to-print";

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
