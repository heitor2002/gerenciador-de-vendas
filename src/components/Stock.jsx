import fetchClients from "../fetchClients";

const Stock = () => {
  const ports = {
    data: 3000,
    stock: 5000
  }
  const { dataFetchInformations:stockProducts } = fetchClients(
    `http://localhost:${ports.stock}/stock`
  );

  const alphabetOrder = stockProducts.sort((x, y) => {
    let a = x.productName.toUpperCase(),
      b = y.productName.toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;
  });

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
              <th>Price</th>
              <th>Quantidade</th>
            </tr>
            {alphabetOrder.map((info) => {
              let quantityString = parseInt(info.productQuantity);
              let productPrice = parseFloat(info.productPrice)
              return (
                <tr>
                  <td>{info.productName}</td>
                  <td>R${productPrice.toFixed(2)}</td>
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
