import AddMeetUp from "../component/meetUp/AddMeetUp";


function NewMeetUppage(){
    function AddMeetUpHandler(meetUpData){
  fetch('https://react-getting-started-34c41-default-rtdb.firebaseio.com/meetUp.json',{
      method:'POST',
      body:JSON.stringify(meetUpData),
      headers:{
          'contnet-type':'application/json'
      }

  });
    }
    return (
        <section>
         <AddMeetUp AddMeetUp_New={AddMeetUpHandler}/>
        </section>

    );
    
}
export default NewMeetUppage;