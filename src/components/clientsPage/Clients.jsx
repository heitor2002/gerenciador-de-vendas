import { useState } from "react";
import { Link } from "react-router-dom";
import fetchClients from "../../fetchClients";
import SingleClient from "./SingleClient";

const Clients = () => {
  const ports = {
    clients: 3000,
    paymentHistory: 3500,
    requests: 4000,
    sales: 4500,
    stock: 5000,
  };
  const { dataFetchInformations } = fetchClients(
    `http://localhost:${ports.clients}/clients`
  );

  // const { dataFetchInformations: sales} = fetchClients("http://localhost:4500/sales")
  // const { dataFetchInformations: paymentHistory } = fetchClients("http://localhost:3500/paymentHistory")

  const [searchTerm, setSearchTerm] = useState("");
  const [filterClient, setFilterClient] = useState("alphabet")

  var lengthClients = dataFetchInformations.length;

  // const alphabetOrder = dataFetchInformations.sort((x, y) => {
  //   let a = x.clientName.toUpperCase(),
  //     b = y.clientName.toUpperCase();
  //   return a == b ? 0 : a > b ? 1 : -1;
  // });

  const normalOrder = dataFetchInformations;

  var order = normalOrder;

  return (
    <>
      <div className="container">
        <div className="title-page">
          <h2>Visualizar clientes</h2>
        </div>
        <div className="content-clients-page">
          <h2>Consultar cliente</h2>
          <input
            type="text"
            name="search-name"
            id="search-name"
            className="search-name"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <br />
          <Link to={"/client-register"}>
            <button>Adicionar novo cliente</button>
          </Link>
          <h5>Numero de clientes registrados: {lengthClients}</h5>
          <div className="information-and-filters">
            <select name="filters-clients" id="filters-clients" value={filterClient} onChange={(e) => setFilterClient(e.target.value)}>
              <option value="">Filtrar por:</option>
              <option value="debit">Devendo</option>
              <option value="alphabet">Ordem Alfabética</option>
              <option value="more">Maior consumidor</option>
              <option value="less">Menor consumidor</option>
            </select>
          </div>
          <div className="clients-cards">
            {normalOrder
              .filter((value) => {
                if (searchTerm == "") {
                  return value;
                } else if (
                  value.clientName
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((client) => {
                return (
                  <SingleClient
                    name={client.clientName}
                    nickname={client.clientNickname}
                    id={client.id}
                    status={client.balance}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
