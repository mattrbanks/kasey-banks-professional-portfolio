import React from "react";
import Layout from "../components/layout";

const ExtendedGallery = () => {
  return (
    <Layout>
      <div>
        <div className="container mx-auto p-8">
          <div className="flex flex-row flex-wrap -mx-2">
            <div className="w-full md:w-1/2 h-64 md:h-auto mb-4 px-2">
              <a
                className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                href="#"
                title="Link"
                style={{
                  backgroundImage:
                    "url('https://github.com/mattrbanks/temp-images-repo/blob/main/image%20(1).png?raw=true')",
                }}
              >
                Link
              </a>
            </div>
            <div className="w-full md:w-1/2 mb-4 px-2">
              <div className="flex flex-col sm:flex-row md:flex-col -mx-2">
                <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 mb-4 sm:mb-0 md:mb-4 px-2">
                  <a
                    className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                    href="#"
                    title="Link"
                    style={{
                      backgroundImage:
                        "url('https://github.com/mattrbanks/temp-images-repo/blob/main/image%20(2).png?raw=true')",
                    }}
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:flex lg:justify-evenly w-full">
              <div
                style={{
                  width: "640px",
                  height: "480px",
                  position: "relative",
                  margin: "6rem 0 6rem 0",
                }}
              >
                <div className="w-full text-center">
                  <p className="text-2xl">
                    Virtually Modeling Math For 4th Graders
                  </p>
                </div>
                <iframe
                  src="https://www.youtube.com/embed/AxTeYRTzY8s"
                  width="640"
                  height="480"
                  title={"K-2 Module Lessons Overview"}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder="0"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  allowFullScreen
                ></iframe>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    position: "absolute",
                    opacity: 0,
                    right: "0px",
                    top: "0px",
                  }}
                >
                  &nbsp;
                </div>
                <p className="text-xl">
                  I am using whiteboard.chat to virtually instruct a group of
                  4th grade students on how to divide three-digit numbers by a
                  one-digit number using place value methods aligned to the
                  standard algorithm.
                </p>
              </div>

              <div
                style={{
                  width: "640px",
                  height: "480px",
                  position: "relative",
                  margin: "6rem 0 6rem 0",
                }}
              >
                <p className="text-2xl">
                  Facilitating a Data Team Meeting with 3rd Grade Teachers
                </p>
                <iframe
                  src="https://www.youtube.com/embed/-nn6d4oKBH8"
                  width="640"
                  height="480"
                  title={"K-2 Module Lessons Overview"}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder="0"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  allowFullScreen
                ></iframe>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    position: "absolute",
                    opacity: 0,
                    right: "0px",
                    top: "0px",
                  }}
                >
                  &nbsp;
                </div>
                <p className="text-xl">
                  We are engaging in an assessment preview protocol, in order to
                  plan for upcoming instruction and to meet the various needs of
                  the students.
                </p>
              </div>
            </div>

            <div className="lg:flex lg:justify-evenly w-full">
              <div
                style={{
                  width: "640px",
                  height: "480px",
                  position: "relative",
                  margin: "6rem 0 6rem 0",
                }}
              >
                <p className="text-2xl">
                  Coaching Cycle Routine: Debrief after Micro-Modeling
                </p>
                <iframe
                  src="https://www.youtube.com/embed/rL6BbeNNeRI"
                  width="640"
                  height="480"
                  title={"K-2 Module Lessons Overview"}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder="0"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  allowFullScreen
                ></iframe>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    position: "absolute",
                    opacity: 0,
                    right: "0px",
                    top: "0px",
                  }}
                >
                  &nbsp;
                </div>
                <p className="text-xl">
                  I am debriefing an observation with a third-grade teacher,
                  after micro-modeling a math routine. The teacher was
                  struggling to get students to participate in math. My goal was
                  to show students will participate in the math if it is
                  engaging and they know the expectations. The teacher was given
                  a note catcher that outlined our goals for the coaching cycle
                  and took down evidence of how I met those goals while working
                  with her students. This video highlights a portion of our
                  debrief.
                </p>
              </div>
              <div
                style={{
                  width: "640px",
                  height: "480px",
                  position: "relative",
                  margin: "6rem 0 6rem 0",
                }}
              >
                <p className="text-2xl">Jargon Title</p>
                <iframe
                  src="https://drive.google.com/file/d/0B5FyHSpwBHIzakNxNlNLMVAwZDg/preview"
                  width="640"
                  height="480"
                  title={"K-2 Module Lessons Overview"}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder="0"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  allowFullScreen
                ></iframe>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    position: "absolute",
                    opacity: 0,
                    right: "0px",
                    top: "0px",
                  }}
                >
                  &nbsp;
                </div>
                <p className="text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat eos nihil, consectetur ab asperiores dolore sequi
                  inventore doloremque quis iure ut ratione, eius nisi eum illo
                  iusto laboriosam modi praesentium?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExtendedGallery;
