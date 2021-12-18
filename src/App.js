import "./App.css";
import { Route, Switch } from "react-router-dom";
import AllMeetup from "./pages/AllMeetup";
import FavouriteMeetup from "./pages/FavouriteMeetup";
import NewMeetup from "./pages/NewMeetup";
import MainNavigation from "./component/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation/>
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
