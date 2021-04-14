import React, { useRef, useEffect } from "react";
import { select } from "d3";
import * as d3 from "d3";

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
      .attr("x", (d) => xScale1("field1"))
      //   .attr("y", (d) => yScale(d.field1))
      .attr("y", (d) => yScale(0))
      .attr("width", xScale1.bandwidth())
      //   .attr("height", (d) => {
      //     return height - margin.top - margin.bottom - yScale(d.field1);
      //   })
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
      .style("fill", "red")
      .attr("x", (d) => xScale1("field2"))
      //   .attr("y", (d) => yScale(d.field2))
      .attr("y", (d) => yScale(0))
      .attr("width", xScale1.bandwidth())
      //   .attr("height", (d) => {
      //     return height - margin.top - margin.bottom - yScale(d.field2);
      //   })
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

    // Animation
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

    // Legend
    svg
      .append("circle")
      .attr("cx", 200)
      .attr("cy", 30)
      .attr("r", 6)
      .style("fill", "blue");
    svg
      .append("circle")
      .attr("cx", 200)
      .attr("cy", 60)
      .attr("r", 6)
      .style("fill", "red");
    svg
      .append("text")
      .attr("x", 220)
      .attr("y", 30)
      .text("Grade-Level Average")
      .style("font-size", "15px")
      .attr("alignment-baseline", "middle");
    svg
      .append("text")
      .attr("x", 220)
      .attr("y", 60)
      .text("My Class Average")
      .style("font-size", "15px")
      .attr("alignment-baseline", "middle");
  }, []);

  return (
    <React.Fragment>
      <div className="flex justify-center items-center w-full h-80">
        <svg
          style={{ width: 500 }}
          className="my-20 block overflow-visible bg-white w-auto h-80"
          ref={svgRef}
        ></svg>
      </div>
    </React.Fragment>
  );
};

export default BarChartOne;
