import React, { useState,useEffect } from "react";
import Course from './Course';
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
const Allcourse=()=>{
    useEffect(() => {
        document.title="all courses";
    }, []);

    const getAllCoursesFromServer = ( ) =>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                console.log(response.data);
                toast.success("courses has been loaded",{
                    position:"bottom-center",
                });
                setCourses(response.data);
            },
            (error)=>{

                console.log(error);
                toast.error("something wrong",{
                    position:"bottom-center",
                });
            }
        )
    };
    useEffect(()=>{
        getAllCoursesFromServer();
    },[]);

    const[courses,setCourses]=useState ([
        {title:"java course",description:"thi is demo",link :"https://java.com"}
    ]);
     
    const updateCourses=(id)=>{
        setCourses(courses.filter((c)=>c.id!==id));
    };


    return(
        <div>
            <h1>All courses</h1>
            <p>list of all courses</p>
            {
                courses.length>0? courses.map((item)=>(
                    <Course key={item.id} course={item} update={updateCourses} />
                ))
                 : "no courses"}
        </div>
    );
};
export default Allcourse;   