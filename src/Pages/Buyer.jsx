import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Header from '../Components/Header'

function Buyer() {
    const [isRed, setIsRed] = useState(false);
  return (

    <>
    <Header/>
    <Row>
      <h1 className='text-primary mt-5'>Products View Page</h1>
      <Col className='d-flex' style={{marginTop:'100px',marginLeft:'100px'}}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </Col>
    </Row>
    </>
  )
}

export default Buyer