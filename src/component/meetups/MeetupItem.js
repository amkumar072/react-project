import Card from '../ui/Card';
import classes from './MeetupItem.module.css'

function MeetupItem(prop) {
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
        <button>Favourite</button>
      </div>
    </Card>
  );
}

export default MeetupItem;
