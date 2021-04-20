import React from "react";
import Layout from "../components/layout";
import "../components/styles.css";

const ExtendedGallery = () => {
  return (
    <Layout>
      <div>
        <div className="lg:flex lg:justify-center mt-10">
          <div className="flex justify-center items-center">
            <p className="text-9xl cursive-font mr-10">My Videos</p>
          </div>

          <div>
            <img
              className="ml-10"
              src="https://github.com/mattrbanks/temp-images-repo/blob/main/watchMoviesBitmoji.png?raw=true"
            ></img>
          </div>
        </div>

        <div className="flex justify-center">
          <p className="text-xl w-1/2 font-bold">
            Welcome to my video page. The videos below highlight the span of my
            various roles over the course of my career, including my experience
            teaching students remotely; my experience facilitating data team
            meetings with teachers; my experience coaching teachers; and my
            experience setting routines with elementary students to create an
            environment for purposeful discussion.
          </p>
        </div>

        <div className="block mx-auto md:w-8/12 lg:flex lg:justify-evenly lg:w-full">
          <div
            style={{
              width: "640px",
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
            <p className="text-xl">
              I am using whiteboard.chat to virtually instruct a group of 4th
              grade students on how to divide three-digit numbers by a one-digit
              number using place value methods aligned to the standard
              algorithm.
            </p>
          </div>

          <div
            style={{
              width: "640px",
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
            <p className="text-xl">
              We are engaging in an assessment preview protocol, in order to
              plan for upcoming instruction and to meet the various needs of the
              students.
            </p>
          </div>
        </div>

        <div className="block mx-auto md:w-8/12 lg:flex lg:justify-evenly lg:w-full">
          <div
            style={{
              width: "640px",
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
            <p className="text-xl">
              I am debriefing an observation with a third-grade teacher, after
              micro-modeling a math routine. The teacher was struggling to get
              students to participate in math. My goal was to show students will
              participate in the math if it is engaging and they know the
              expectations. The teacher was given a note catcher that outlined
              our goals for the coaching cycle and took down evidence of how I
              met those goals while working with her students. This video
              highlights a portion of our debrief.
            </p>
          </div>
          <div
            style={{
              width: "640px",
              margin: "6rem 0 6rem 0",
            }}
          >
            <p className="text-2xl">
              Modeling a Number Sense Routine with 1st Graders
            </p>
            <iframe
              src="https://www.youtube.com/embed/TqmJlVvPDZU"
              width="640"
              height="480"
              title={"K-2 Module Lessons Overview"}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
            ></iframe>
            <p className="text-xl">
              This video contains highlights of a number sense routine called,
              Which One Doesn't Belong?, in a first-grade classroom. I begin by
              setting the norms and expectations for partner talk, using math
              talk moves. Students then explain their thinking to a partner and
              finally to the whole group.
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-20">
          <p className="text-xl font-bold">
            Thank you for taking the time to watch my videos.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ExtendedGallery;
