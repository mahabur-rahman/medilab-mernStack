import React, { useState } from "react";
// react icons
import { BiFingerprint, BiGift, BiAtom } from "react-icons/bi";
// link
import { Link } from "react-router-dom";

const AboutIconBox = () => {
  const data = [
    {
      id: 1,
      icon: <BiFingerprint />,
      heading: "Conversation",
      url: "/",
      text: "We take our values into every conversation and all the work we do.",
    },
    {
      id: 2,
      icon: <BiGift />,
      heading: "Exclusive treatment",
      url: "/",
      text: "It's a part of who we are, not just what we say, and that's what makes us special.",
    },
    {
      id: 3,
      icon: <BiAtom />,
      heading: "Client trust",
      url: "/",
      text: "That's why our clients work with us long term. They know they can trust us.",
    },
  ];

  const [aboutList, setAboutList] = useState(data);

  return (
    <>
      {aboutList.map((list) => {
        const { id, icon, heading, url, text } = list;
        return (
          <div className="icon_box d-flex my-4" key={id}>
            <div className="main_icon">
              <div className="icon">
                <span>{icon}</span>
              </div>
            </div>
            <div className="about_content">
              <h4 className="title">
                <Link to={url}>{heading}</Link>
              </h4>
              <p className="description">{text}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AboutIconBox;
