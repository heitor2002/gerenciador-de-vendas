const InformationClient = (props) => {
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
        Telefone: <span>{props.phone}</span>
      </h3>
    </>
  );
};

export default InformationClient;
