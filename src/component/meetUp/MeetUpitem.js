 import Card from '../ui/Card';
import classes from './MeetUpitem.module.css'

function MeetUpitem(props){
    return (
   <li className={classes.item}>
       <Card>
       <div className={classes.image}>
           <img src={props.image} alt={props.title}/>
       </div>
       <div className={classes.content}>
           <h2>{props.title}</h2>
           <address>{props.address}</address>
           <p>{props.description}</p>
       </div>
       <div className={classes.action}>
           <button className={classes.btn}> To My Favourite</button>
       </div>

       </Card>
      
   </li>

    );
}
export default MeetUpitem;