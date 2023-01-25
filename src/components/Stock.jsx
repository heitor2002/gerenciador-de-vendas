import fetchClients from "../fetchClients";

const Stock = () => {
  const { dataFetchInformations } = fetchClients(
    "http://localhost:3000/requests"
  );

  const productStockList = dataFetchInformations.map((info) => {
    let arrayProducts = info.productsList;
    return arrayProducts;
  });

  const arrayStock = productStockList.flat();

  return (
    <>
      <div className="container">
        <div className="title-page">
          <h2>Estoque</h2>
        </div>
        <div className="table-stock">
          <table>
            <tr>
              <th>Produto</th>
              <th>Quantidade</th>
            </tr>
            {arrayStock.map((info) => {
              let quantityString = parseInt(info.productQuantity);
              return (
                <tr>
                  <td>{info.productName}</td>
                  <td>{quantityString}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default Stock;
