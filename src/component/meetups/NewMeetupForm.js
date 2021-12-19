import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(prop) {
  const inputTitle = useRef();
  const inputImage = useRef();
  const inputAddress = useRef();
  const inputDescription = useRef();

  function SubmitHandler(event) {
    event.preventDefault();

    const meetupData = {
      title: inputTitle.current.value,
      image: inputImage.current.value,
      address: inputAddress.current.value,
      description: inputDescription.current.value,
    };

    prop.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={SubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="title"> Title</label>
          <input type="text" required id="title" ref={inputTitle} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image"> Image</label>
          <input type="url" required id="image" ref={inputImage} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address"> Address</label>
          <input type="text" required id="address" ref={inputAddress} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description"> Description</label>
          <textarea id="description" required rows="5" ref={inputDescription} />
        </div>
        <div className={classes.actions}>
          <button>Add Meeting</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
