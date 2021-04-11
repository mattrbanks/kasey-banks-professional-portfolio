import React, { useRef, useEffect } from "react";
import { select } from "d3";
import * as d3 from "d3";

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
      .attr("y", (d) => yScale(d.field1))
      .attr("width", xScale1.bandwidth())
      .attr("height", (d) => {
        return height - margin.top - margin.bottom - yScale(d.field1);
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
      .attr("y", (d) => yScale(d.field2))
      .attr("width", xScale1.bandwidth())
      .attr("height", (d) => {
        return height - margin.top - margin.bottom - yScale(d.field2);
      });

    // Add the X Axis
    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
      .call(xAxis);

    // Add the Y Axis
    svg.append("g").attr("class", "y axis").call(yAxis);
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

export default BarChartThree;
