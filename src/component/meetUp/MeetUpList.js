import MeetUpitem from './MeetUpitem';
import classes from './MeetUplist.module.css'

function MeetUpList(props){
 return (
    <ul className={classes.list}>
        {props.meetups.map(meetup=> <MeetUpitem
         key={meetup}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
          />)}
    </ul>  
 );


}
export default MeetUpList;