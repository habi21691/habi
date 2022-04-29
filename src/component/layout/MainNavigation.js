import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';

function MainNavigation(){
    return (
    <header className={classes.header}>
        <div className={classes.logo}>React Meetup</div>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link to='/'>All MeetUp</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>New Meetup</Link>
                </li>
                <li>
                    <Link to='/favourit'> My Favourite</Link>
                </li>
            </ul>
        </nav>
    </header>);
}
export default MainNavigation;