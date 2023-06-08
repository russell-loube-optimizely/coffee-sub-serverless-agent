import Form from "react-bootstrap/Form";

const frequencies = [
  { name: "Weekly ($18.00/delivery)", type: "radio", value: "1" },
  { name: "Bi-Weekly ($18.00/delivery)", type: "radio", value: "2" },
  { name: "Monthly ($18.00/delivery)", type: "radio", value: "3" },
];

const DeliveryFrequency = () => {
  return (
    <Form>
      {frequencies.map((frequency) => (
        <Form.Check
          label={frequency.name}
          name="group1"
          type={frequency.type}
          id={frequency.value}
          key={frequency.value}
        />
      ))}
    </Form>
  );
};

export default DeliveryFrequency;
