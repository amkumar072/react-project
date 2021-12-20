import { useContext } from "react";
import { Link } from "react-router-dom";
import FavouriteContext from "../../store/favourite-context";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const favouriteCtx = useContext(FavouriteContext);

  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logo}>React Meetup</div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Meetings</Link>
            </li>
            <li>
              <Link to="/new-meetup">Add Meeting</Link>
            </li>
            <li>
              <Link to="/favourite">
                My Favourite
                <span className={classes.badge}>
                  {favouriteCtx.totalFavourites}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default MainNavigation;
