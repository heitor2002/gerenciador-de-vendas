import { useParams } from "react-router-dom";
import fetchClients from "../fetchClients";

const SingleRequestPage = () => {
  const { id } = useParams();
  const { clientsInformation } = fetchClients(
    "http://localhost:3000/requests/" + id
  );
  const allProductsRequest = clientsInformation.productsList;
  console.log(allProductsRequest);
  return (
    <>
      <div className="container">
        <div className="title-page">
          <h2>Data do pedido: {clientsInformation.dateRequest}</h2>
          <h2>
            Valor total da compra: R$
            {clientsInformation.accumulatedRequestValue}
          </h2>
        </div>
        <div className="single-page-table">
          <table>
            <tr>
              <th>Nome</th>
              <th>Preço p/ unidade</th>
              <th>Quantidade</th>
              <th>Acumulado</th>
            </tr>
            {allProductsRequest?.map((item) => {
              return (
                <>
                  <tr>
                    <td>{item.productName}</td>
                    <td>R${item.productPrice}</td>
                    <td>{item.productQuantity}</td>
                    <td>R${item.productQuantity * item.productPrice}</td>
                  </tr>
                </>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default SingleRequestPage;
