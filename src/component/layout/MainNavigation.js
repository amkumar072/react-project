import { Link } from "react-router-dom";

function MainNavigation(){
    return(
        <div>
            <h2>Headers</h2>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetings</Link>
                    </li>
                    <li>
                        <Link to='/favourite'>favourite Meetings</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Add Meeting</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default MainNavigation; 
