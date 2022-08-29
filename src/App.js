// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// global scss
import "./global.scss";
// comp
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import View from "./components/View/View";
import Edit from "./components/Edit/Edit";
import AllDataShow from "./components/AllDataShow/AllDataShow";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={AllDataShow} />
        <Route path="/register" component={Register} />
        <Route path="/view/:id" component={View} />
        <Route path="/edit/:id" component={Edit} />
      </Switch>
    </>
  );
};

export default App;
