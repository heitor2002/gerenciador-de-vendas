import reactLogo from "./assets/react.svg";
import Home from "./components/Home";
import Header from "./components/Header";
import Sales from "./components/Sales";
import Requests from "./components/Requests";
import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Clientes from "./components/Clients";
import Stock from "./components/Stock";
import Analytics from "./components/Analytics";
import PageClient from "./components/PageClient";
import FormRequests from "./components/FormRequests";

function App() {
  return (
    <>
      <Router>
        <div className="flex-panel-content">
          <Header />
          <div className="panel-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/clients" element={<Clientes />} />
              <Route path="/stock" element={<Stock />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/clientes/:id" element={<PageClient />} />
              <Route path="/requests/form-requests" element={<FormRequests />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
