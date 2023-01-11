import fetchClients from "../fetchClients";
import AllRequests from "./box-components/AllRequests";
import FormNewRequest from "./box-components/FormNewRequest";

const FormRequests = () => {

  const {clientsInformation:dataStock} = fetchClients("http://localhost:3000/requests")

  return (
    <>
      <div className="container">
        <div className="title-page">
          <h2>Novo pedido:</h2>
        </div>
        <FormNewRequest />
        {/* <AllRequests listProducts={dataStock} /> */}
      </div>
    </>
  );
};

export default FormRequests;
