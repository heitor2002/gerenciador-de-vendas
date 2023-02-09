import { useParams } from "react-router-dom";
import fetchClients from "../../fetchClients";
import InformationClient from "./InformationClient";
import { IoMdClose } from "react-icons/io";
import PaymentTable from "./PaymentTable";

const PageClient = () => {
  const ports = {
    data: 3000,
    stock: 5000,
  };
  //REQUISIÇÕES DE DB.JSON
  const { id } = useParams();
  const { dataFetchInformations: clientsInformation } = fetchClients(
    `http://localhost:${ports.data}/clients/` + id
  );

  const { dataFetchInformations: paymentHistory } = fetchClients(
    `http://localhost:${ports.data}/paymentHistory`
  );

  const { dataFetchInformations: sold } = fetchClients(
    `http://localhost:${ports.data}/sales`
  );

  //MANIPULAÇÃO DE DADOS DE DB.JSON

  const clientKeyPaymentHistory = clientsInformation.clientKey;

  const filterKey = paymentHistory.filter((item) => {
    return item.clientKeyPaymentHistory == clientKeyPaymentHistory;
  });

  const filterKeySold = sold.filter((item) => {
    return item.clientKey == clientsInformation.clientKey;
  });

  const allPayments = filterKey.map((payment) => {
    return parseFloat(payment.payment);
  });

  const accumulatedAllPayments = allPayments.reduce((acc, item) => {
    return acc + item;
  }, 0);

  const debtPayments = filterKeySold.map((item) => {
    let totalChargePerProduct = item.floatInputPrice * item.floatInputQuantity;
    return totalChargePerProduct;
  });

  const balance = debtPayments.reduce((acc, item) => {
    return acc + item;
  }, 0);

  var verifyBalance = accumulatedAllPayments - balance;

  //CRIAÇÃO E ESTILIZAÇÃO DE STATUS DE PAGAMENTO DO CLIENTE
  var colorBalance = "";
  var statusMessage = "";
  verifyBalance >= 0
    ? (colorBalance = "#47a123") && (statusMessage = "Pago")
    : (colorBalance = "#b32917") && (statusMessage = "Devendo");

  //EXCLUIR ITEM DO HISTÓRICO DE PAGAMENTO:

  const handleDeleteHistoryPayment = (id) => {
    fetch(`http://localhost:${ports.data}/paymentHistory/` + id, {
      method: "DELETE",
    }).then(() => {
      window.location.reload();
    });
  };

  const handleCancelSale = (name, price, quantity, key, id) => {
    //DELETAR DA TABELA DE VENDA;
    let productName, productPrice, productQuantity, passwordStock;
    productName = name;
    productPrice = parseFloat(price);
    productQuantity = quantity;
    passwordStock = key;
    const infoProducts = {
      productName,
      productPrice,
      productQuantity,
      passwordStock,
    };

    fetch(`http://localhost:${ports.stock}/stock`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(infoProducts)
    }).then(() => {
      fetch(`http://localhost:${ports.data}/sales/` + id, {
        method: "DELETE"
      })
    }).then(() => window.location.reload())

    console.log(infoProducts)

    // console.log(infoProducts);
    //PRODUTO RETORNA AO ESTOQUE;
  };

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
                    <th>Cancelar venda</th>
                  </tr>
                  {filterKeySold.map((singleProduct) => {
                    let name = singleProduct.selectedProductName;
                    let price = singleProduct.floatInputPrice.toFixed(2);
                    let selectedPrice = singleProduct.selectedProductPrice
                    let quantity = singleProduct.floatInputQuantity;
                    let key = singleProduct.selectedProductKey;
                    let id = singleProduct.id;
                    return (
                      <tr>
                        <td>{name}</td>
                        <td>{quantity}</td>
                        <td>R$ {price}</td>
                        <td>
                          {"R$ "}
                          {(quantity * price).toFixed(2)}
                        </td>
                        <td>
                          <button className="close-button" onClick={() => handleCancelSale(name, selectedPrice, quantity, key, id)}>
                            <IoMdClose />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </div>
              <PaymentTable
                verifyBalance={verifyBalance}
                colorStatus={colorBalance}
                statusMessage={statusMessage}
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
                    let datePayment = infoHistory.datePaymentHistory;
                    let paymentIntNumber = parseFloat(
                      infoHistory.payment
                    ).toFixed(2);
                    return (
                      <>
                        <tr>
                          <td>{datePayment}</td>
                          <td>R$ {paymentIntNumber}</td>
                          <td>{}</td>
                          <td>
                            <button
                              className="close-button"
                              onClick={() =>
                                handleDeleteHistoryPayment(infoHistory.id)
                              }
                            >
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
                  R$ {accumulatedAllPayments.toFixed(2)}
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
