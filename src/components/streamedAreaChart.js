// StreamedAreaChart.js
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import data from "../moke data/streamedAreaChartData";

const StreamedAreaChart = () => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      console.log(payload);
      return (
        <div className="streamedChartMain">
          <p className="streamedLabelName">{`${payload[1].payload.label}`}</p>
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
        </div>
      );
    }

    return null;
  };
  return (
    <div className="mainContainer">
      <div className="chartContainer">
        <div className="storyPointText">
          <p>{`story point(days)`}</p>
        </div>
        <div className="chartMainContainer">
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />

              <Area
                type="monotone"
                dataKey="IssueCompleted"
                stackId="1"
                stroke="#3498db"
                fill="white"
              />
              <Area
                type="monotone"
                dataKey="IssueStarted"
                stackId="1"
                stroke="#2ecc71"
                fill="#2ecc71"
              />
              <Area
                type="monotone"
                dataKey="IssueOpen"
                stackId="1"
                stroke="#e67e22"
                fill="#e67e22"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div>
        <p style={{ color: "grey" }}>Hours In Avg</p>
      </div>
      <div className="chartIndicatorsContainer">
        <div className="chartIndicators">
          <div className="Icon issueOpenIcon" />
          <p>IssueOpen</p>
        </div>
        <div className="chartIndicators">
          <div className="Icon issueStartedIcon" />
          <p>IssueStarted</p>
        </div>
        <div className="chartIndicators">
          <div className="Icon issueCompletedIcon" />
          <p>IssueCompleted</p>
        </div>
      </div>
    </div>
  );
};

export default StreamedAreaChart;
