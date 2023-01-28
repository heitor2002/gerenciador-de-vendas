import { useParams } from "react-router-dom";
import fetchClients from "../../fetchClients";

const SingleClientSales = () => {
  const { id } = useParams();
  const { dataFetchInformations: fetchClient } = fetchClients(
    "http://localhost:3000/clients/" + id
  );
  const { dataFetchInformations: fetchStock } = fetchClients(
    "http://localhost:3000/requests"
  );

  const productStockList = fetchStock.map((info) => {
    let arrayProducts = info.productsList;
    return arrayProducts;
  });

  const arrayStock = productStockList.flat();

  console.log(fetchClient)
  console.log(arrayStock)
  return (
    <>
      <div className="container">
        <div className="title-page">
          <h2>{fetchClient.clientName}</h2>
        </div>
        <div className="flex-content-list-products-for-sale">
          <div className="list-products">
            <ul>
              {arrayStock.map(product => {
                return(
                  <>
                  <li>{product.productName}</li>
                  </>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleClientSales;
