import { createContext, useState } from "react";

const FavouriteContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (meetup) => {},
  removeFavourite: (meetupId) => {},
  itemIsFavourite: (meetupId) => {},
});

export function FavouriteContextProvider(props) {
  const [userFavourite, setUserFavourite] = useState([]);

  function addFavouriteHandler(meetup) {
    setUserFavourite((preFavourites) => {
      return preFavourites.concat(meetup);
    });
  }

  function removeFavouriteHandler(meetupId) {
    setUserFavourite((preFavourites) => {
      return preFavourites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavouriteHandler(meetupId) {
    return userFavourite.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favourites: userFavourite,
    totalFavourites: userFavourite.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler,
  };

  return (
    <FavouriteContext.Provider value={context}>
      {props.children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteContext;
