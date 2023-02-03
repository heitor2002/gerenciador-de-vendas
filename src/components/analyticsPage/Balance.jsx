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

  return (
    <>
      <div className="requests-sales-payments">
        <h2>Soma total de pedidos: R$<span>{allRequestsValue.toFixed(2)}</span></h2>
        <h2>Vendas realizadas: R$<span>{allSalesValue.toFixed(2)}</span></h2>
        <h2>Pagamentos pendentes: R$<span></span></h2>
      </div>
    </>
  );
};

export default Balance;
