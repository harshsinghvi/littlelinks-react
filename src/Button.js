import React, { useEffect, useState } from "react";
import "./brands.css";
import { sendEvent } from "./GoogleAnalytics";
export const Button = (props) => {
  const { buttonClassName, href, name, logo } = props.link;
  const [logoSrc, setLogoSrc] = useState();

  useEffect(() => {
    if (logo)
      import(`./icons/${logo}`)
        .then((i) => setLogoSrc(i.default))
        .catch(console.log);
    else if (props.link.logoSrc) setLogoSrc(props.link.logoSrc);
  }, [logo, props.link.logoSrc]);

  const logClick = () =>
    sendEvent({
      category: "Button Click",
      action: name,
    });

  return (
    <>
      <a
        className={`button button-${buttonClassName || "default"}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={logClick}
      >
        {logoSrc && <img className="icon" src={logoSrc} alt={`${name} logo`} />}
        {name}
      </a>
    </>
  );
};
