import Form from "react-bootstrap/Form";

const DeliveryFrequency = ({ frequencies }) => {
  return (
    <Form>
      {frequencies.map((frequency) => (
        <Form.Check
          label={frequency.name}
          name="group1"
          type="radio"
          id={frequency.value}
          key={frequency.value}
        />
      ))}
    </Form>
  );
};

export default DeliveryFrequency;
