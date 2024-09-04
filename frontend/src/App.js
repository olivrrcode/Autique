import Layout from "./layout/Layout";
import Buy from "./pages/Buy";
import LandingPage from "./pages/LandingPage";
import Sell from "./pages/Sell";
import "./global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import Events from "./pages/Events";
import Merch from "./pages/Merch";
import Account from "./pages/Account";

function App() {
  return (
    <Router>
      <div className="app">
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} exact />
            <Route path="/buy" element={<Buy />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/events" element={<Events />} />
            <Route path="/merchandise" element={<Merch />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
