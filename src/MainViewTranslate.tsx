// @ts-nocheck 

import * as React from "react";
import {
  initReactI18next,
  Trans,
  withTranslation,
} from "react-i18next";


const LangMain = withTranslation()((props) => {
  return (
    <React.Fragment>
      <div className="App-header">
        <button onClick={() => props.i18n.changeLanguage("pt")}>pt</button>
        <button onClick={() => props.i18n.changeLanguage("en")}>en</button>
      </div>
      <h1>
        <Trans>Welcome to React</Trans>
      </h1>
    </React.Fragment>
  );
});

export default LangMain