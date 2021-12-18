import "./App.css";
import { Route, Switch } from "react-router-dom";
import AllMeetup from "./pages/AllMeetup";
import FavouriteMeetup from "./component/FavouriteMeetup";
import NewMeetup from "./component/NewMeetup";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <AllMeetup />
        </Route>

        <Route path="/favourite" >
          <FavouriteMeetup />
        </Route>

        <Route path="/new-meetup" >
          <NewMeetup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
