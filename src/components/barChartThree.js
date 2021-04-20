import React, { useRef, useEffect, useState } from "react";
import { select } from "d3";
import * as d3 from "d3";
import VisibilitySensor from "react-visibility-sensor";

const BarChartThree = () => {
  let models = [
    {
      model_name: "Focus",
      field1: 67,
      field2: 100,
    },
    {
      model_name: "Coherence",
      field1: 54,
      field2: 79,
    },
    {
      model_name: "Mathematical Representations",
      field1: 38,
      field2: 95,
    },
    {
      model_name: "Productive Struggle",
      field1: 36,
      field2: 85,
    },
  ];
  models = models.map((i) => {
    i.model_name = i.model_name;
    return i;
  });

  const svgRef = useRef();

  const [visibility, setVisibility] = useState(false);

  const insertLinebreaks = function (d) {
    var el = d3.select(this);
    var words = d.split(" ");
    el.text("");

    for (var i = 0; i < words.length; i++) {
      var tspan = el.append("tspan").text(words[i]);
      if (i > 0) tspan.attr("x", 0).attr("dy", "15");
    }
  };

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
      .style("fill", "orange")
      .attr("x", (d) => xScale1("field1"))
      .attr("y", (d) => yScale(0))
      .attr("width", xScale1.bandwidth())
      .attr("height", (d) => {
        return height - margin.top - margin.bottom - yScale(0);
      });

    /* Add field2 bars */
    model_name
      .selectAll(".bar.field2")
      .data((d) => [d])
      .enter()
      .append("rect")
      .attr("class", "bar field2")
      .style("fill", "purple")
      .attr("x", (d) => xScale1("field2"))
      .attr("y", (d) => yScale(0))
      .attr("width", xScale1.bandwidth())
      .attr("height", (d) => {
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
      .attr("cx", 200)
      .attr("cy", 30)
      .attr("r", 6)
      .style("fill", "orange");
    svg
      .append("circle")
      .attr("cx", 200)
      .attr("cy", 60)
      .attr("r", 6)
      .style("fill", "purple");
    svg
      .append("text")
      .attr("x", 220)
      .attr("y", 30)
      .text("Year 1")
      .style("font-size", "15px")
      .attr("alignment-baseline", "middle");
    svg
      .append("text")
      .attr("x", 220)
      .attr("y", 60)
      .text("Year 2")
      .style("font-size", "15px")
      .attr("alignment-baseline", "middle");

    // insert line breaks for x axis
    svg.selectAll("g.x.axis g text").each(insertLinebreaks);
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
      <div className="flex justify-center items-center w-full h-80">
        <VisibilitySensor
          onChange={(isVisible) => {
            setVisibility(isVisible);
            console.log(visibility);
          }}
        >
          <svg
            style={{ width: 500 }}
            className="my-20 block overflow-visible bg-white w-auto h-80"
            ref={svgRef}
          ></svg>
        </VisibilitySensor>
      </div>
    </React.Fragment>
  );
};

export default BarChartThree;
