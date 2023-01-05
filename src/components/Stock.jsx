const Stock = () => {
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
              <th>Preço Unitário</th>
              <th>Valor total</th>
            </tr>
            <tr>
              <td>Jeitosinho</td>
              <td>{5}</td>
              <td>R$ {19}</td>
              <td>R$ {19 * 5}</td>
            </tr>
            
          </table>
        </div>
      </div>
    </>
  );
};

export default Stock;
