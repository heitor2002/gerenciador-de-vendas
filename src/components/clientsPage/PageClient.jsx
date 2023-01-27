import { useParams } from "react-router-dom";
import fetchClients from "../../fetchClients";
import InformationClient from "./InformationClient";
import { IoMdClose } from "react-icons/io";
import PaymentTable from "./PaymentTable";

const PageClient = (props) => {
  const { id } = useParams();
  const { dataFetchInformations } = fetchClients(
    "http://localhost:3000/clients/" + id
  );

  const sales = dataFetchInformations.sales;
  const someValueBalance = sales?.map((item) => {
    let productValue = item.quantity * item.price;
    return productValue;
  });

  const accumulatedValue = someValueBalance
    ?.reduce((acc, item) => {
      return acc + item;
    }, 0)
    .toFixed(2);

  var colorStatus = "";
  var statusCard = "";

  const mapPaymentHistory = dataFetchInformations.paymentHistory?.map(
    (typeInfo) => {
      return typeInfo.payment;
    }
  );

  const addedValue = mapPaymentHistory
    ?.reduce((acc, item) => {
      return acc + item;
    })
    .toFixed(2);

  if (addedValue - accumulatedValue >= 0) {
    dataFetchInformations.balance = "Pago";
    colorStatus = "#47a123";
    statusCard = "Pago";
  } else {
    colorStatus = "#b32917";
    dataFetchInformations.balance = "Devendo";
    statusCard = "Devendo";
  }

  return (
    <>
      <div className="container">
        {dataFetchInformations && (
          <>
            <div className="title-page">
              <h2>{dataFetchInformations.clientName}</h2>
            </div>
            <div className="single-client">
              <InformationClient
                nickname={dataFetchInformations.clientNickname}
                city={dataFetchInformations.clientCity}
                address={dataFetchInformations.clientAddress}
                district={dataFetchInformations.clientDistrict}
                addressNumber={dataFetchInformations.clientNumberAddress}
                phone={dataFetchInformations.clientTellNumber}
              />
              {/* <InformationClient /> */}
              <div className="requests-list">
                <h2>Pedidos:</h2>
                <table>
                  <tr>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Preço Unitário</th>
                    <th>Valor total</th>
                  </tr>
                  {sales?.map((singleProduct) => {
                    return (
                      <tr>
                        <td>{singleProduct.product}</td>
                        <td>{singleProduct.quantity}</td>
                        <td>R$ {singleProduct.price.toFixed(2)}</td>
                        <td>
                          {"R$ "}
                          {(
                            singleProduct.quantity * singleProduct.price
                          ).toFixed(2)}
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </div>
              <PaymentTable
                status={dataFetchInformations.balance}
                accumulatedValue={accumulatedValue}
                addedValue={addedValue}
                colorStatus={colorStatus}
              />
              <div className="payment-history">
                <h2>Histórico de pagamento:</h2>
                <table>
                  <tr>
                    <th>Data de pagamento</th>
                    <th>Valor adicionado</th>
                    <th>Saldo atualizado:</th>
                    <th>Excluir elemento</th>
                  </tr>

                  {dataFetchInformations.paymentHistory?.map((infoHistory) => {
                    return (
                      <>
                        <tr>
                          <td>{infoHistory.date}</td>
                          <td>{infoHistory.payment}</td>
                          <td>{}</td>
                          <td>
                            <button className="close-button">
                              <IoMdClose />
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </table>
              </div>
              <h2 id="added-value">
                Valor agregado:{" "}
                <span style={{ fontSize: "2rem", color: "#47a123" }}>
                  R$ {addedValue}
                </span>
              </h2>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PageClient;
