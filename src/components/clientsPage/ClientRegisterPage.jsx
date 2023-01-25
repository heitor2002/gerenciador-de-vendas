const ClientRegisterPage = () => {
  return (
    <>
      <div className="container">
        <div className="title-page">
          <center><h2>Cadastrar novo cliente</h2></center>
        </div>
        <div className="client-register">
          <form>
            <label>Nome:</label>
            <input type="text" name="name" id="name" />
            <label>Apelido:</label>
            <input
              type="text"
              name="nickname"
              id="nickname"
              placeholder="Opcional*"
            />
            <label>Cidade:</label>
            <input type="text" name="city" id="city" placeholder="Porto Alegre"/>
            <label>Endereço:</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Rua Gonçalo de Carvalho"
            />
            <input
              type="number"
              name="addressNumber"
              id="addressNumber"
              placeholder="0000"
            />
            <label>Telefone:</label>
            <input type="number" name="cell" id="cell" />
            <button>Cadastrar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ClientRegisterPage;
