import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
};
const About = () => {
  return (
    <div>
      This is the about page. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Tempora veritatis, incidunt beatae quisquam blanditiis nihil
      consequuntur sit esse quaerat eveniet explicabo eaque quidem corrupti
      laudantium eos adipisci voluptates, provident nobis!
    </div>
  );
};

export default About;
