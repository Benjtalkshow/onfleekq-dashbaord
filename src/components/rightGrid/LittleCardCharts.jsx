import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const LittleCardCharts = ({ color, fill }) => {
  const [series, setSeries] = useState([
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
      color: fill, 
      fill: { type: "solid", color: fill }, 
    },
  ]);

  const [options, setOptions] = useState({
    chart: {
      height: 100,
      width: 150,
      type: "area",
      toolbar: { show: false },
      events: {
        dataPointSelection: (event, chartContext, config) => {
          setSelectedDay(config.dataPointIndex);
        },
      },
    },
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", colors: [color] },
    xaxis: {
      categories: [],
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: { show: false },
    grid: { show: false },
  });

  const [selectedDay, setSelectedDay] = useState(1);

  const updateOptions = () => {
    try {
      const newOptions = { ...options };
      newOptions.xaxis.labels.style.colors = options.xaxis.categories.map(
        (day, index) => (index === selectedDay ? "#FF0000" : "#666")
      );
      setOptions(newOptions);
    } catch (error) {
      console.error("Error updating options:", error);
    }
  };

  useEffect(() => {
    updateOptions();
  }, [selectedDay]);

  return (
    <div style={{ padding: 0, margin: 0 }}>
      <div id="chart">
        {options && series ? (
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={100}
            width={150}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default LittleCardCharts;
