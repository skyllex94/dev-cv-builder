import Form from "react-bootstrap/esm/Form";
import React from "react";
import { useState } from "react";
import Context from "../context/Context";
import { useContext } from "react";

export function EmptySection() {
  const [show, setShow] = useState(false);
  const { displayEmptySection } = useContext(Context);

  const insertSection = () => {
    displayEmptySection(!show);
    setShow(!show);
  };
  return (
    <Form.Label
      onClick={insertSection}
      className="cont-panel-items-styling items-styling"
    >
      Add/Remove Empty Section
    </Form.Label>
  );
}
