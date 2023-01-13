import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Sales from "./components/Sales";
import Clientes from "./components/clientsPage/Clients";
import Stock from "./components/Stock";
import Analytics from "./components/Analytics";
import PageClient from "./components/clientsPage/PageClient";
import Requests from "./components/requestPage/Requests";
import FormRequests from "./components/requestPage/FormRequests";
import SingleRequestPage from "./components/requestPage/SingleRequestPage";
import "./styles/main.css";
import NotFound from "./components/NotFound";

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
              <Route path="/requests/:id" element={<SingleRequestPage />}/>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
