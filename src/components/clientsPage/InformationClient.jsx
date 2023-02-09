import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";

const InformationClient = (props) => {
  const handleEditProfile = (e) => {
    e.preventDefault();
  };

  const [clientName, setClientName] = useState(clientInformation.clientName);
  // const [clientNickname, setClientNickname] = useState("");
  // const [clientCity, setClientCity] = useState("");
  // const [clientAddress, setClientAddress] = useState("");
  // const [clientDistrict, setClientDistrict] = useState("");
  // const [clientNumberAddress, setClientNumberAddress] = useState();
  // const [clientTellNumber, setClientTellNumber] = useState();
  return (
    <>
      <h2>Informações:</h2>
      <h3>
        Apelido: <span>{props.nickname}</span>
      </h3>
      <h3>
        Cidade: <span>{props.city}</span>
      </h3>
      <h3>
        Endereço: <span>{props.address}</span>,
        <span> {props.addressNumber}</span>
      </h3>
      <h3>
        Bairro: <span>{props.district}</span>
      </h3>
      <h3>
        Telefone: <span>{props.phone}</span>
      </h3>
      <button>
        Editar:
        <AiFillEdit />
      </button>
      <div className="edit-profile">
        <form onSubmit={handleEditProfile}>
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
          {/* <input type="text" value={clientNickname} placeholder="Apelido" />
          <input type="text" value={clientCity} />
          <input type="text" value={clientAddress} />
          <input type="number" value={clientNumberAddress} />
          <input type="text" value={clientDistrict} />
          <input type="number" value={clientTellNumber} /> */}
          <input type="submit" value={"Editar"} name={"acao"} />
          <button className="cancel-edit-profile">Cancelar</button>
        </form>
      </div>
    </>
  );
};

export default InformationClient;
