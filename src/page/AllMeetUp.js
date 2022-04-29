 import MeetUpList from "../component/meetUp/MeetUpList";
 import { useEffect, useState } from "react";

const habi_data=[{
  id:'A1',
  title:'This is adis ababa Ethiopia',
  image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Judsk%C3%BD_lev%2C_Addis_Abeba.jpg/1024px-Judsk%C3%BD_lev%2C_Addis_Abeba.jpg',
  address:' Addis Ababa (Ethiopia).',
  description:'The Lion of Judah Monument in Addis Ababa (Ethiopia).'
},
{
  id:'B2',
  title:'This is adis ababa Ethiopia',
  image:'https://upload.wikimedia.org/wikipedia/commons/6/63/Night_view_of_Meskel_Square.jpg',
  address:' Addis Ababa (Ethiopia).',
  description:'The Lion of Judah Monument in Addis Ababa (Ethiopia).'
}]


 function AllMeetupPage(){
   const [isLoading,setisLoading]=useState(true);
   const [LoadingMeetup,setLoadingmeetup]=useState([]);

   useEffect(()=>{
    fetch('https://react-getting-started-34c41-default-rtdb.firebaseio.com/meetUp.json').then(response=>{
     return  response.json;
    }).then(data=>{
const meetups=[];
for(const key in data){
  const meetUp={
    id:key,
    ...data[key]
  };
meetups.push(meetUp);
}

      setisLoading(false);
      setLoadingmeetup(meetups);
    });
   },[])
 
  if(isLoading){
    return <section>
      <p>loading..</p>
    </section>
  }
  return( 
   <section>
     <h1>All MeetUp</h1>
    <MeetUpList meetups={habi_data}/>
   
   </section>
  );
}
export default AllMeetupPage;
