import React from "react";
import {

    CardBody,
   
    CardSubtitle,
    CardText,

    Button,
    Container,
}
from "reactstrap";
import Card from 'react-bootstrap/Card';
import axios from "axios";
import base_url from "./../api/bootapi";
import { toast } from "react-toastify";

const Course =({ course , update})=>{
    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${course.id}`).then(
            (response)=>{
                window.confirm(`Delete ${course.title}?`);
                toast.success("course deleted");
                update(id);
            },
            (error)=>{
                toast.error("error");
            }
        );
    };
return(
    <Card className="text-center" border="info" bg="light" >
        <CardBody>
            <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
            <a href="{course.link}" target={"blank"}>
            {course.link}
          </a>
            <CardText>{course.description}</CardText>
            <Container className="text-center">
            <Button color="danger"
            onClick={()=>
                deleteCourse(course.id)}
            
            >
            delete
            </Button>
            <Button color="warning ml-3">update</Button>
            </Container>
        </CardBody>
    </Card>
)
}
export default Course;