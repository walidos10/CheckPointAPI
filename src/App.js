import "./App.css";
import UserList from "./components/UserList";
import { Route, Switch } from "react-router-dom";
import UserById from "./components/UserById";

function App() {
  return (
    <div className="body">
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route path="/user/:id" render={(props) => <UserById {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
