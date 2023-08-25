import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useState } from "react";

const Type = ({ type, defaultTypeValue, handleToggleButtonChange }) => {
  const [typeValue, setTypeValue] = useState(defaultTypeValue);

  return (
    <>
      <Card.Text>Type</Card.Text>
      <ButtonGroup>
        {type.map((radio, idx) => (
          <ToggleButton
            variant="light"
            key={idx}
            id={`type-${idx}`}
            type="radio"
            name="type"
            value={radio.value}
            checked={typeValue === radio.value}
            onChange={(e) => {
              console.log("event:", e.currentTarget);
              setTypeValue(e.currentTarget.value);
            }}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
};

export default Type;
