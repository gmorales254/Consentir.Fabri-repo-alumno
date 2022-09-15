import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';

function Item({ id, titulo, price, img }) {
  return (
    // <Link to={`/item/${id}`}>
    <Row xs={1} md={2} className="g-4">
      <Col>
        <Card style={{ width: "16rem" }}>
          <Link to={`/item/${id}`}>
            <Card.Img variant="top" src={img} />
          </Link>
          <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text>${price}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    // </Link>
  );
}
  



export default Item