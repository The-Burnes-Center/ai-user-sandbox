import React from "react";
import Card from 'react-bootstrap/Card';
import { CardBody } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import useOnFollow from "../common/hooks/use-on-follow";
import styles from "../../styles/globals.css";

export interface ChatBotTaskCard {
  name: string;
  cardTitle: string;
  taskDescription: string;
  instructions: string;
  url: string;
  apiPrompt: string;
}

export function TaskCard(props: ChatBotTaskCard) {
     const navigate = useNavigate();

    const handleFollow = (event) => {
        console.log("in handle follow of the try it button.");
        event.preventDefault();
        navigate(props.url);
        console.log("after on follow");
    };


  return (
    
    <div className="shadow p-3 mb-5 bg-white rounded" onClick={handleFollow} style={{ cursor: 'pointer' }}>
      <Card bg="info">
        <Card.Header></Card.Header>
        <CardBody>
          <Card.Title className="task-card-title">{props.cardTitle}</Card.Title>
          <Card.Text as= "p">{props.taskDescription}</Card.Text>
          <Button 
            as="a" 
            variant="primary" 
            href={props.url} 
            active
            onClick={(e) => e.stopPropagation()}
            //onClick={handleFollow}
            >
                Try it 
            </Button>
        </CardBody>
      </Card>
      </div>
      
  );
}
