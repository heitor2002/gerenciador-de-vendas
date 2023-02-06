import fetchClients from "../../fetchClients";

const Balance = () => {
  const ports = {
    data: 3000,
    stock: 5000,
  };
  const { dataFetchInformations: sales } = fetchClients(
    `http://localhost:${ports.data}/sales`
  );
  const { dataFetchInformations: requests } = fetchClients(
    `http://localhost:${ports.data}/requests`
  );

  const { dataFetchInformations: paymentHistory } = fetchClients(
    `http://localhost:${ports.data}/paymentHistory`
  );

  const { dataFetchInformations: stock } = fetchClients(
    `http://localhost:${ports.stock}/stock`
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

    const stockValue = stock.map(item => {
      return item.productPrice * item.productQuantity
    }).reduce((acc, item) => {
      return acc + item;
    }, 0)

  const outstandingPayments = allSalesValue - allPaymentHistory;
  const totalSalesProjection = allPaymentHistory + outstandingPayments;

  var projectedTotalBalanceColor = "";
  var totalBalanceColor = "";
  allPaymentHistory - allRequestsValue < 0
    ? (projectedTotalBalanceColor = "#b32917")
    : (projectedTotalBalanceColor = "#47a123");

  allPaymentHistory - allRequestsValue < 0
    ? (totalBalanceColor = "#b32917")
    : (totalBalanceColor = "#47a123");

  return (
    <>
      <div className="general-information">
        <div className="gap-information">
          <h2>
            Soma total de pedidos: R$<span style={{color: "#b32917"}}>{allRequestsValue.toFixed(2)}</span>
          </h2>
        </div>
        <div className="gap-information">
          <h2>
            Vendas realizadas: R$
            <span>
              {allPaymentHistory.toFixed(2)}{" "}
              <span
                style={{
                  fontSize: "1.1rem",
                  color: "#7ed193",
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
            <span>{totalSalesProjection.toFixed(2)}</span>
          </h2>
        </div>
        <div className="gap-information">
          <h2>
            Saldo total: R$
            <span style={{ color: totalBalanceColor }}>{(allPaymentHistory - allRequestsValue).toFixed(2)}</span>
          </h2>
          <h2>
            Saldo total projetado: R$
            <span style={{ color: projectedTotalBalanceColor }}>
              {(totalSalesProjection - allRequestsValue).toFixed(2)}
            </span>
          </h2>
        </div>
        <div className="gap-information">
          <h2>Produtos em estoque: R$<span>{stockValue.toFixed(2)}</span></h2>
        </div>
      </div>
    </>
  );
};

export default Balance;
