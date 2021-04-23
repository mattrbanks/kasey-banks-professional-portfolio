import * as React from "react";
import Layout from "../components/layout";
import playbutton from "../images/playbutton.svg";
import "../components/styles.css";
import BarChartOne from "../components/barChartOne";
import BarChartTwo from "../components/barChartTwo";
import BarChartThree from "../components/barChartThree";
import kaseyheaderfigmaps from "../images/kaseyheaderfigmaps.png";
import ImageReusable from "../components/imageReusable";

//import SEO from "../components/seo";

const IndexPage = () => {
  const [videoPlay, setVideoPlay] = React.useState(false);

  return (
    <Layout>
      <main className="overflow-hidden">
        <title>BHI Home</title>
        {videoPlay ? (
          <div className="main-header-img relative">
            <div style={{ paddingTop: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/rL6BbeNNeRI?autoplay=1&muted=1"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
              ></iframe>
            </div>
            <div
              onClick={() => {
                setVideoPlay(false);
              }}
              className="text-white text-sm bg-gray-900 absolute right-0 cursor-pointer py-1.5 px-2.5 rounded-full border"
            >
              Switch back to header image
            </div>
          </div>
        ) : (
          <div className="main-header-img relative">
            {/* <img src={kaseyheaderfigmaps} className="main-header-img" /> */}
            <ImageReusable
              alt=""
              filename="kaseyheaderfigmapsconvertedsvgtopng.png"
            />
            <div className="w-full flex justify-center items-center">
              <img
                onClick={() => {
                  setVideoPlay(true);
                }}
                style={{ top: "45%" }}
                className="w-12 sm:w-16 md:w-20 lg:w-32 mx-3 my-2 cursor-pointer absolute"
                alt="mb logo"
                src={playbutton}
              />
            </div>
          </div>
        )}

        <div className="text-center">
          <p className="text-6xl mt-10 cursive-font">Who am I?</p>
        </div>

        <div className="text-left">
          <div className="block lg:flex lg:justify-center lg:items-center mx-4">
            <div className="flex justify-center w-full">
              <img
                className="max-w-xsm lg:max-w-md"
                src="https://github.com/mattrbanks/temp-images-repo/blob/main/whoamibitmoji.png?raw=true"
              />
            </div>
            <p className="lg:pr-20 xl:pr-80 text-xl">
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

        <div>
          <div className="text-center">
            <p className="text-6xl mt-10 mb-10 cursive-font mx-2">
              What can I do for you? Here are some numbers.
            </p>
          </div>
          <div className="my-10">
            <BarChartOne />
            <BarChartTwo />
            <BarChartThree />
          </div>
          <div className="flex justify-center">
            <img src="https://github.com/mattrbanks/temp-images-repo/blob/main/offthechartsbitmoji.png?raw=true" />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
