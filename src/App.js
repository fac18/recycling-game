import React from "react";
import { Route, Switch } from "react-router-dom";
import Error from "./components/Error/Error";
import GameScreen from "./components/GameScreen/GameScreen";
import ResultScreen from "./components/ResultScreen/ResultScreen";
import LandingScreen from "./components/LandingScreen/LandingScreen";
// import { showFunFactsModal, hideFunFactsModal } from "./utils/functions";

function App() {
  const showFunFactsModal = () => {
    setFunFactsModal(!funFactsModal);
  };

  const hideFunFactsModal = () => {
    setFunFactsModal(!funFactsModal);
  };

  const showHowToPlayModal = () => {
    setHowToPlayModal(!howToPlayModal);
    console.log("This is inside show modal function ");
  };

  const hideHowToPlayModal = () => {
    setHowToPlayModal(!howToPlayModal);
  };

  const [count, setCount] = React.useState(0);
  const [funFactsModal, setFunFactsModal] = React.useState(false);
  const [howToPlayModal, setHowToPlayModal] = React.useState(false);
  const [badCount, setBadCount] = React.useState(0);

  return (
    <main className="App">
    
      <Switch>
        {/* setting game screen as home for code review */}
        <Route
          path="/"
          render={() => (
            <LandingScreen
              funFactsModal={funFactsModal}
              setFunFactsModal={setFunFactsModal}
              showFunFactsModal={showFunFactsModal}
              hideFunFactsModal={hideFunFactsModal}
              hideHowToPlayModal={hideHowToPlayModal}
              showHowToPlayModal={showHowToPlayModal}
              howToPlayModal={howToPlayModal}
              setHowToPlayModal={setHowToPlayModal}
            />
          )}
          exact
        />
        <Route
          path="/game"
          render={() => (
            <GameScreen
              count={count}
              setCount={setCount}
              badCount={badCount}
              setBadCount={setBadCount}
              hideHowToPlayModal={hideHowToPlayModal}
              showHowToPlayModal={showHowToPlayModal}
              howToPlayModal={howToPlayModal}
              setHowToPlayModal={setHowToPlayModal}
              funFactsModal={funFactsModal}
              setFunFactsModal={setFunFactsModal}
              showFunFactsModal={showFunFactsModal}
              hideFunFactsModal={hideFunFactsModal}
            />
          )}
        />
        <Route
          path="/results"
          render={() => (
            <ResultScreen
              count={count}
              setCount={setCount}
              funFactsModal={funFactsModal}
              setFunFactsModal={setFunFactsModal}
              showFunFactsModal={showFunFactsModal}
              hideFunFactsModal={hideFunFactsModal}
              badCount={badCount}
              setBadCount={setBadCount}
            />
          )}
        />
        <Route component={Error} />
      </Switch>
      
    </main>
  );
}

export default App;
