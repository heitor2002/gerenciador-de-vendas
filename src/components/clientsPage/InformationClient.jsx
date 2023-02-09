import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { useParams } from "react-router-dom";

const InformationClient = (props) => {
  const { id } = useParams();
  const [clientName, setClientName] = useState("");
  const [clientNickname, setClientNickname] = useState("");
  const [clientCity, setClientCity] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [clientDistrict, setClientDistrict] = useState("");
  const [clientNumberAddress, setClientNumberAddress] = useState();
  const [clientTellNumber, setClientTellNumber] = useState();

  const activeEditProfile = () => {
    let divEditProfile = document.querySelector(".edit-profile");
    setClientName(props.name);
    setClientNickname(props.nickname);
    setClientCity(props.city);
    setClientAddress(props.address);
    setClientDistrict(props.district);
    setClientNumberAddress(props.addressNumber);
    setClientTellNumber(props.phone);
    divEditProfile.style.display = "block";
  };

  const desactiveEditProfile = () => {
    let divEditProfile = document.querySelector(".edit-profile");
    divEditProfile.style.display = "none";
  };

  const handleEditProfile = (e) => {
    e.preventDefault();
    const clientInformation = {
      clientName,
      clientNickname,
      clientCity,
      clientAddress,
      clientDistrict,
      clientNumberAddress,
      clientTellNumber,
    };
    fetch("http://localhost:3000/clients/" + id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(clientInformation)
    }).then(() => {
      console.log("Atualizado com sucesso!");
      window.location.reload()
    });
  };
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
      <button onClick={activeEditProfile}>
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
          <input
            type="text"
            value={clientNickname}
            placeholder="Apelido"
            onChange={(e) => setClientNickname(e.target.value)}
          />
          <input
            type="text"
            value={clientCity}
            onChange={(e) => setClientCity(e.target.value)}
          />
          <input
            type="text"
            value={clientAddress}
            onChange={(e) => setClientAddress(e.target.value)}
          />
          <input
            type="number"
            value={clientNumberAddress}
            onChange={(e) => setClientNumberAddress(e.target.value)}
          />
          <input
            type="text"
            value={clientDistrict}
            onChange={(e) => setClientDistrict(e.target.value)}
          />
          <input
            type="number"
            value={clientTellNumber}
            onChange={(e) => setClientTellNumber(e.target.value)}
          />
          <input type="submit" value={"Editar"} name={"acao"} />
          <button
            className="cancel-edit-profile"
            onClick={desactiveEditProfile}
          >
            Cancelar
          </button>
        </form>
      </div>
    </>
  );
};

export default InformationClient;
