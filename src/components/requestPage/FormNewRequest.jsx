import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const FormNewRequest = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(null);
  const [productQuantity, setProductQuantity] = useState(null);
  const [productsList, setProductsList] = useState([]);
  const [dateRequest, setDateRequest] = useState(function () {
    var day;
    var month;
    var year;
    const createDate = new Date();
    day = createDate.getDate();
    month = createDate.getMonth() + 1;
    year = createDate.getFullYear();
    var updateDate = `${day}/${month}/${year}`;
    return updateDate;
  });

  const navigate = useNavigate();

  const handleListProduct = (e) => {
    e.preventDefault();
    const dataRequest = { productName, productPrice, productQuantity };
    setProductsList([...productsList, dataRequest]);
    return productsList;
  };

  const someValueProduct = productsList.map((item) => {
    let accumulatedProduct = item.productPrice * item.productQuantity;
    return accumulatedProduct;
  });

  const accumulatedRequestValue = someValueProduct
    .reduce((acc, item) => {
      return acc + item;
    }, 0)
    .toFixed(2);

  const handleDeleteProduct = (singleProduct) => {
    setProductsList(
      productsList.filter(
        (item) => item.productName !== singleProduct.productName
      )
    );
  };

  const postSingleProduct = async (key) => {
    await productsList.forEach((item) => {
      let productName = item.productName;
      let productPrice = parseFloat(item.productPrice);
      let productQuantity = parseInt(item.productQuantity);
      const stockProducts = {
        productName,
        productPrice,
        productQuantity,
        passwordStock: key,
      };

      fetch("http://localhost:3000/stock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(stockProducts),
      });
  });
  }

  const handleSubmitRequest = async () => {
    let passwordStock = (
      dateRequest +
      productsList[0].productPrice * Math.floor(Math.random() * 999999) +
      productsList[0].productQuantity * Math.floor(Math.random() * 999999)
    )
      .split(" ")
      .join("");
    const dataRequest = {
      dateRequest,
      productsList,
      accumulatedRequestValue,
      passwordStock,
    };

    await fetch("http://localhost:3000/requests", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataRequest),
    }).then(() => {
      postSingleProduct(passwordStock)
    }).then(() => navigate("/requests"));
  };

  return (
    <>
      <div className="new-request">
        <form className="form-new-request" onSubmit={handleListProduct}>
          <input
            type="text"
            placeholder="Produto"
            value={productName}
            required
            onChange={(e) => setProductName(e.target.value)}
          />
          <label>R$ </label>
          <input
            type="number"
            placeholder="Preço"
            value={productPrice}
            step=".01"
            // required
            onChange={(e) => setProductPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Quantidade"
            value={productQuantity}
            // required
            onChange={(e) => setProductQuantity(e.target.value)}
          />
          <input type="submit" value={"Enviar"} />
        </form>
      </div>
      <h2 style={{ marginTop: "20px" }}>
        Valor total do pedido:{" "}
        <span style={{ color: "red" }}>R${accumulatedRequestValue}</span>
      </h2>
      <div className="container-requests">
        <table>
          <tr>
            <th>Nome</th>
            <th>Preço p/ unidade</th>
            <th>Quantidade</th>
            <th>Acumulado</th>
            <th>Excluir</th>
          </tr>
          {productsList.map((typeInfo) => {
            return (
              <>
                <tr key={typeInfo.productName}>
                  <td>{typeInfo.productName}</td>
                  <td>R$ {typeInfo.productPrice}</td>
                  <td>{typeInfo.productQuantity}</td>
                  <td>
                    R${" "}
                    {(typeInfo.productPrice * typeInfo.productQuantity).toFixed(
                      2
                    )}
                  </td>
                  <td>
                    <button onClick={() => handleDeleteProduct(typeInfo)}>
                      <IoMdClose />
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
      {productsList.length !== 0 && (
        <button className="send-request" onClick={() => handleSubmitRequest()}>
          Concluir pedido
        </button>
      )}
    </>
  );
};

export default FormNewRequest;
