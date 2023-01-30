import fetchClients from "../fetchClients";

const Stock = () => {
  const { dataFetchInformations:stockProducts } = fetchClients(
    "http://localhost:3000/stock"
  );

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
            {stockProducts.map((info) => {
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
