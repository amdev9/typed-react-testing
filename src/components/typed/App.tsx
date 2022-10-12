import React, { useState } from "react";
import "./App.css";

import FetchGreeting from "./ReducerComp";
import MainViewTranslate from "./MainViewTranslate";
import UpperInput from "./UpperInput";
import HiddenMessage from "./HiddenMessage";

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
