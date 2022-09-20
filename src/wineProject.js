import React from "react";
import ReactEcharts from "echarts-for-react";
import { wineData } from "./Wine-Data";
export default function WineProject() {

  // Scatter Chart
  
  let scatterChartData = wineData.map((val) => [
    val["Color intensity"],
    val.Hue,
  ]);
  let scatterChart = {
    xAxis: { type: "value" ,name:'Color Intensity' },
    yAxis: { type: "value" ,name:'Hue' },
    series: [
      {
        symbolSize: 20,
        data: scatterChartData,
        type: "scatter",
      },
    ],
  };

  // Bar chart

  // for Alcohal type 1
  let barChartAlc1 = wineData.filter((val) => val.Alcohol === 1);
  let barChartAlc1MalicData = barChartAlc1.map((val) => val["Malic Acid"]);
  let barChartAlc1MalicDataSum = barChartAlc1MalicData.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
  });
  let barChartAlc1MalicDataAvg =
    barChartAlc1MalicDataSum / (barChartAlc1MalicData.length + 1);
  // for Alcohal type 2
  let barChartAlc2 = wineData.filter((val) => val.Alcohol === 2);
  let barChartAlc2MalicData = barChartAlc2.map((val) => val["Malic Acid"]);
  let barChartAlc2MalicDataSum = barChartAlc2MalicData.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
  });
  let barChartAlc2MalicDataAvg =
    barChartAlc2MalicDataSum / (barChartAlc2MalicData.length + 1);
  // for Alcohal type 3
  let barChartAlc3 = wineData.filter((val) => val.Alcohol === 3);
  let barChartAlc3MalicData = barChartAlc3.map((val) => val["Malic Acid"]);
  let barChartAlc3MalicDataSum = barChartAlc3MalicData.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
  });
  let barChartAlc3MalicDataAvg =
    barChartAlc3MalicDataSum / (barChartAlc3MalicData.length + 1);

  let barChart = {
    xAxis: {
      type: "category",
      data: [1, 2, 3],
      name:'Alcohol Category'
    },
    yAxis: {
      type: "value",
      name:'Average of Malic Acid'
    },
    series: [
      {
        data: [
          barChartAlc1MalicDataAvg,
          barChartAlc2MalicDataAvg,
          barChartAlc3MalicDataAvg,
        ],
        type: "bar"
      },
    ],
  };
  return (
    <>
      <ReactEcharts option={scatterChart} />
      <ReactEcharts option={barChart} />
    </>
  );
}
