import React from "react";
//import LandingScreen from "./components/LandingScreen/LandingScreen";
import { Route, Switch } from "react-router-dom";
import Error from "./components/Error/Error";
import GameScreen from "./components/GameScreen/GameScreen";
import ResultScreen from "./components/ResultScreen/ResultScreen";

function App() {

  const [count, setCount] = React.useState(0);

  return (
    <main className="App">
      <Switch>
        {/* setting game screen as home for code review */}
        {/* <Route path="/" component={LandingScreen} exact /> */}
        <Route
          path="/"
          render={() => (
            <GameScreen count={count} setCount={setCount} />
          )}
          exact
        />
        {/* <Route path="/game" component={GameScreen} /> */}
        <Route
          path="/results"
          render={() => (
            <ResultScreen count={count} setCount={setCount} />
          )}
        />
        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
