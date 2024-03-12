/** @format */

import React from "react";

import { PiSubtitlesBold } from "react-icons/pi";
import { Steps } from "antd";
const SetPost = () => (
  <Steps
    current={0}
    items={[
      {
        title: "Login",

        icon: <PiSubtitlesBold />,
        content: "First-content",
      },
      {
        title: "Verification",
      },
      {
        title: "Pay",
      },
      {
        title: "Done",
      },
    ]}
  />
);
export default SetPost;
