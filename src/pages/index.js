import * as React from "react";
import Layout from "../components/layout";
import playbutton from "../images/playbutton.svg";
import "../components/styles.css";

//import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <main className="overflow-hidden">
        <title>BHI Home</title>
        {/* <div className="h-screen bg-main-img bg-center bg-cover relative flex justify-center items-center"> */}
        {/* <div className="h-screen bg-main-img bg-center bg-cover relative flex justify-center items-center">
          <img
            className="w-32 mx-3 my-2 cursor-pointer"
            alt="mb logo"
            src={playbutton}
          />
        </div> */}
        <div className="main-header-img relative">
          <img
            src="https://raw.githubusercontent.com/mattrbanks/temp-images-repo/5848e09072dbae54a9583ecbecb9d4f721fbbfb2/kaseyheaderfigmaps.svg"
            className="main-header-img"
          />
          <div className="w-full flex justify-center">
            <img
              style={{ top: "45%" }}
              className="w-32 mx-3 my-2 cursor-pointer absolute"
              alt="mb logo"
              src={playbutton}
            />
          </div>
        </div>

        <div className="text-center">
          <p className="text-6xl mt-10">Who am I?</p>
        </div>

        <div className="text-left">
          <div className="block lg:flex lg:justify-center lg:items-center mx-10">
            <img
              className="max-w-sm lg:max-w-md"
              src="https://github.com/mattrbanks/temp-images-repo/blob/main/cutOutkaseyClean.png?raw=true"
            />
            <p className="lg:pr-80 text-xl">
              Welcome to my professional portfolio. Let me tell you a bit about
              myself...
              <br />
              <br />
              My career began in 2003 in sunny Florida as a kindergarten
              teacher. I learned how to explicitly break down content,
              instructions, and expectations for students. From there, I moved
              back to my home state of Connecticut and began teaching 3rd grade
              for Hartford Public Schools (HPS). There I honed my skills at
              differentiation, through progress monitoring and data analysis,
              and social emotional learning. After 10 years in the classroom, I
              started looking for leadership opportunities. The opportunity came
              and I started working at SAND School in Hartford as a Curriculum
              Specialist for grades K-5. During my time there, I shifted my
              focus to math instruction. In 2018, I became a district math coach
              for HPS and have been collaborating with teachers, ever since, to
              improve math achievement in Hartford. I am currently in the
              process of certifying for the Intermediate Administrator
              Certification (092).
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-6xl mt-10">
            What can I do for you? Here are some numbers.
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
