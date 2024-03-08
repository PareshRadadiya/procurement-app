import React from "react";
import ReactApexChart from "react-apexcharts";

const SemiDonutChart = ({ chartData }) => {
  const { series, labels, colors } = chartData;

  const options = {
    chart: {
      type: "donut",
      offsetY: 20,
    },
    labels: labels,
    colors: colors,
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 10,
      },
    },
    grid: {
      padding: {
        bottom: -20,
      },
    },
    legend: {
      show: true,
      floating: true,
      position: "bottom",
      offsetY: -60,
      offsetX: 0,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        width: 16,
        height: 16,
        radius: 5,
      },
      formatter: function (seriesName, opts) {
        return [seriesName, " - ", opts.w.globals.series[opts.seriesIndex]];
      },
      itemMargin: {
        vertical: 0,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        return opts.w.config.series[opts.seriesIndex];
      },
      style: {
        colors: ["#fff"],
      },
    },
  };

  return (
    <div>
      <ReactApexChart options={options} series={series} type="donut" height="280" />
    </div>
  );
};

export default SemiDonutChart;
