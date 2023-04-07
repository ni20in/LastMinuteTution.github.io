import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Services from "./component/Services"
import Footer from "./component/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'

import AddCourse from "./component/AddCourse";
import Allcourses from "./component/Allcourses";

import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/mediaquery.scss";

function App() {
  return (
  <div>
    <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-course" element={<AddCourse />} />
          <Route path="/view-courses" element={<Allcourses />} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/about" element={<Services/>} />
        </Routes>
       <Footer />
  </div> 
      
   
  );
}

export default App;

                