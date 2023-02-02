import { useNavigate, useParams } from "react-router-dom";
import fetchClients from "../../fetchClients";

const SingleRequestPage = () => {
  const ports = {
    clients: 3000,
    paymentHistory: 3500,
    requests: 4000,
    sales: 4500,
    stock: 5000
  }
  const { id } = useParams();
  const { dataFetchInformations } = fetchClients(
    `http://localhost:${ports.requests}/requests/` + id
  );
  const { dataFetchInformations:dataStock } = fetchClients(
    `http://localhost:${ports.stock}/stock`
  );
  const navigate = useNavigate()

  const allProductsRequest = dataFetchInformations.productsList;
  const keyPassword = dataFetchInformations.passwordStock;
  const filterProductsPerKey = dataStock.filter(item => item.passwordStock === keyPassword)
  console.log(filterProductsPerKey)

  const activeOverlay = () => {
    let overlay = document.querySelector(".confirm-overlay")
    overlay.classList.add("active-confirm-overlay")
  }

  const desactiveOverlay = () => {
    let overlay = document.querySelector(".confirm-overlay")
    overlay.classList.remove("active-confirm-overlay")
  }

  const confirmDeleteOrder = async () => {
    await fetch(`http://localhost:${ports.requests}/requests/` + id, {
      method: "DELETE"
    })
    .then(() => {
      filterProductsPerKey.forEach(item => {
        fetch(`http://localhost:${ports.stock}/stock/` + item.id , {
          method: "DELETE"
        })
      })
    })
    .then(() => {
      navigate("/requests")
    })
  }
  
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
        <button className="delete-request" onClick={activeOverlay}>Deletar Pedido</button>
      </div>
      <div className="confirm-overlay">
        <div className="confirmation-box">
          <h2>Tem certeza que deseja excluir este pedido?</h2>
          <p>
            Não será possível recuperar os dados novamente, portanto, todos os
            valores do caixa serão redefinidos de acordo com esta alteração.
          </p>
          <div className="confirmation-buttons">
            <button style={{ backgroundColor: "#b32917" }} onClick={confirmDeleteOrder}>
              Sim, desejo excluir
            </button>
            <button style={{ backgroundColor: "rgb(45, 84, 97)" }} onClick={desactiveOverlay}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleRequestPage;
