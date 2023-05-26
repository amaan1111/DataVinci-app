import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer
} from "recharts";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faTable,
  faUser,
  faShoppingCart,
  faMoneyBillAlt
} from "@fortawesome/free-solid-svg-icons";
const App = () => {
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [selectedDimension, setSelectedDimension] = useState("");

  const handleDateRangeChange = (e) => {
    const { name, value } = e.target;
    setDateRange((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleDimensionChange = (e) => {
    setSelectedDimension(e.target.value);
  };

  const data = [
    { date: "2023-05-01", value: 120 },
    { date: "2023-05-02", value: 150 },
    { date: "2023-05-03", value: 200 },
    { date: "2023-05-04", value: 180 },
    { date: "2023-05-05", value: 220 },
    { date: "2023-05-06", value: 240 }
  ];

  return (
    <div className="container">
      <aside className="sidebar">
        <h2>Sidebar</h2>
        <ul>
          <li>
            <FontAwesomeIcon icon={faChartBar} />
            Menu Item 1
          </li>
          <li>
            <FontAwesomeIcon icon={faTable} />
            Menu Item 2
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} />
            Menu Item 3
          </li>
        </ul>
      </aside>
      <header>
        <h1>Dashboard</h1>
      </header>

      <main>
        <div className="scorecards">
          <div className="scorecard">
            <div className="scorecard-icon">
              <FontAwesomeIcon icon={faMoneyBillAlt} />
            </div>
            <div className="scorecard-title">Total Sales</div>
            <div className="scorecard-value">$10,000</div>
          </div>

          <div className="scorecard">
            <div className="scorecard-icon">
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
            <div className="scorecard-title">Average Order Value</div>
            <div className="scorecard-value">$50</div>
          </div>

          <div className="scorecard">
            <div className="scorecard-icon">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="scorecard-title">Unique Visitors</div>
            <div className="scorecard-value">500</div>
          </div>
          <div className="scorecard">
            <div className="scorecard-icon">
              <FontAwesomeIcon icon={faTable} />
            </div>
            <div className="scorecard-title">Conversion Rate</div>
            <div className="scorecard-value">2.5%</div>
          </div>
        </div>

        <div className="graph">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="table">
          <div className="filters">
            <input
              type="text"
              name="start"
              value={dateRange.start}
              onChange={handleDateRangeChange}
              placeholder="Start Date"
            />
            <input
              type="text"
              name="end"
              value={dateRange.end}
              onChange={handleDateRangeChange}
              placeholder="End Date"
            />

            <select value={selectedDimension} onChange={handleDimensionChange}>
              <option value="">Select Dimension</option>
              <option value="dimension1">Dimension 1</option>
              <option value="dimension2">Dimension 2</option>
            </select>
          </div>

          {/* Table */}
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Dimension</th>
                <th>Value 1</th>
                <th>Value 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data 1</td>
                <td>Data 2</td>
                <td>Data 3</td>
                <td>Data 4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default App;
