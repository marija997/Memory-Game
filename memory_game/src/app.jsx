import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "./pages/game";
import Home from "./pages/home";
import ScoreBoard from "./pages/scoreBoard";
import "font-awesome/css/font-awesome.min.css";

const App = () => {
  return (
    <div id={`app`}>
      <Router>
        <Switch>
          <Route exact path={`/`} component={Home}></Route>
          <Route path={`/game`} component={Game}></Route>
          <Route path={`/score-board`} component={ScoreBoard}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
