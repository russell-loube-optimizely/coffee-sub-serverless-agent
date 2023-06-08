import Button from "react-bootstrap/Button";

const AddToCartButton = ({ addedToCart, handleClick }) => {
  if (addedToCart) {
    return (
      <Button variant="success" onClick={handleClick}>
        Added to Cart!
      </Button>
    );
  }
  return (
    <Button variant="primary" onClick={handleClick}>
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
