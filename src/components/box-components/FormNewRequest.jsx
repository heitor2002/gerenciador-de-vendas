const FormNewRequest = () => {
  return (
    <>
      <div className="new-request">
        <form action="" className="form-new-request">
          <input type="text" placeholder="Produto" />
          <input type="number" placeholder="Preço" />
          <input type="number" placeholder="Quantidade" />
          <input type="submit" value={"Enviar"} />
        </form>
      </div>
    </>
  );
};

export default FormNewRequest;
