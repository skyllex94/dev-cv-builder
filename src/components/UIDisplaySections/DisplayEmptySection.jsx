import React from "react";
import { useContext } from "react";
import { Row } from "react-bootstrap";
import Context from "../../context/Context";

export default function DisplayEmptySection() {
  const { emptySection } = useContext(Context);
  return emptySection && <Row className="emptySection my-4 py-5" />;
}
