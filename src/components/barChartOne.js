import React, { useRef, useEffect, useState } from "react";
import { select, color } from "d3";
import * as d3 from "d3";
import VisibilitySensor from "react-visibility-sensor";

const BarChartOne = () => {
  let models = [
    {
      model_name: "Reading",
      field1: 44.4,
      field2: 57.9,
    },
    {
      model_name: "Math",
      field1: 66.7,
      field2: 84.2,
    },
  ];
  models = models.map((i) => {
    i.model_name = i.model_name;
    return i;
  });

  const svgRef = useRef();

  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    const svg = select(svgRef.current),
      width = 500,
      height = 300,
      margin = { top: 30, right: 20, bottom: 30, left: 50 },
      barPadding = 0.2,
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
    yScale.domain([0, 100]);

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
      .style("fill", "blue")
      .on("mouseover", function (d, i) {
        d3.select(this).style("fill", d3.rgb(color("blue")).darker(2));

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
        d3.select(this).style("fill", d3.rgb(color("blue")).darker(2));

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
        d3.select(this).style("fill", color("blue"));

        d3.select("#ID").remove();
      })
      .on("touchend", function () {
        d3.select(this).style("fill", color("blue"));

        d3.select("#ID").remove();
      })
      .attr("x", () => xScale1("field1"))
      .attr("y", () => yScale(0))
      .attr("width", xScale1.bandwidth())
      .attr("height", () => {
        return height - margin.top - margin.bottom - yScale(0);
      });

    /* Add field2 bars */
    model_name
      .selectAll(".bar.field2")
      .data((d) => [d])
      .enter()
      .append("rect")
      .attr("class", "bar field2")
      .style("fill", "red")
      .on("mouseover", function (d, i) {
        d3.select(this).style("fill", d3.rgb(color("red")).darker(2));

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
        d3.select(this).style("fill", d3.rgb(color("red")).darker(2));

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
        d3.select(this).style("fill", color("red"));

        d3.select("#ID").remove();
      })
      .on("touchend", function () {
        d3.select(this).style("fill", color("red"));

        d3.select("#ID").remove();
      })
      .attr("x", () => xScale1("field2"))
      .attr("y", () => yScale(0))
      .attr("width", xScale1.bandwidth())
      .attr("height", () => {
        return height - margin.top - margin.bottom - yScale(0);
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
      .style("fill", "blue");
    svg
      .append("circle")
      .attr("cx", 245)
      .attr("cy", 270)
      .attr("r", 6)
      .style("fill", "red");
    svg
      .append("text")
      .attr("x", 70)
      .attr("y", 270)
      .text("Grade-Level Average")
      .style("font-size", "15px")
      .attr("alignment-baseline", "middle");
    svg
      .append("text")
      .attr("x", 265)
      .attr("y", 270)
      .text("My Class Average")
      .style("font-size", "15px")
      .attr("alignment-baseline", "middle");
  }, []);

  useEffect(() => {
    const svg = select(svgRef.current),
      width = 500,
      height = 300,
      margin = { top: 30, right: 20, bottom: 30, left: 50 },
      barPadding = 0.2,
      axisTicks = { qty: 5, outerSize: 0, dateFormat: "%m-%d" };

    const yScale = d3
      .scaleLinear()
      .range([height - margin.top - margin.bottom, 0]);

    yScale.domain([0, 100]);

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
      <div className="block mx-auto sm:w-8/12 xl:flex xl:justify-center xl:items-center w-full">
        <VisibilitySensor
          onChange={(isVisible) => {
            setVisibility(isVisible);
            console.log(visibility);
          }}
        >
          <svg
            style={{ width: 500 }}
            className="xl:my-20 block overflow-visible bg-white w-auto h-80 m-auto"
            ref={svgRef}
          ></svg>
        </VisibilitySensor>
        <div className="max-w-md text-left m-auto">
          <figcaption className="my-10">
            Fig.1 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Soluta minus ad maxime cum, blanditiis minima? Minima placeat
            quisquam cum, quae reiciendis dolore voluptate eius aliquid. Illo
            sunt asperiores officiis quia?
          </figcaption>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BarChartOne;
