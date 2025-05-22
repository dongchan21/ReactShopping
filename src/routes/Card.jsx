// src/Card.jsx
import Col from 'react-bootstrap/Col';

export default function Card({ shoe }) {
  const imageUrl =
    shoe.imageUrl || `https://codingapple1.github.io/shop/shoes${shoe.id + 1}.jpg`;
  return (
    <Col sm>
      <img src={imageUrl} width="80%" alt={shoe.title} />
      <h4>{shoe.title}</h4>
      <p>{shoe.price}원</p>
    </Col>
  );
}