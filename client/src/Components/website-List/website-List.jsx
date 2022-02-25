import {Table} from 'react-bootstrap'
import './website-List.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import CloseIcon from '@material-ui/icons/Close';
export default function WebsiteList(){
  const [DbData,setDbData]=useState([])
  useEffect(()=>{
    // -----Fetching all items from db-----
    axios.get("https://webpagescraper.herokuapp.com/view").then((details)=>{
    console.log("DB details"+JSON.stringify(details.data.Dataa));
    setDbData(details.data.Dataa)
    // console.log(DbData);
  })
  })
  //------ to delete an item  from the table ------
   function deleteRecord(id) {
    fetch(`https://webpagescraper.herokuapp.com/${id}`, {
      method: "DELETE"
    });
    setDbData(DbData.filter((val)=>{
      return val._id!=id
    }
    ));
  }
  //-------- upadate to add favourites------
  function updateRecord(id){
    fetch(`https://webpagescraper.herokuapp.com/${id}`, {
      method: "PUT"
    });
    setDbData(DbData.filter((val)=>{
console.log("ssssssssssss"+JSON.stringify(!val.favourite));
return (!val.favourite)
    }
    ))
  }
    return(
        <div className='table_main_div'>
        <Table bordered striped hover>
  <thead>
    <tr>
      <th>Domain Name</th>
      <th>Word Count</th>
      <th>Favourites</th>
      {/* <th>Back-Links</th> */}
      <th>Media-Links</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {
      //--------------showing all items in table--------
      DbData.map((u)=>(
        <tr>
          <td className='td1'>{u.websiteName}</td>
          <td>{u.wordCount}</td>
          <td>{`${u.favourite}`}</td>
          {/* <td>{u.back_links}</td> */}
         <td>{u.imageLink}</td>
         <td>
        <div className='actions'>
            <button className='Favour' onClick={() => {
                updateRecord(u._id);
                }}>Add to favourites
            </button>
            <CloseIcon  className='delete' onClick={() => {
              deleteRecord(u._id);
               }}>
             </CloseIcon>
       </div>
       </td>
      </tr>
      ))
    }
  </tbody>
</Table>
 </div>
    )
}