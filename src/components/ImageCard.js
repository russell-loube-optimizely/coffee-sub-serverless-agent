import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import image from "../hario.jpg";

const ImageCard = () => {
  return (
    <Col>
      <Card className="bg-dark text-white">
        <Card.Img src={image} alt="hario-v60" />
        <Card.ImgOverlay>
          <Card.Text></Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
};

export default ImageCard;
