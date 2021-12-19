import { useHistory } from "react-router-dom";
import NewMeetupForm from "../component/meetups/NewMeetupForm";

function NewMeetup() {
  const history = useHistory();

  function AddMeetupHandler(meetup) {
    fetch(
      "https://madhankumar-projects-default-rtdb.firebaseio.com/meetup.json",
      {
        method: "POST",
        body: JSON.stringify(meetup),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return <NewMeetupForm onAddMeetup={AddMeetupHandler} />;
}

export default NewMeetup;
