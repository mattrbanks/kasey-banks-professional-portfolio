import React, { useRef, useEffect, useState } from "react";
import { select, color } from "d3";
import * as d3 from "d3";
import VisibilitySensor from "react-visibility-sensor";

const BarChartTwo = () => {
  let models = [
    {
      model_name: "Student1",
      field1: 184,
      field2: 200,
    },
    {
      model_name: "Student2",
      field1: 175,
      field2: 186,
    },
    {
      model_name: "Student3",
      field1: 180,
      field2: 187,
    },
    {
      model_name: "Student4",
      field1: 180,
      field2: 191,
    },
    {
      model_name: "Student5",
      field1: 179,
      field2: 191,
    },
    {
      model_name: "Student6",
      field1: 175,
      field2: 189,
    },
  ];
  models = models.map((i) => {
    i.model_name = i.model_name;
    return i;
  });

  const svgRef = useRef();

  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    const svg = select(svgRef.current).attr("viewBox", `0 0 500 300`),
      width = 500,
      height = 300,
      margin = { top: 30, right: 20, bottom: 30, left: 50 },
      barPadding = 0.4,
      axisTicks = { qty: 5, outerSize: 0, dateFormat: "%m-%d" };

    const xScale0 = d3
      .scaleBand()
      .range([0, width - margin.left - margin.right])
      .padding(barPadding);
    const xScale1 = d3.scaleBand();
    const yScale = d3
      .scaleLinear()
      .range([height - margin.top - margin.bottom, 0]);

    const xAxis = d3.axisBottom(xScale0).tickSizeOuter(axisTicks.outerSize);
    const yAxis = d3
      .axisLeft(yScale)
      .ticks(axisTicks.qty)
      .tickSizeOuter(axisTicks.outerSize);

    xScale0.domain(models.map((d) => d.model_name));
    xScale1.domain(["field1", "field2"]).range([0, xScale0.bandwidth()]);
    yScale.domain([160, 205]);

    const model_name = svg
      .selectAll(".model_name")
      .data(models)
      .enter()
      .append("g")
      .attr("class", "model_name")
      .attr("transform", (d) => `translate(${xScale0(d.model_name)},0)`);

    /* Add field1 bars */
    model_name
      .selectAll(".bar.field1")
      .data((d) => [d])
      .enter()
      .append("rect")
      .attr("class", "bar field1")
      .style("fill", "black")
      .on("mouseover", function (d, i) {
        d3.select(this).style("fill", d3.hcl(color("black")).brighter(2));

        let y = d3.select(this).attr("y");
        let x = d3.select(this).attr("x");

        svg
          .append("text")
          .attr("id", "ID")
          .attr("x", x + 5)
          .attr("y", y)
          .text(i.field1)
          .style("font-size", "10px")
          .attr("alignment-baseline", "middle");
      })
      .on("touchstart", function (d, i) {
        d3.select(this).style("fill", d3.hcl(color("black")).brighter(2));

        let y = d3.select(this).attr("y");
        let x = d3.select(this).attr("x");

        svg
          .append("text")
          .attr("id", "ID")
          .attr("x", 5)
          .attr("y", y)
          .text(i.field1)
          .style("font-size", "10px")
          .attr("alignment-baseline", "middle");
      })
      .on("mouseout", function (d, i) {
        d3.select(this).style("fill", color("black"));

        d3.select("#ID").remove();
      })
      .on("touchend", function () {
        d3.select(this).style("fill", color("black"));

        d3.select("#ID").remove();
      })
      .attr("x", (d) => xScale1("field1"))
      .attr("y", (d) => yScale(160))
      .attr("width", xScale1.bandwidth())
      .attr("height", (d) => {
        return height - margin.top - margin.bottom - yScale(160);
      });

    /* Add field2 bars */
    model_name
      .selectAll(".bar.field2")
      .data((d) => [d])
      .enter()
      .append("rect")
      .attr("class", "bar field2")
      .style("fill", "green")
      .on("mouseover", function (d, i) {
        d3.select(this).style("fill", d3.rgb(color("green")).darker(2));

        let y = d3.select(this).attr("y");
        let x = d3.select(this).attr("x");

        svg
          .append("text")
          .attr("id", "ID")
          .attr("x", 5)
          .attr("y", y)
          .text(i.field2)
          .style("font-size", "10px")
          .attr("alignment-baseline", "middle");
      })
      .on("touchstart", function (d, i) {
        d3.select(this).style("fill", d3.rgb(color("green")).darker(2));

        let y = d3.select(this).attr("y");
        let x = d3.select(this).attr("x");

        svg
          .append("text")
          .attr("id", "ID")
          .attr("x", 5)
          .attr("y", y)
          .text(i.field2)
          .style("font-size", "10px")
          .attr("alignment-baseline", "middle");
      })
      .on("mouseout", function () {
        d3.select(this).style("fill", color("green"));

        d3.select("#ID").remove();
      })
      .on("touchend", function () {
        d3.select(this).style("fill", color("green"));

        d3.select("#ID").remove();
      })
      .attr("x", (d) => xScale1("field2"))
      .attr("y", (d) => yScale(160))
      .attr("width", xScale1.bandwidth())
      .attr("height", (d) => {
        return height - margin.top - margin.bottom - yScale(160);
      });

    // Add the X Axis
    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
      .call(xAxis);

    // Add the Y Axis
    svg.append("g").attr("class", "y axis").call(yAxis);

    // Legend
    svg
      .append("circle")
      .attr("cx", 50)
      .attr("cy", 270)
      .attr("r", 6)
      .style("fill", "black");
    svg
      .append("circle")
      .attr("cx", 145)
      .attr("cy", 270)
      .attr("r", 6)
      .style("fill", "green");
    svg
      .append("text")
      .attr("x", 70)
      .attr("y", 270)
      .text("Fall")
      .style("font-size", "15px")
      .attr("alignment-baseline", "middle");
    svg
      .append("text")
      .attr("x", 165)
      .attr("y", 270)
      .text("Winter")
      .style("font-size", "15px")
      .attr("alignment-baseline", "middle");
  }, []);

  useEffect(() => {
    const svg = select(svgRef.current).attr("viewBox", `0 0 500 300`),
      width = 500,
      height = 300,
      margin = { top: 30, right: 20, bottom: 30, left: 50 },
      barPadding = 0.2,
      axisTicks = { qty: 5, outerSize: 0, dateFormat: "%m-%d" };

    const yScale = d3
      .scaleLinear()
      .range([height - margin.top - margin.bottom, 0]);

    yScale.domain([160, 205]);

    // Animation
    if (visibility === true) {
      svg
        .selectAll(".bar.field1")
        .transition()
        .duration(800)
        .attr("y", (d) => yScale(d.field1))
        .attr("height", (d) => {
          return height - margin.top - margin.bottom - yScale(d.field1);
        })
        .delay(function (d, i) {
          console.log(i);
          return i * 100;
        });

      svg
        .selectAll(".bar.field2")
        .transition()
        .duration(800)
        .attr("y", (d) => yScale(d.field2))
        .attr("height", (d) => {
          return height - margin.top - margin.bottom - yScale(d.field2);
        })
        .delay(function (d, i) {
          console.log(i);
          return i * 100;
        });
    }
  }, [visibility]);

  return (
    <React.Fragment>
      <div className="text-center underline font-bold">
        <h3>Intervention Data: MAP Math Fall vs Winter Score Comparison</h3>
      </div>
      <div className="block mx-auto sm:w-8/12 xl:flex xl:justify-center xl:items-center">
        <VisibilitySensor
          onChange={(isVisible) => {
            setVisibility(isVisible);
            console.log(visibility);
          }}
        >
          <svg
            style={{ maxWidth: 500 }}
            className="ml-6 my-10 block overflow-visible bg-white xl:mx-auto"
            ref={svgRef}
          ></svg>
        </VisibilitySensor>
        <div className="max-w-md text-left m-auto">
          <figcaption className="my-10">
            Fig.2 - This graph represents data from my time working with
            students in intervention groups. At the time, I was working with six
            students. The goal was to increase each student’s Fall MAP math
            score by at least seven points by winter. All students met the goal
            and the class average of points increased was eleven.
          </figcaption>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BarChartTwo;
