import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "../styles/global.css";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [offsetY, setOffsetY] = React.useState();

  function scrollPosition() {
    setOffsetY(window.scrollY);
  }

  if (typeof window !== `undefined`) {
    window.addEventListener("scroll", scrollPosition);
  }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      </div>
      <div className="w-full h-64 px-4 py-4">
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
