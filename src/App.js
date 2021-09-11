import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import data from "./data.json";
import { ExternalRedirect } from "./ExternalRedirect";
import { Home, NotFound } from "./Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {data.links.map((link, index) => (
        <ExternalRedirect
          exact
          key={index}
          path={link.source}
          target={link.href}
        />
      ))}
      <Route exact path="" component={NotFound} />
    </Switch>
  );
};
function App() {
  useEffect(() => {
    (async () => {
      if (data.title) document.title = data.title;
      if (data.meta) {
        document
          .querySelector("meta[name='description']")
          .setAttribute("content", data.meta.description);
        document
          .querySelector("meta[name='author']")
          .setAttribute("content", data.meta.author);
      }

      if (data.favicon) {
        const logo = await import(`./icons/${data.favicon}`).catch(console.log);
        document.getElementById("favicon").href = logo.default;
      } else if (data.faviconSrc)
        document.getElementById("favicon").href = data.faviconSrc;
    })();
  }, []);

  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
