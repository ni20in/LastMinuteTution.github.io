import React, { Fragment ,useEffect,useState} from "react";
import { FormGroup, Form, Input, Container, Button  } from "reactstrap";
import axios from "axios";
import base_url from "./../api/bootapi";
import { toast } from "react-toastify";

const AddCourse = () =>{
    useEffect(() => {
        document.title="add courses";
    }, []);

    const [course, setCourse ]=useState('');
    const handleForm=(e)=>{
        e.preventDefault();
        postdatatoserver(course);
        console.log(course);
        
    };

    const postdatatoserver=(data)=>{
        axios.post(`${base_url}/courses`,data).then(
         (response)=>{
            setCourse({})
            console.log(response);
            console.log("success");
            toast.success("added");
            
         },
         (error)=>{
            console.log(error);
            console.log("error");
            toast.error("error");
         }   
        )
    }


    return(

     <Fragment>
     <h1 className="text-center my-3">Fill Course detail</h1>
        <Form onSubmit={handleForm}>
            <FormGroup>
                <label>Course id</label>
                <Input
                       type= "text" 
                       placeholder="enter here"
                       name="user id"
                       id="user id"
                       onChange={(e)=>{
                         setCourse({...course, id: e.target.value});
                       }}
                      
                />
            </FormGroup>
            <FormGroup>
                <label htmlFor="title">Course</label>
                <Input 
                type="text" 
                placeholder="enter title here" 
                id="title "
                onChange={(e)=>{
                         setCourse({...course, id: e.target.value});
                }}
                />
            </FormGroup>
            <FormGroup>
                <label htmlFor="link">Course Link</label>
                <Input 
                type="link" 
                placeholder="enter link here" 
                id="title "
                onChange={(e)=>{
                         setCourse({...course, id: e.target.value});
                }}
                />
            </FormGroup>
            <FormGroup>
                <label htmlFor="description">Course Description</label>
                <Input 
                type="textarea" 
                placeholder="enter description here" 
                id="description"  
                style={{height :150}}
                onChange={(e)=>{
                         setCourse({...course, id: e.target.value});
                }}    
                />
            </FormGroup>

            <Container className="text-center">
                <Button type="submit" color="success">Add Course</Button>
                <Button type="reset" color="warning ml-2" onClick={()=>{
                    setCourse({});
                }}>clear Course</Button>
            </Container>
        </Form>  
     </Fragment>
    );
};
export default AddCourse;