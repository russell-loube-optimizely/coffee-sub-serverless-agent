import Dropdown from "react-bootstrap/Dropdown";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";

const Grind = ({ grindValue, grind, handleDropDownChange }) => {
  console.log("grindValue from Grind.js:", grindValue);
  const dropDownOptions = grind.filter((option) => option.value !== grindValue);
  const dropDownDefault = grind.filter((option) => option.value === grindValue);

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
