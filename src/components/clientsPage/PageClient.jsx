import { useParams } from "react-router-dom";
import fetchClients from "../../fetchClients";
import InformationClient from "./InformationClient";
import { IoMdClose } from "react-icons/io";
import PaymentTable from "./PaymentTable";

const PageClient = (props) => {
  const { id } = useParams();
  const { dataFetchInformations:clientsInformation } = fetchClients(
    "http://localhost:3000/clients/" + id
  );

  const { dataFetchInformations: paymentHistory } = fetchClients(
    "http://localhost:3000/paymentHistory"
  );

  const clientKeyPaymentHistory = clientsInformation.clientKey;

  const filterKey = paymentHistory.filter(item => {
    return item.clientKeyPaymentHistory == clientKeyPaymentHistory
  })

  console.log(filterKey)

  const sales = clientsInformation.sales;
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

  const mapPaymentHistory = clientsInformation.paymentHistory?.map(
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
    clientsInformation.balance = "Pago";
    colorStatus = "#47a123";
    statusCard = "Pago";
  } else {
    colorStatus = "#b32917";
    clientsInformation.balance = "Devendo";
    statusCard = "Devendo";
  }

  return (
    <>
      <div className="container">
        {clientsInformation && (
          <>
            <div className="title-page">
              <h2>{clientsInformation.clientName}</h2>
            </div>
            <div className="single-client">
              <InformationClient
                nickname={clientsInformation.clientNickname}
                city={clientsInformation.clientCity}
                address={clientsInformation.clientAddress}
                district={clientsInformation.clientDistrict}
                addressNumber={clientsInformation.clientNumberAddress}
                phone={clientsInformation.clientTellNumber}
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
                status={clientsInformation.balance}
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

                  {filterKey.map((infoHistory) => {
                    let datePayment =  infoHistory.datePaymentHistory;
                    let paymentIntNumber = parseFloat(infoHistory.payment).toFixed(2)
                    return (
                      <>
                        <tr>
                          <td>{datePayment}</td>
                          <td>R$ {paymentIntNumber}</td>
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
