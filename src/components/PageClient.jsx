import { useLayoutEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import fetchClients from "../fetchClients";
import InformationClient from "./box-components/InformationClient";

const PageClient = () => {
  const { id } = useParams();
  const { clientsInformation } = fetchClients(
    "http://localhost:3000/clients/" + id
  );

  const sales = clientsInformation.sales;
  const someValue = sales?.map((item) => {
    let productValue = item.quantity * item.price;
    return productValue;
  });

  const accumulatedValue = someValue
    ?.reduce((acc, item) => {
      return acc + item;
    },0)
    .toFixed(2);

  var status = "";

  if (accumulatedValue != 0) {
    status = "Devendo";
  } else {
    status = "Pago";
  }

  return (
    <>
      <div className="container">
        {clientsInformation && (
          <>
            <div className="title-page">
              <h2>{clientsInformation.name}</h2>
            </div>
            <div className="single-client">
              <InformationClient
                nickname={clientsInformation.nickname}
                city={clientsInformation.contact?.city}
                address={clientsInformation.contact?.address}
                phone={clientsInformation.contact?.phone}
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
              <div className="payment-table">
                <table style={{ textAlign: "center" }}>
                  <tr>
                    <th>Saldo</th>
                    <th>Pagamento</th>
                    <th>Status</th>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold", color: "red" }}>
                      R$ -{accumulatedValue}
                    </td>
                    <td className="payment-buttons">
                      <input type="number" placeholder="Valor" />
                      <input type="submit" value="Adicionar" />
                    </td>
                    <td>{status}</td>
                  </tr>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PageClient;
