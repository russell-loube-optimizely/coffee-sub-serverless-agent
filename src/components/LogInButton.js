import Button from "react-bootstrap/Button";

const FogLightButton = ({ signedIn, handleClick }) => {
  if (signedIn) {
    return (
      <Button variant="secondary" onClick={handleClick}>
        Logged In!
      </Button>
    );
  }
  return (
    <Button variant="light" onClick={handleClick}>
      Log In
    </Button>
  );
};

export default FogLightButton;
