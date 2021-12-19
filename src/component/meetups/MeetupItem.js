import { useContext } from "react";
import FavouriteContext from "../../store/favourite-context";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(prop) {
  const favouriteCtx = useContext(FavouriteContext);

  const itemIsFavourite = favouriteCtx.itemIsFavourite(prop.id);

  function toggleHandler() {
    if (itemIsFavourite) {
      favouriteCtx.removeFavourite(prop.id);
    } else {
      favouriteCtx.addFavourite({
        id: prop.id,
        title: prop.title,
        address: prop.address,
        image: prop.image,
        description: prop.description,
      });
    }
  }

  return (
    <Card>
      <div className={classes.image}>
        <img src={prop.image} alt={prop.title}></img>
      </div>
      <div className={classes.content}>
        <h2>{prop.title}</h2>
        <address>{prop.address} </address>
        <p>{prop.description}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={toggleHandler}>
          {itemIsFavourite ? "Remove Favourite" : "To Favourite"}
        </button>
      </div>
    </Card>
  );
}

export default MeetupItem;
