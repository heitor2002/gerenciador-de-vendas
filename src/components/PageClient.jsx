import { useState } from "react";
import { useParams } from "react-router-dom";
import fetchClients from "../fetchClients";
import InformationClient from "./box-components/InformationClient";

const PageClient = () => {
  const { id } = useParams();
  const { clientsInformation } = fetchClients(
    "http://localhost:3000/clients/" + id
  );

  const [addressClient, setAddressClient] = useState("")

  if(clientsInformation.contact){
    const address = clientsInformation.contact.address
    console.log(address)
  }

  return (
    <>
      <div className="container">
        {clientsInformation && (
          <>
            <div className="title-page">
              <h2>{clientsInformation.name}</h2>
            </div>
            <div className="single-client">
              <h2>Informações:</h2>
              <h3>
                Apelido: <span>{clientsInformation.nickname}</span>
              </h3>
              <h3>
                Cidade: <span>Santo Anastácio</span>
              </h3>
              <h3>
                Endereço: <span>Rui Barbosa</span>,
                <span>1228</span>
              </h3>
              <h3>
                Telefone: <span>99999999</span>
              </h3>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PageClient;
