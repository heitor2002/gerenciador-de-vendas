import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";

const InformationClient = (props) => {
  const handleEditProfile = (e) => {
    e.preventDefault()
  }

  const [clientName, setClientName] = useState(`${props.name}`);
  const [clientNickname, setClientNickname] = useState(`${props.nickname}`);
  const [clientCity, setClientCity] = useState(`${props.city}`);
  const [clientAddress, setClientAddress] = useState(`${props.address}`);
  const [clientDistrict, setClientDistrict] = useState(`${props.district}`);
  const [clientNumberAddress, setClientNumberAddress] = useState(`${props.addressNumber}`);
  const [clientTellNumber, setClientTellNumber] = useState(`${props.phone}`);
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
      <h3>Bairro: <span>{props.district}</span></h3>
      <h3>
        Telefone: <span>{props.phone}</span>
      </h3>
      <button>Editar:<AiFillEdit /></button>
      <div className="edit-profile">
        <form onSubmit={handleEditProfile}>
          <input type="text" value={clientName}/>
        </form>
      </div>
    </>
  );
};

export default InformationClient;
