import fetchClients from "../fetchClients";
import SingleClient from "./box-components/SingleClient";

const Clients = () => {
  const { clientsInformation } = fetchClients("http://localhost:3000/clients");
  console.log(clientsInformation);

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
          />
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
            {clientsInformation.map((client) => {
              return <SingleClient name={client.name} nickname={client.nickname} id={client.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
