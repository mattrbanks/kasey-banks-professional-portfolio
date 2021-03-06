import React from "react";
import Layout from "../components/layout";
import ContactForm from "../components/contact-form";
import SEO from "../components/seo";

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="w-full mt-10 mb-28">
        <ContactForm />
      </div>
    </Layout>
  );
};

export default Contact;
