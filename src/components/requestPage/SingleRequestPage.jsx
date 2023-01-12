import { useParams } from "react-router-dom";
import fetchClients from "../../fetchClients";

const SingleRequestPage = () => {
  const { id } = useParams();
  const { dataFetchInformations } = fetchClients(
    "http://localhost:3000/requests/" + id
  );
  const allProductsRequest = dataFetchInformations.productsList;
  
  return (
    <>
      <div className="container">
        <div className="title-page">
          <h2>Data do pedido: {dataFetchInformations.dateRequest}</h2>
          <h2>
            Valor total da compra: R$
            {dataFetchInformations.accumulatedRequestValue}
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
        <button className="delete-request">Deletar Pedido</button>
      </div>
      <div className="confirm-overlay">
        <div className="confirmation-box">
          <h2>Tem certeza que deseja excluir este pedido?</h2>
          <p>
            Não será possível recuperar os dados novamente, portanto, todos os
            valores do caixa serão redefinidos de acordo com esta alteração.
          </p>
          <div className="confirmation-buttons">
            <button style={{ backgroundColor: "#b32917" }}>
              Sim, desejo excluir
            </button>
            <button style={{ backgroundColor: "rgb(45, 84, 97)" }}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleRequestPage;
