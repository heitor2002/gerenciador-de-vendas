import fetchClients from "../../fetchClients";

const Balance = () => {
  const ports = {
    clients: 3000,
    paymentHistory: 3500,
    requests: 4000,
    sales: 4500,
    stock: 5000,
  };
  const { dataFetchInformations: sales } = fetchClients(
    `http://localhost:${ports.sales}/sales`
  );
  const { dataFetchInformations: requests } = fetchClients(
    `http://localhost:${ports.requests}/requests`
  );

  const { dataFetchInformations: paymentHistory } = fetchClients(
    `http://localhost:${ports.paymentHistory}/paymentHistory`
  );

  //MAPEANDO E SOMANDO TODAS AS VENDAS
  const allSalesValue = sales
    .map((item) => {
      return item.floatInputPrice * item.floatInputQuantity;
    })
    .reduce((acc, item) => {
      return acc + item;
    }, 0);

  // MAPEANDO E SOMANDO TODOS OS PEDIDOS
  const allRequestsValue = requests
    .map((item) => {
      return parseFloat(item.accumulatedRequestValue);
    })
    .reduce((acc, item) => {
      return acc + item;
    }, 0);

  //MAPEANDO HISTÓRICO DE PAGAMENTO
  const allPaymentHistory = paymentHistory
    .map((item) => {
      return parseFloat(item.payment);
    })
    .reduce((acc, item) => {
      return acc + item;
    }, 0);

  // console.log(allPaymentHistory)
  // console.log(allSalesValue)
//   console.log(allSalesValue - allPaymentHistory);
  const outstandingPayments = allSalesValue - allPaymentHistory;
  const totalSalesProjection = allPaymentHistory + outstandingPayments

  return (
    <>
      <div className="general-information">
        <h2>
          Soma total de pedidos: R$<span>{allRequestsValue.toFixed(2)}</span>
        </h2>
        <h2>
          Vendas realizadas: R$
          <span>
            {allPaymentHistory.toFixed(2)}{" "}
            <span
              style={{
                fontSize: "1.3rem",
                color: "#ccc",
              }}
            >
              +{outstandingPayments.toFixed(2)}
            </span>
          </span>
        </h2>
        <h2>
          Pagamentos pendentes: R$
          <span>{outstandingPayments.toFixed(2)}</span>
        </h2>
        <h2>
          Projeção total das vendas: R$
          <span>
            {totalSalesProjection.toFixed(
              2
            )}
          </span>
        </h2>
        <h2>Saldo total: R$<span>{(allPaymentHistory - allRequestsValue).toFixed(2)}</span></h2>
        <h2>Saldo total projetado: R$<span>{(totalSalesProjection - allRequestsValue).toFixed(2)}</span></h2>
      </div>
    </>
  );
};

export default Balance;
