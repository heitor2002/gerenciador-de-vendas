import { useState } from "react";
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

  const [productPrice, setProductPrice] = useState(null)
  const [productQuantity, setProductQuantity] = useState(1)

  const productStockList = fetchStock.map((info) => {
    let arrayProducts = info.productsList;
    return arrayProducts;
  });

  var amount = productPrice * productQuantity

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
          <div className="selected-product">
            <div className="card-selected-product">
              <h2>Produto: </h2>
              <h3>Quantidade disponível:</h3>
              <h3>Comprado por: R$</h3>
              <form>
                <label>Preço da venda: R$</label>
                <input type="number" name="sale_price" id="sale_price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)}/>
                <br />
                <label>Quantidade:</label>
                <input type="number" name="sale_quantity" id="sale_quantity" value={productQuantity} onChange={(e) => setProductQuantity(e.target.value)}/>
                <br />
                <h3>Valor total da venda: R$ {amount.toFixed(2)}</h3>
                <input type="submit" value="Vender" name="acao" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleClientSales;
