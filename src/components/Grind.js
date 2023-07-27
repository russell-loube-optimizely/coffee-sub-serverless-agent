import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";

const Grind = ({ grind }) => {
  const [grindValue, setGrindValue] = useState("1");

  const dropDownOptions = grind.filter((option) => option.value !== grindValue);
  const dropDownDefault = grind.filter((option) => option.value === grindValue);

  // TODO: add event handler for changing drop-down menu

  const handleDropDownChange = (eventKey) => {
    setGrindValue(eventKey);
  };

  return (
    <Dropdown onSelect={handleDropDownChange}>
      <DropdownToggle variant="secondary" id="dropdown-basic">
        {dropDownDefault[0].name}
      </DropdownToggle>
      <Dropdown.Menu>
        {dropDownOptions.map((grind) => (
          <Dropdown.Item key={grind.value} eventKey={grind.value}>
            {grind.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Grind;
