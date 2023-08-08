import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FogLightNavbar from "./components/FogLightNavbar.js";
import ImageCard from "./components/ImageCard.js";
import Type from "./components/Type.js";
import AddToCartButton from "./components/AddToCartButton.js";
import DeliveryFrequency from "./components/DeliveryFrequency.js";
import Grind from "./components/Grind.js";

import React, { useState, useEffect } from "react";

import agentService from "./services/Agent";

import axios from "axios";

function App() {
  const [deliveryValue, setDeliveryValue] = useState("1");
  const [addedToCart, setAddedToCart] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [variables, setVariables] = useState([]);
  const [title, setTitle] = useState();

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
    agentService.sendOdpEvent(purchasedPayload);
  };

  let vuid =
    localStorage.getItem("optimizely-vuid") !== null
      ? localStorage.getItem("optimizely-vuid")
      : localStorage.setItem("optimizely-vuid", crypto.randomUUID());

  const identifiedPayload = {
    type: "fullstack",
    identifiers: { user_id: "test_user_1", vuid },
    action: "identified",
  };

  useEffect(() => {
    agentService.sendOdpEvent(identifiedPayload);
  });

  const decideAllPayload = {
    userId: "test-user",
    userAttributes: {},
    fetchSegments: true,
    fetchSegmentsOptions: ["IGNORE_CACHE"],
  };

  useEffect(() => {
    agentService.decideAll(decideAllPayload).then((decisionVariables) => {
      console.log("title variable:", decisionVariables.title);
      setTitle(decisionVariables.title);
    });
  }, []);

  const purchasedPayload = {
    userId: "test-user",
    type: "fullstack",
    identifiers: { user_id: "test_user_1", vuid },
    action: "purchased",
  };

  return (
    <div className="container">
      <FogLightNavbar />
      <br />
      <Row>
        <ImageCard />
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">$18.00</Card.Subtitle>
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

export default App;
