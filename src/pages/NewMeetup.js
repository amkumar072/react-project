import NewMeetupForm from "../component/meetups/NewMeetupForm";

function NewMeetup() {
  function AddMeetupHandler(meetup) {
    console.log(" add", meetup);

    fetch(
      "https://madhankumar-projects-default-rtdb.firebaseio.com/meetup.json",
      {
        method: "POST",
        body: JSON.stringify(meetup),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return <NewMeetupForm onAddMeetup={AddMeetupHandler} />;
}

export default NewMeetup;
