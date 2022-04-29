import { useRef } from "react";
import Card from "../ui/Card"
import classes from "./AddNewMeetUp.module.css"

 function AddMeetUp(props){
 const titleinputRef=useRef();
 const imageinputRef=useRef();
 const addressinputRef=useRef();
 const descriptioninputRef=useRef();



    function setHandler(event){
  event.preventDefault();

  const entertitle=titleinputRef.current.value
  const enteredimage=imageinputRef.current.value
  const enterdaddress=addressinputRef.current.value
//   const entereddescription =descriptioninputRef.current.value
  
  const meetUpData={
      title:entertitle,
      image:enteredimage,
      address:enterdaddress,
      description:entereddescription
  }
  props.AddMeetUp_New(meetUpData);

    }
   

    return(
    <Card>
            <form className={classes.form} onSubmit={setHandler}>
           <div className={classes.control}>
               <label htmlFor="title">Title</label>
               <input type="text" id="title" required placeholder="Title" ref={titleinputRef}/>
           </div>
           <div className={classes.control}>
               <label htmlFor="image">image</label>
               <input type='url' id='image' required placeholder="Image" ref={imageinputRef}/>
           </div>
           <div className={classes.control}>
               <label htmlFor="Address">Address</label>
               <input type='text' id='Address'  required placeholder="Address" ref={addressinputRef}/>
           </div>
           <div  className={classes.control}>
           <label htmlFor="Description">Description</label>
            <textarea type="text" row="5"  required placeholder="Description" ref={descriptioninputRef}/>
           </div>
           <div  className={classes.action}>
               <button className={classes.btn} >Add New MeetUp</button>
           </div>

            </form>
    </Card>
    );
 }
 export default AddMeetUp;