import classes from './MeetupItem.module.css'

function MeetupItem(prop) {
  return (
    <li>
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
    </li>
  );
}

export default MeetupItem;
