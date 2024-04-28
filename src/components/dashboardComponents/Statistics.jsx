import React from "react";
import Chart from "react-apexcharts";
import { colors } from "../../lib/colors";


function Statistics() {
  const series = [
    {
      data: [
        { x: "Nov", y: [2, 4, 1, 4.5] },
        { x: "", y: [2, 4, 1, 4.5] },
        { x: "", y: [2, 4, 1, 4] },
        { x: "Dec", y: [4, 4, 2, 1] },
        { x: "", y: [2, 4, 1, 4.5] },
        { x: "", y: [2, 4, 1, 4] },
        { x: "Jan", y: [2, 4, 1, 4] },
        { x: "", y: [2, 4, 1, 4.5] },
        { x: "", y: [2, 4, 1, 4] },
        { x: "Feb", y: [4, 4, 1, 2] },
        { x: "", y: [2, 4, 1, 4.5] },
        { x: "", y: [2, 4, 1, 4] },
        { x: "Mar", y: [2, 3, 1, 2.8] },
        { x: "", y: [2, 4, 1, 4.5] },
        { x: "", y: [2, 4, 1, 4] },
        { x: "Apr", y: [2.8, 5, 1, 5] },
        { x: "", y: [2, 4, 1, 4.5] },
        { x: "", y: [2, 4, 1, 4] },
        { x: "May", y: [5, 5, 0, 2] },
        { x: "", y: [2, 4, 1, 4.5] },
        { x: "", y: [2, 4, 1, 4] },
        { x: "Jun", y: [2, 4.5, 1, 3] },
      ],
    },
  ];

  const options = {
    chart: {
      type: "candlestick",
      height: 400, // Increased height to 400
      toolbar: {
        show: false, // Hide the toolbar
      },
    },
    xaxis: {
      type: "category",
      categories: [
        "Nov",
        "",
        "",
        "Dec",
        "",
        "",
        "Jan",
        "",
        "",
        "Feb",
        "",
        "",
        "Mar",
        "",
        "",
        "Apr",
        "",
        "",
        "May",
        "",
        "",
        "Jun",
      ],
      lines: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      max: 5,
      stepSize: 1,
      labels: {
        formatter: (value) => `${value}k`,
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: colors.primary,
          downward: colors.secondary,
        },
        wick: {
          useFillColor: false,
          color: "#FF0000", // Change the color of the wick
        },
        barWidth: 5, // Reduce the width of the candlestick
        borderRadius: 5, // Change the border radius of the candlestick
      },
    },
    grid: {
      show: false,
    },
    exporting: {
      enabled: false, // Remove export button
    },
  };

  return (
    <div className="w-full mt-5 bg-background rounded-lg text-center pb-2 px-[2px]">
      <div className="bg-background rounded-lg">
        <div className="px-3 pt-5 flex justify-between items-center">
          <h1 className="font-semibold text-lg text-black text-left">
            Statistics
          </h1>

          <select className="bg-white text-primary rounded-2xl outline-none cursor-pointer py-2 px-6">
            <option value="year">Year</option>
            <option value="month">Month</option>
          </select>
        </div>
        <Chart options={options} series={series} type="candlestick" />
      </div>
    </div>
  );
}

export default Statistics;
