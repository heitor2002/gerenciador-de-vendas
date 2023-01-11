import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const FormNewRequest = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(null);
  const [productQuantity, setProductQuantity] = useState(null);
  const [productsList, setProductsList] = useState([]);

  const handleListProduct = (e) => {
    e.preventDefault();
    const dataRequest = { productName, productPrice, productQuantity };
    setProductsList([...productsList, dataRequest]);
    return productsList;
  };

  const handleDeleteProduct = (singleProduct) => {
    setProductsList(
      productsList.filter(
        (item) => item.productName !== singleProduct.productName
      )
    );
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
        {productsList.length !== 0 && (
          <button onClick={() => console.log(productsList)}>
            Concluir pedido
          </button>
        )}
      </div>
    </>
  );
};

export default FormNewRequest;
