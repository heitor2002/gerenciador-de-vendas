import { useState } from "react";

const PaymentTable = (props) => {
  const [payment, setPayment] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(payment)
  };

  return (
    <div className="payment-table">
      <table style={{ textAlign: "center" }}>
        <tr>
          <th>Saldo</th>
          <th>Pagamento</th>
          <th>Status</th>
        </tr>
        <tr>
          <td style={{ fontWeight: "bold", color: `${props.colorStatus}` }}>
            R$ {(props.addedValue - props.accumulatedValue).toFixed(2)}
          </td>
          <td className="payment-buttons">
            <form onSubmit={handleSubmit}>
              <input type="number" placeholder="Valor" value={payment} onChange={(e) => setPayment(e.target.value)} />
              <input type="submit" value="Adicionar" />
            </form>
          </td>
          <td style={{ fontWeight: "bold", color: `${props.colorStatus}` }}>
            {props.status}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default PaymentTable;
