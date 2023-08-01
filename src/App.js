import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import FogLightNavbar from "./components/FogLightNavbar.js";
import ImageCard from "./components/ImageCard.js";
import Type from "./components/Type.js";
import AddToCartButton from "./components/AddToCartButton.js";
import DeliveryFrequency from "./components/DeliveryFrequency.js";
import Grind from "./components/Grind.js";

import React, { useState, useEffect } from "react";

function App() {
  const [deliveryValue, setDeliveryValue] = useState("1");
  const [addedToCart, setAddedToCart] = useState(false);

  const type = [
    { name: "Roaster's Choice", value: "1" },
    { name: "Seasonal Espresso", value: "2" },
    { name: "House Blend", value: "3" },
  ];

  const grind = [
    { name: "Whole Bean", value: "1" },
    { name: "French Press", value: "2" },
    { name: "Chemex", value: "3" },
    { name: "Automatic Drip", value: "4" },
    { name: "Pour Over Cone", value: "5" },
    { name: "Espresso", value: "6" },
  ];

  const handleCartClick = () => {
    const updatedAddedToCart = !addedToCart;
    setAddedToCart(updatedAddedToCart);
  };

  const optimizely = require("@optimizely/optimizely-sdk");
  const optimizelyClient = optimizely.createInstance({
    sdkKey: "BNFZhjLJcatSku1y6XLAM",
  });

  const [datafileFetched, setDatafileFetched] = useState(false);
  const [isClientReady, setIsClientReady] = useState(false);

  useEffect(() => {
    optimizelyClient.onReady().then(() => {
      setDatafileFetched(true);
      if (isClientValid) {
        setIsClientReady(true);
      }
    }, []);
  });

  const isClientValid = () => {
    return optimizelyClient.getOptimizelyConfig() !== null;
  };

  const user = optimizelyClient.createUserContext("user123");
  const decision = user.decide("product_detail_page");
  const title = decision.variables.title;
  console.log(decision);

  if (isClientReady === true) {
    return (
      <div className="container">
        <FogLightNavbar />
        <br />
        <Row>
          <ImageCard />
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Coffee Subscription</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  $18.00
                </Card.Subtitle>
                <br />
                <Grind grind={grind} />
                <br />
                <Type type={type} />
                <br />
                <br />
                <Card.Text>Delivery Frequency</Card.Text>
                <DeliveryFrequency />
                <br />
                <AddToCartButton
                  addedToCart={addedToCart}
                  handleClick={handleCartClick}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
