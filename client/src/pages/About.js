import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Watcher"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          We Watcher, the online watch shopping app understand the Importance of your Fashion needs and bring up accessories that would complement your attire in every way. It is a one-stop fashion destination for you that gives you options to choose from a wide range of collectibles that covers Watches, Smartwatches and much more. Our online watch shopping store is user-friendly and lets you find your desired fashion accessory in few clicks. Experience a seamless payment and delivery process with us. We accept payments through Credit, Debit and Net Banking..
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
