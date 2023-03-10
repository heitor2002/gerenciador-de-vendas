import { useState } from "react";
import { useParams } from "react-router-dom";
import fetchClients from "../../fetchClients";

const SingleClientSales = () => {
  const ports = {
    data: 3000,
    stock: 5000
  }
  const { id } = useParams();
  const { dataFetchInformations: fetchClient } = fetchClients(
    `http://localhost:${ports.data}/clients/` + id
  );
  const { dataFetchInformations: fetchStock } = fetchClients(
    `http://localhost:${ports.stock}/stock`
  );

  const [productPrice, setProductPrice] = useState(null);
  const [productQuantity, setProductQuantity] = useState(1);
  const [selectedProductName, setSelectedProductName] = useState("");
  const [selectedProductPrice, setSelectedProductPrice] = useState(0);
  const [selectedProductQuantity, setSelectedProductQuantity] = useState(0);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedProductKey, setSelectedProductKey] = useState("");

  var amount = productPrice * productQuantity;

  const activeOverlay = () => {
    let overlay = document.querySelector(".confirm-overlay");
    overlay.classList.add("active-confirm-overlay");
  };

  const desactiveOverlay = () => {
    let overlay = document.querySelector(".confirm-overlay");
    overlay.classList.remove("active-confirm-overlay");
  };

  const handleSubmitSale = (e) => {
    e.preventDefault();
    let floatInputPrice = parseFloat(productPrice);
    let floatPrice = parseFloat(selectedProductPrice);
    let floatInputQuantity = parseFloat(productQuantity);
    let floatQuantity = parseFloat(selectedProductQuantity);
    const verifyPrice = floatInputPrice <= floatPrice;
    const verifyQuantity =
      floatInputQuantity < 1 || floatInputQuantity > floatQuantity;
    const clientKey = fetchClient.clientKey;

    //VALIDAÇÃO DE PREÇO E QUANTIDADE

    if (verifyPrice) {
      activeOverlay();
    } else if (verifyQuantity) {
      console.log("Quantidade menor que 1 ou indisponível no estoque.");
    } else {
      const productSold = {
        selectedProductName,
        selectedProductKey,
        selectedProductPrice,
        floatInputPrice,
        floatInputQuantity,
        clientKey,
      };
      
      let stockDeduction = selectedProductQuantity - floatInputQuantity;

      if(stockDeduction === 0){
        fetch(`http://localhost:${ports.stock}/stock/` + selectedProductId, {
          method: "DELETE"
        }).then(() => {
          window.location.reload()
        })
      }else{
        fetch(`http://localhost:${ports.stock}/stock/` + selectedProductId, {
          method: "PATCH",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            productQuantity: stockDeduction
          })
        }).then(() => {
          window.location.reload()
        })
      }

      
      fetch(`http://localhost:${ports.data}/sales`, {
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(productSold)
      })
      
    }
  };

  return (
    <>
      <div className="container">
        <div className="title-page">
          <h2>{fetchClient.clientName}</h2>
        </div>
        <div className="flex-content-list-products-for-sale">
          <div className="list-products">
            <ul>
              {fetchStock.map((product) => {
                let productQuantity = product.productQuantity;
                let productPrice = product.productPrice;
                let productName = product.productName;
                let productId = product.id;
                let productKey = product.passwordStock;
                return (
                  <>
                    <li
                      onClick={() => {
                        setSelectedProductName(productName);
                        setSelectedProductPrice(
                          parseFloat(productPrice).toFixed(2)
                        );
                        setSelectedProductQuantity(parseInt(productQuantity));
                        setSelectedProductId(productId);
                        setSelectedProductKey(productKey);
                        setSelectedFirstPrice()
                      }}
                    >
                      {productName}
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="selected-product">
            <div className="card-selected-product">
              <h2>Produto: {selectedProductName}</h2>
              <h3>
                Quantidade disponível: <span>{selectedProductQuantity}</span>
              </h3>
              <h3>
                Comprado por: R$ <span>{selectedProductPrice}</span>
              </h3>
              <form onSubmit={handleSubmitSale}>
                <label>Preço da venda: R$</label>
                <input
                  type="number"
                  name="sale_price"
                  id="sale_price"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  step="any"
                  required
                />
                <br />
                <label>Quantidade:</label>
                <input
                  type="number"
                  name="sale_quantity"
                  id="sale_quantity"
                  value={productQuantity}
                  onChange={(e) => setProductQuantity(e.target.value)}
                  required
                />
                <br />
                <h3>Valor total da venda: R$ {amount.toFixed(2)}</h3>
                <input type="submit" value="Vender" name="acao" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="confirm-overlay">
        <div className="confirmation-box">
          <h2>Atenção!</h2>
          <p>
            Você está fazendo uma venda abaixo do valor do produto, não obtendo
            lucro com a respectiva venda, você tem certeza disso?
          </p>
          <div className="confirmation-buttons">
            <button style={{ backgroundColor: "#b32917" }}>
              Sim, vender mesmo assim
            </button>
            <button
              style={{ backgroundColor: "rgb(45, 84, 97)" }}
              onClick={desactiveOverlay}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleClientSales;
