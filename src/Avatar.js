import React from "react";

import "./Avatar.css";

export const Avatar = (props) => (
  <img
    className="avatar"
    src={props.src}
    srcSet={props.srcSet}
    alt={props.alt}
  />
);
