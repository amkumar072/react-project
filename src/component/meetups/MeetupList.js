import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(prop) {
  return (
    <div>
      <ul className={classes.list}>
        {prop.meetups.map((meetup) => {
          return (
            <MeetupItem
              key={meetup.id}
              id={meetup.id}
              image={meetup.image}
              title={meetup.title}
              description={meetup.description}
              address={meetup.address}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default MeetupList;
