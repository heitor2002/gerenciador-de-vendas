const ClientRegisterPage = () => {
  return (
    <>
      <div className="container">
        <div className="title-page">
          <h2>Cadastrar novo cliente</h2>
        </div>
        <div className="client-register">
            <form>
                <div>
                <label>Nome:</label>
                <br />
                <input type="text" name="name" id="name" />
                </div>
                <div>
                <label>Apelido:</label>
                <br />
                <input type="text" name="nickname" id="nickname" />
                </div>
                <div>
                <label>Telefone:</label>
                <br />
                <input type="number" name="cell" id="cell" />
                </div>
                <div>
                <label>Cidade:</label>
                <br />
                <input type="text" name="city" id="city" />
                </div>
                <div>
                <label>Endereço:</label>
                <br />
                <input type="text" name="addressNumber" id="addressNumber" placeholder="Rua Gonçalo de Carvalho"/>
                <br />
                <input type="number" name="addressNumber" id="addressNumber" placeholder="0000"/>
                </div>
                <button>Cadastrar</button>
            </form>
        </div>
      </div>
    </>
  );
};

export default ClientRegisterPage;
