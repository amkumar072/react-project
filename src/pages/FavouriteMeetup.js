import { useContext } from "react";
import MeetupList from "../component/meetups/MeetupList";
import FavouriteContext from "../store/favourite-context";

function FavouriteMeetup() {
  const favouriteCtx = useContext(FavouriteContext);

  let content;

  if (favouriteCtx.totalFavourites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favouriteCtx.favourites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavouriteMeetup;
