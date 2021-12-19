import { useEffect, useState } from "react";
import MeetupList from "../component/meetups/MeetupList";

function AllMeetup() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetupData, setMeetupData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://madhankumar-projects-default-rtdb.firebaseio.com/meetup.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const meetups = [];

        for (let key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setMeetupData(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <section>
      <h1> All Meetup</h1>
      <MeetupList meetups={meetupData} />
    </section>
  );
}

export default AllMeetup;
