

import React, { useState, useReducer } from "react";
import axios from "axios";

interface IState {
  error: any;
  greeting: string | null;
}

const initialState: IState = {
  error: null,
  greeting: null,
};

function greetingReducer(state: IState, action: any) {
  switch (action.type) {
    case "SUCCESS": {
      return {
        error: null,
        greeting: action.greeting,
      };
    }
    case "ERROR": {
      return {
        error: action.error,
        greeting: null,
      };
    }
    default: {
      return state;
    }
  }
}

function FetchGreeting(): JSX.Element {
  const [{ error, greeting }, dispatch] = useReducer(
    greetingReducer,
    initialState
  );
  const [buttonClicked, setButtonClicked] = useState(false);
  const fetchGreeting = async () => {
    axios
      .get("/greeting")
      .then((response: any) => {
        const { data } = response;
        const { greeting } = data;
        dispatch({ type: "SUCCESS", greeting });
        setButtonClicked(true);
      })
      .catch((error: any) => {
        dispatch({ type: "ERROR", error });
      });
  };
  const buttonText = buttonClicked ? "Ok" : "Load Greeting";

  return (
    <div>
      <button onClick={fetchGreeting} disabled={buttonClicked}>
        {buttonText}
      </button>
      {greeting && <h1>{greeting}</h1>}
      {error && <p data-testid='alert'>Oops, failed to fetch!</p>}
    </div>
  );
}


export default FetchGreeting;