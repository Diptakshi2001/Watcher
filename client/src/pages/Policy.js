import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Our Privacy Policy</p>
          
          <p>Note: It is subject to change at any time without notice. To make sure you are aware of any changes.</p>
          <p>We WATCHER , take data privacy & security very seriously and work hard to ensure that we are fully compliant with the various regulations dealing with privacy. We wont sell user information to anyone other than the consent compelled by law to do so.</p>
          <p>TERMS AND CONDITIONS BY USING THIS PLATFORM YOU INDICATE YOUR UNDERSTANDING AND ACCEPTANCE OF THESE TERMS.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
