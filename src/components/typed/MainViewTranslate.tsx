import * as React from "react";
import {
  Trans,
  withTranslation,
} from "react-i18next";


const MainViewTranslate = withTranslation()((props) => {
  return (
    <React.Fragment>
      <div className="App-header">
        <button onClick={() => props.i18n?.changeLanguage("pt")}>pt</button>
        <button onClick={() => props.i18n?.changeLanguage("en")}>en</button>
      </div>
      <h1>
        <Trans>Welcome to React</Trans>
      </h1>
    </React.Fragment>
  );
});

export default MainViewTranslate