import React, { useEffect, useState } from "react";
import "./brands.css";
export const Button = (props) => {
  const { buttonClassName, href, name, logo } = props.link;
  const [logoSrc, setLogoSrc] = useState();
  
  useEffect(() => {
    if (logo) import(`./icons/${logo}`).then((i) => setLogoSrc(i.default));
  }, [logo]);
  
  console.log({ buttonClassName, href, name, logo });
  return (
    <>
      <a
        className={`button button-${buttonClassName || "default"}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {logoSrc && <img className="icon" src={logoSrc} alt={`${name} logo`} />}
        {name}
      </a>
    </>
  );
};
