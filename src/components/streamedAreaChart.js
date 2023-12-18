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
import data from "../mokeData/mokeData";

const StreamedAreaChart = () => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      console.log(payload);
      return (
        <div className="streamedChartMain">
          <p className="streamedLabelName">{`${payload[1].payload.label}`}</p>
          <div className="streamedChartTextArea">
            <p>{`Issue Open`}</p>
            <p>{`${Math.round(payload[2].value[1])}d`}</p>
          </div>
          <div className="streamedChartTextArea">
            <p>{`Issue Started`}</p>
            <p>{`${Math.round(payload[1].value[1])}d`}</p>
          </div>
          <div className="streamedChartTextArea">
            <p>{`Issue Completed`}</p>
            <p>{`${Math.round(payload[0].value[1])}d`}</p>
          </div>
        </div>
      );
    }

    return null;
  };
  return (
    <div className="mainContainer">
      <div className="chartContainer">
        <div className="sprintsHeaderContainer">
          <h6 className="sprints_text">Total Lead Time:35 days(Avg)</h6>

          <h6 className="sprints_text">Total Cycle Time:33 days(Avg)</h6>
        </div>
        <div className="chartMainContainer">
          <ResponsiveContainer width="80%" height={450}>
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis
                label={{
                  value: "Story Point(Days)",
                  angle: -90,
                  position: "insideLeft",
                }}
                ticks={[0, 10, 20, 30, 40, 50, 60]}
              />
              <Tooltip content={<CustomTooltip />} />

              <Area
                type="monotone"
                dataKey="IssueCompleted"
                stroke=" var(--accentColor)"
                fill=" var(--accentColor)"
              />
              <Area
                type="monotone"
                dataKey="IssueStarted"
                stroke="var(--secondaryColor)"
                fill="var(--secondaryColor)"
              />
              <Area
                type="monotone"
                dataKey="issueOpen"
                stroke="var(--primaryColor)"
                fill="var(--primaryColor)"
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
