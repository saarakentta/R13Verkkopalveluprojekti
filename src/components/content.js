import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Content() {
    return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./images/oldMB.jpg" />
      <Card.Body>
        <Card.Title>Product</Card.Title>
        <Card.Text>
          ABC-123, Mercedes Benz, 350X, Sedan, 2004, 30 000€, Diesel, Sininen 
        </Card.Text>
        <Button style={{ backgroundColor: '#176B87' }}>Lisää ostoskoriin</Button>
      </Card.Body>
    </Card>
  );
}
     // <div><img className="content" src={"/images/oldMB.jpg"}></img>   </div>



export default Content;



