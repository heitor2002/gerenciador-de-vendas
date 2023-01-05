const PaymentTable = (props) => {
  return (
    <div className="payment-table">
      <table style={{ textAlign: "center" }}>
        <tr>
          <th>Saldo</th>
          <th>Pagamento</th>
          <th>Status</th>
        </tr>
        <tr>
          <td style={{ fontWeight: "bold", color: "red" }}>
            R$ {(props.addedValue - props.accumulatedValue ).toFixed(2)}
          </td>
          <td className="payment-buttons">
            <input type="number" placeholder="Valor" />
            <input type="submit" value="Adicionar" />
          </td>
          <td>{props.status}</td>
        </tr>
      </table>
    </div>
  );
};

export default PaymentTable;
