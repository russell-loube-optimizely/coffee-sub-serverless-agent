import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useState } from "react";

const Type = ({ type }) => {
  const [typeValue, setTypeValue] = useState("1");

  return (
    <>
      <Card.Text>Type</Card.Text>
      <ButtonGroup>
        {type.map((radio, idx) => (
          <ToggleButton
            variant="light"
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            name="radio"
            value={radio.value}
            checked={typeValue === radio.value}
            onChange={(e) => setTypeValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
};

export default Type;
