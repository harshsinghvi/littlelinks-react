import { Route } from "react-router-dom";

export const ExternalRedirect = (props) => {
  return (
    <Route
      {...props}
      render={() => {
        window.location.replace(props.target);
        return null;
      }}
    />
  );
};
