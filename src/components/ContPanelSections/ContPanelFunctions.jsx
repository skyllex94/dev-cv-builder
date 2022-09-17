import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import { useContext } from "react";
import Context from "../../context/Context";

// Toggle the visibility of the whole section in the CVPreview
export const ToggleSwitchButton = (state, setState) => {
  state ? setState(false) : setState(true);
};

// Toggle the Modal display
export const toggleCurrModal = (showState, UIClassName) => {
  const modal = document.querySelector("." + UIClassName);
  if (modal === null) {
    return;
  }
  if (showState) {
    modal.classList.remove("d-none");
  } else {
    modal.classList.add("d-none");
  }
};

// Toggle the inEditMode for the given section
export const toggleRenameMode = (state, setState) => {
  setState({ isInEditMode: !state.isInEditMode, value: state.value });
};

// Renaming Functionality
export const renderEditView = (value, setValue, UIClassName) => {
  return (
    <Col className="d-flex d-inline">
      <Form.Control
        type="text"
        defaultValue={value}
        autoFocus
        onChange={(event) =>
          setValue({ isInEditMode: true, value: event.target.value })
        }
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            updateRenameValue(value, setValue, UIClassName);
          }
        }}
      />
      <Button
        className="ms-1"
        variant="success"
        onClick={() => updateRenameValue(value, setValue, UIClassName)}
      >
        ✓
      </Button>
    </Col>
  );
};

// Update the value of the section when confirmed
export const updateRenameValue = (value, setValue, UIClassName) => {
  setValue({ isInEditMode: false, value: value });
  document.querySelector(UIClassName).textContent = value;
};

// Change the state of a Modal in order to display it
export const showModals = (index, modalsToAdjustState) => {
  modalsToAdjustState.map((modal, indexModal) => {
    if (index === indexModal) {
      modal(true);
    }
  });
};

// Change the state of a Modal in order to display it
export const showModalz = (index, modals, setModals) => {
  const values = [...modals];
  modals.map((modal, indexModal) => {
    if (index === indexModal) {
      values[index].job = true;
      console.log(values[index].job);
      setModals(values);
    }
  });
};

// Func for beaing removed - maximum of 5
export const handleAddField = (index, nameTag, sections, setSections) => {
  if (sections.length < 5) {
    const values = [...sections, { name: nameTag + (sections.length + 1) }];
    setSections(values);
  }
};

export const handleRemoveField = (index, sectionName, sections, setSection) => {
  // Check if the item being removed is the last one and skip if there is only 1 item left
  if (sections.length > 1 && sections.length === index + 1) {
    const values = [...sections];
    const displaySection = document.querySelector(sectionName + (index + 1));
    displaySection.classList.add("d-none");
    values.splice(index, 1);
    setSection(values);
  }
  return;
};
