import { useState } from "react";
import fetchClients from "../fetchClients";
import SingleClient from "./clientsPage/SingleClient";

const Sales = () => {
  return (
    <>
      <div className="container">
        <div className="title-page">
          <h2>Vendas</h2>
        </div>
        <div className="content-clients-page">
          <h2>Selecione o cliente para cadastrar a venda</h2>
          <input
            type="text"
            name="search-name"
            id="search-name"
            className="search-name"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <h5>Numero de clientes registrados: 48</h5>
        </div>
      </div>
    </>
  );
};

export default Sales;
