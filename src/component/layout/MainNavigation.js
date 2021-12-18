import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css'

function MainNavigation(){
    return(
        <div>
            <header className={classes.header}> 
            <div className={classes.logo}>React Meetup</div>
            <nav >
                <ul>
                    <li>
                        <Link to='/'>All Meetings</Link>
                    </li>
                    <li>
                        <Link to='/favourite'>Favourite Meetings</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Add Meeting</Link>
                    </li>
                </ul>
            </nav>
            </header>
        </div>
    )
}

export default MainNavigation; 
