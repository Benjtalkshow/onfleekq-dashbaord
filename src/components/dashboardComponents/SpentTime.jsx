import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const SpentTime = () => {
  const [series, setSeries] = useState([
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100]
    }
  ]);

  const [options, setOptions] = useState({
    chart: {
      height: 200,
      type: "area",
      toolbar: {
        show: false 
      },
      events: {
        dataPointSelection: (event, chartContext, config) => {
          setSelectedDay(config.dataPointIndex);
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      labels: {
        style: {
          colors: ["#666", "#666", "#666", "#666", "#666", "#666", "#666"]
        },
        offsetX: 0,
        offsetY: 5,
        style: {
          fontSize: '14px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          cursor: 'pointer'
        }
      }
    },
    yaxis: {
      show: false
    },
    grid: {
      show: false
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm"
      }
    }
  });

  const [selectedDay, setSelectedDay] = useState(1); // Default to Monday

  const updateOptions = () => {
    try {
      const newOptions = { ...options };
      newOptions.xaxis.labels.style.colors = options.xaxis.categories.map((day, index) => (index === selectedDay ? "#FF0000" : "#666"));
      setOptions(newOptions);
    } catch (error) {
      console.error("Error updating options:", error);
    }
  };

  useEffect(() => {
    updateOptions();
  }, [selectedDay]);

  return (
    <section className={`w-full h-fit rounded-lg bg-background pb-2 px-[2px]`} >
      <div className="rounded-lg bg-white">
        <div>
          <div id="chart">
            {options && series ? (
              <ReactApexChart options={options} series={series} type="area" height={200} />
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpentTime;