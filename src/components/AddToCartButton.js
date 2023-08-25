import Button from "react-bootstrap/Button";

const AddToCartButton = ({ text, addedToCart, handleClick }) => {
  if (addedToCart) {
    return (
      <Button variant="success" onClick={handleClick}>
        Added to Cart!
      </Button>
    );
  }
  return (
    <Button variant="primary" onClick={handleClick}>
      {text}
    </Button>
  );
};

export default AddToCartButton;
