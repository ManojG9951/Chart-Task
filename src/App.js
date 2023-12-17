import "./App.css";
import StreamedAreaChart from "./components/streamedAreaChart";
import SprintBarChart from "./components/sprintBarChart";
import SprintTable from "./components/sprintTable";
import CardData from "./components/cardData";

function App() {
  return (
    <div className="App">
      <StreamedAreaChart />
      <SprintBarChart />
      <SprintTable />
      <CardData />
    </div>
  );
}

export default App;
