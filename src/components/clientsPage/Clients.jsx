import { useState } from "react";
import { Link } from "react-router-dom";
import fetchClients from "../../fetchClients";
import SingleClient from "./SingleClient";

const Clients = () => {
  const { dataFetchInformations } = fetchClients("http://localhost:3000/clients");
  const [searchTerm, setSearchTerm] = useState("")
  console.log(dataFetchInformations);

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
              setSearchTerm(e.target.value)
            }}
          />
          <br/>
          <Link to={"/client-register"}><button>Adicionar novo cliente</button></Link>
          <h5>Numero de clientes registrados: 48</h5>
          <div className="information-and-filters">
            <select name="filters-clients" id="filters-clients">
              <option value="">Filtrar por:</option>
              <option value="">Devendo</option>
              <option value="">Ordem Alfabética</option>
              <option value="">Maior consumidor</option>
              <option value="">Menor consumidor</option>
            </select>
          </div>
          <div className="clients-cards">
            {dataFetchInformations.filter(value => {
              if(searchTerm == ""){
                return value
              }else if(value.name.toLowerCase().includes(searchTerm.toLowerCase())){
                return value
              }
            }).map((client) => {
              return <SingleClient name={client.name} nickname={client.nickname} id={client.id} balance={client.balance} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
