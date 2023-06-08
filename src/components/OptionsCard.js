const OptionsCard = (props) => {
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Coffee Subscription</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">$18.00</Card.Subtitle>
          <br />
          <Card.Text>Type</Card.Text>
          <ButtonGroup>
            {props.type.map((radio, idx) => (
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
          <br />
          <br />
          <Card.Text>Delivery Frequency</Card.Text>
          <Form>
            {["radio"].map((delivery) => (
              <div key={`inline-${delivery}`} className="mb-3">
                <Form.Check
                  label="Weekly ($18.00/delivery)"
                  name="group1"
                  type={delivery}
                  id={`inline-${delivery}-1`}
                />
                <Form.Check
                  label="Bi-Weekly ($18.00/delivery)"
                  name="group1"
                  type={delivery}
                  id={`inline-${delivery}-2`}
                />
                <Form.Check
                  label="Monthly ($18.00/delivery)"
                  name="group1"
                  type={delivery}
                  id={`inline-${delivery}-3`}
                />
              </div>
            ))}
          </Form>
          <Button>Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
