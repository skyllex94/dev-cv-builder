import "../index.css";
import Card from "react-bootstrap/esm/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/esm/Button";

function ControlPanel() {
  return (
    <div className="control-panel">
      <Card className="mb-2">
        <p className="lead pt-3 text-start mx-3 mt-2">
          Sections{" "}
          <Button variant="outline-dark" className="float-end mx-2">
            X
          </Button>
        </p>

        <Card className="m-2">
          <p className="pt-3">About Me</p>
        </Card>
        <Card className="m-2">
          <p className="pt-3">Work Experience</p>
        </Card>
        <Card className="m-2">
          <p className="pt-3">Skills</p>
        </Card>
      </Card>

      <Accordion className="mb-2 bg-light">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="accordion_header">
            Sections
          </Accordion.Header>
          <Accordion.Body>
            <Card className="mb-2">
              <p className=" pt-3">Summary</p>
            </Card>
            <Card className="mb-2">
              <p className=" pt-3">Experience</p>
            </Card>
            <Card className="mb-2">
              <p className=" pt-3">Skills</p>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Card className="mb-2">
        <p className="lead pt-3">Download PDF</p>
      </Card>
    </div>
  );
}

export default ControlPanel;
