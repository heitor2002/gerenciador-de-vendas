import { useState } from "react";
import { Link } from "react-router-dom";
import fetchClients from "../../fetchClients";
import SingleClient from "./SingleClient";

const Clients = () => {
  const ports = {
    data: 3000,
    stock: 5000,
  };
  const { dataFetchInformations } = fetchClients(
    `http://localhost:${ports.data}/clients`
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [filterClient, setFilterClient] = useState("");

  var lengthClients = dataFetchInformations.length;

  const clientsInformations = dataFetchInformations.sort((x, y) => {
    let a = x.clientName.toUpperCase(),
      b = y.clientName.toUpperCase();
    if (filterClient === "alphabet") {
      return a == b ? 0 : a > b ? 1 : -1;
    }
  });

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
            <select
              name="filters-clients"
              id="filters-clients"
              value={filterClient}
              onChange={(e) => setFilterClient(e.target.value)}
            >
              <option value="">Ordenar por:</option>
              <option value="debit">Devendo</option>
              <option value="alphabet">Ordem Alfabética</option>
              <option value="more">Maior consumidor</option>
              <option value="less">Menor consumidor</option>
            </select>
          </div>
          <div className="clients-cards">
            {clientsInformations
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
                    status={client.status}
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
