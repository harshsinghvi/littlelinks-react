import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import data from "./data.json";
import { Avatar } from "./Avatar";
import { Button } from "./Button";

export const Home = () => {
  const [avatarSrc, setAvatarSrc] = useState();
  const [avatar2XSrc, setAvatar2XSrc] = useState();
  const [links, setLinks] = useState([]);

  useEffect(() => {
    if (data.avatar)
      import(`./icons${data.avatar}`).then((avatar) =>
        setAvatarSrc(avatar.default)
      );
    else if (data.avatar_url) setAvatarSrc(data.avatar_url);

    if (data.avatar_2x)
      import(`./icons${data.avatar_2x}`).then((avatar_2x) =>
        setAvatar2XSrc(avatar_2x.default)
      );
    else if (data.avatar_2x_url) setAvatar2XSrc(data.avatar_2x_url);

    // For Priorities setting
    // data.links.sort((a, b) => {
    //   return b.priority - a.priority;
    // });

    setLinks(data.links);
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="column" style={{ marginTop: "12%" }}>
          <Avatar src={avatarSrc} srcSet={avatar2XSrc} alt={data.avatar_alt} />
          <h1>{`${data.name}`}</h1>
          <p>{data.bio}</p>
          {links.map((link, index) => {
            if (link.hidden) return null;
            return (
              <>
                <Button link={link} key={index} /> <br />
              </>
            );
          })}
          <br />
          <div>
            <p className="footer">
              Made With ❤️ by{" "}
              <a href="https://harshsinghvi.com" target="_blank" rel="noopener">
                Harsh Singhvi
              </a>
              , Forked from{" "}
              <a href="https://littlelink.io" target="_blank" rel="noopener">
                LittleLink
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// export const NotFound = () => {
//   return <Redirect to="/" />;
// };
