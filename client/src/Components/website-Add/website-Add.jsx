import { useState } from "react"
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'
import './website-Add.css'
export default function WebsiteAdd(){
  //-----------------state to hold domain name------------
    const [add,setAdd]=useState({websiteName:""})
     const handleChange=(e)=>{
          console.log(e.target.value);
          const {name,value}=e.target;
           setAdd({...add,[name]:value})
          }
      //---------------click the button to show items
     const Add=(e)=>{
         e.preventDefault() 
         axios.post("http://localhost:1235/",{
         add:add.websiteName,
        })
      .then((response)=>{console.log("backend data"+response)})
      //-----------------to blank the textbox after submitting-----------
    setAdd({websiteName:""})
     }
    return(
        <>
       <div> <h1 className="website_heading">Webpage Scraper</h1></div>
        <div className="main_div">
     <Form >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="Enter the website"  name="websiteName" onChange={handleChange} value={add.websiteName}/>
  </Form.Group>
  <div className="button_Div">
  <Button  type="submit" onClick={Add} className="button_Text">
   Get Insights
  </Button>
 </div>
</Form>
</div>
        </>
    )
}