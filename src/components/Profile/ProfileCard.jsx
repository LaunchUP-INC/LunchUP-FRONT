import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';


const ProfileCard = ({ user, isAuthenticated, handleShow }) => {
  return (
    <Card style={{ width: "15rem" }} bg={isAuthenticated ? "secondary" : "light"} border="dark">
      <Image src={user.picture ? user.picture : "/no-avatar.png"} alt={user.name} roundedCircle />
      <Card.Body>
        <Card.Title>{`${user.firstname} ${user.lastname}`}</Card.Title>
        <Card.Text>{user.email}.</Card.Text>
      </Card.Body>
      <Button variant="success" onClick={handleShow} >
        Agregar comensal
      </Button>
    </Card>
  );
};

export default ProfileCard;
