import React, { useState } from "react";
import "./App.css";

import FetchGreeting from "./components/ReducerComp";
import MainViewTranslate from "./components/MainViewTranslate";
import UpperInput from "./components/UpperInput";
import HiddenMessage from "./components/HiddenMessage";

function App(): JSX.Element {
  return (
    <div className="App">
      <HiddenMessage initialShow={false}/>
      <FetchGreeting />
      <MainViewTranslate />
      <UpperInput />
    </div>
  );
}

export default App;
