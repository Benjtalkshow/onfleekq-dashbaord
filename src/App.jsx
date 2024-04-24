import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DashboardLayout from "./components/layouts/DashboardLayout";
import { Charts, Dashboard, Feedback, NotFound, Wallet } from "./pages";

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/chart" element={<Charts />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
