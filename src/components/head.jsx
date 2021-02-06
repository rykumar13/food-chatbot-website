import React from "react";
import { Helmet } from "react-helmet";
import favicon from "./../images/favicons/favicon.ico";
import favicon16x16 from "./../images/favicons/favicon-16x16.png";
import favicon32x32 from "./../images/favicons/favicon-32x32.png";
import androidIcon192x192 from "./../images/favicons/android-chrome-192x192.png";
import androidIcon512x512 from "./../images/favicons/android-chrome-512x512.png";
import appleIcon180x180 from "./../images/favicons/apple-touch-icon.png";

const Head = () => {
  return (
    <Helmet>
      <html lang="en" prefix="og: http://ogp.me/ns#" />
      <title>food-chatbot</title>

      <link rel="shortcut icon" href={favicon} />
      <link rel="canonical" href="https://food-chatbot.netlify.app/" />
      <link rel="apple-touch-icon" sizes="180x180" href={appleIcon180x180} />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href={androidIcon512x512}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href={androidIcon192x192}
      />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />

    </Helmet>
  );
};

export default Head;
