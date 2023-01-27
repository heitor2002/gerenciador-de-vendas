import { useState } from "react";

const ClientRegisterPage = () => {
  const [clientName, setClientName] = useState("");
  const [clientNickname, setClientNickname] = useState("");
  const [clientCity, setClientCity] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [clientDistrict, setClientDistrict] = useState("");
  const [clientNumberAddress, setClientNumberAddress] = useState();
  const [clientTellNumber, setClientTellNumber] = useState();
  const [clientSales, setClientSales] = useState([]);
  const [clientPaymentHistory, setClientPaymentHistory] = useState([]);

  const handleSubmitClientRegister = (e) => {
    e.preventDefault();
    //CRIAR CHAVE PARA CLIENTE
    let numAllLetters = clientName.length;
    const clientKey =
      clientName
        .split(" ")
        .join("")
        .slice(numAllLetters - 6) +
      clientTellNumber.slice(clientTellNumber.length - 5) +
      clientNumberAddress.slice(clientNumberAddress.length - 1);
    //ENVIAR DADOS PARA DB.JSON
    const dataClientRegister = {
      clientName,
      clientNickname,
      clientCity,
      clientAddress,
      clientDistrict,
      clientNumberAddress,
      clientTellNumber,
      clientKey,
    };
    fetch("http://localhost:3000/clients", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataClientRegister),
    }).then(() => {
      console.log("Registrado");
    });
    // console.log(clientName, clientNickname, clientCity, clientAddress, clientNumberAddress, clientTellNumber);
  };
  return (
    <>
      <div className="container">
        <div className="title-page">
          <center>
            <h2>Cadastrar novo cliente</h2>
          </center>
        </div>
        <div className="client-register">
          <form onSubmit={handleSubmitClientRegister}>
            <label>Nome:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              required
            />
            <label>Apelido:</label>
            <input
              type="text"
              name="nickname"
              id="nickname"
              placeholder="Opcional*"
              value={clientNickname}
              onChange={(e) => setClientNickname(e.target.value)}
            />
            <label>Cidade:</label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Porto Alegre"
              value={clientCity}
              onChange={(e) => setClientCity(e.target.value)}
              required
            />
            <label>Endereço:</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Rua Gonçalo de Carvalho"
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}
              required
            />
            <input
              type="number"
              name="addressNumber"
              id="addressNumber"
              placeholder="0000"
              value={clientNumberAddress}
              onChange={(e) => setClientNumberAddress(e.target.value)}
              required
            />
            <input
              type="text"
              name="district"
              id="district"
              placeholder="Bairro Independência"
              value={clientDistrict}
              onChange={(e) => setClientDistrict(e.target.value)}
              required
            />
            <label>Telefone:</label>
            <input
              type="number"
              name="cell"
              id="cell"
              value={clientTellNumber}
              onChange={(e) => setClientTellNumber(e.target.value)}
              required
            />
            <button>Cadastrar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ClientRegisterPage;
