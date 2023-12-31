import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import data from "../mokeData/mokeData";
import "../styles/sprintBarChart.css";

const SprintBarChart = () => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      console.log(payload);
      return (
        <div className="streamedChartMain">
          {/* <p className="legend-name">Custom Title</p> */}
          <p className="streamedLabelName">{`(${payload[1].payload.date})`}</p>
          <div className="streamedChartTextArea">
            <p>{`${payload[0].dataKey}`}</p>
            <p>{`${payload[0].value}`}</p>
          </div>
          <div className="streamedChartTextArea">
            <p>{`${payload[1].dataKey}`}</p>
            <p>{`${payload[1].value}`}</p>
          </div>
          <div className="streamedChartTextArea">
            <p>{`${payload[2].dataKey}`}</p>
            <p>{`${payload[2].value}`}</p>
          </div>
          <div className="streamedChartTextArea">
            <p>{`SP Forecast`}</p>
            <p>{`${payload[0].payload.SPForecast}`}</p>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="mainContainer">
      <div className="chartContainer">
        <BarChart
          width={800}
          height={350}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="sprint" />
          <YAxis
            label={{
              value: "Story Point(SP)",
              angle: -90,
              position: "insideLeft",
            }}
            ticks={[0, 50, 100, 150, 200]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="SPPlanned"
            stackId="1"
            fill="var(--accentColor"
            barSize={20}
          />
          <Bar
            dataKey="SPadded"
            stackId="1"
            fill="var(--secondaryColor)"
            radius={[25, 25, 0, 0]}
          />
          <Bar
            dataKey="SPCompleted"
            stackId="2"
            fill="var(--primaryColor)"
            barSize={20}
            radius={[25, 25, 0, 0]}
          />
          <Bar
            dataKey="SPForecast"
            stackId="2"
            fill="var(--highlightColor)"
            barSize={20}
            radius={[25, 25, 0, 0]}
          />
        </BarChart>
      </div>
      <div>
        <p style={{ color: "grey" }}>Sprints</p>
      </div>
      <div className="chartIndicatorsContainer">
        <div className="chartIndicators">
          <div className="Icon spPlannedIcon" />
          <p>SP Planned</p>
        </div>
        <div className="chartIndicators">
          <div className="Icon spAddedIcon" />
          <p>SP Added</p>
        </div>
        <div className="chartIndicators">
          <div className="Icon spCompletedIcon" />
          <p>SP Completed</p>
        </div>
        <div className="chartIndicators">
          <div className="Icon spForecastIcon" />
          <p>SP Forecast</p>
        </div>
      </div>
    </div>
  );
};

export default SprintBarChart;
