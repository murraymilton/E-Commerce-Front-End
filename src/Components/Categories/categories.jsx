import React from "react";
import ReviewForm from "../ReviewForm/reviewForm";
import { Col, Container, Row, Button } from "react-bootstrap";
import ShowAllReviews from './../ShowAllReviews/showAllReviews';
import "./ShowAllProducts.css";
const ShowProduct = (props) => {
  const { name, description } = props.currentProduct;
  const currentUser = props.currentUser;
  const currentToken = props.currentToken;
  const getProductReviews = props.getProductReviews
  let productReviews = props.productReviews;
  return (
    <React.Fragment>
      <div >
      <Container>
        <Row>
          <Col id="neonText" sm={8}>
            <h1>{name}</h1>
            <p>{description}</p>
            <Button onClick={() => props.addItemToCart(props.currentProduct)} style={{
                        backgroundColor: "blue",
                        borderColor: "blue",
                      }}>View </Button>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
      </div>
        <ShowAllReviews productReviews={productReviews} currentUser={currentUser}/>
        <ReviewForm getProductReviews={getProductReviews} currentToken={currentToken} currentUser={currentUser} currentProduct={props.currentProduct}/>
    </React.Fragment>
  );
};

export default ShowProduct;