import { useState } from "react";
import { Link } from "react-router-dom";
import fetchClients from "../../fetchClients";
import SingleClient from "../clientsPage/SingleClient";
import CardSingleClientSales from "./CardSingleClientSales";

const Sales = () => {
  const ports = {
    data: 3000,
    stock: 5000
  }
  const { dataFetchInformations } = fetchClients(
    `http://localhost:${ports.data}/clients`
  );
  const [searchTerm, setSearchTerm] = useState("");
  console.log(dataFetchInformations);

  return (
    <>
      <div className="container">
        <div className="title-page">
          <h2>Página de vendas</h2>
        </div>
        <div className="content-clients-page">
          <h2>Selecione o cliente</h2>
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
          <div className="clients-cards">
            {dataFetchInformations
              .filter((value) => {
                if (searchTerm == "") {
                  return value;
                } else if (
                  value.clientName.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((client) => {
                return (
                  <CardSingleClientSales
                    name={client.clientName}
                    nickname={client.clientNickname}
                    id={client.id}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sales;
