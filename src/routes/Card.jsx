// src/Card.jsx
import Col from 'react-bootstrap/Col';

export default function Card({ shoe }) {
  return (
    <Col sm>
      <img src={shoe.imageUrl} width="80%" alt={shoe.title} />
      <h4>{shoe.title}</h4>
      <p>{shoe.price}원</p>
    </Col>
  );
}