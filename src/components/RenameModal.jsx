import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function RenameModal(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Rename Section Title
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Form>
          <Form.Group className="mb-3">
            <FloatingLabel label="Section Name">
              <Form.Control
                type="text"
                className={"mb-2 renameSection"}
                value={props.currName}
                onChange={(event) => {
                  props.setCurrName(event.target.value);
                }}
              />
            </FloatingLabel>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default RenameModal;
