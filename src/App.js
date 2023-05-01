import "./App.css";
import { Chart } from "react-google-charts";
export const data = [
  ["Food", "Protein (g) per 100g"],
  ["Vital wheat gluten", 75.2],
  ["Seaweed (dried)", 57.4],
  ["Hemp seeds", 31.6],
  ["Peanuts", 25.8],
  ["Almonds", 21.1],
  ["Pistachio nuts", 20.2],
  ["Tempeh", 18.5],
  ["Pumpkin seeds", 18.5],
  ["Flaxseed", 18.3],
  ["Sesame seeds", 17.7],
  ["Oats", 16.9],
  ["Chia seeds", 16.5],
  ["Cashew", 15.3],
  ["Walnut", 15.2],
  ["Hazelnut", 14.9],
  ["Brazil nut", 14.3],
  ["Pine nuts", 13.7],
  ["Soybeans", 12.4],
  ["Buckwheat groats", 11.7],
  ["Rye grain", 10.3],
];

function App() {
  return (
    <div className="App">
      <h1>Top 20 Plant-Based Sources of Protein</h1>
      <Chart chartType="ColumnChart" width="100%" height="600px" data={data} />
    </div>
  );
}

export default App;
