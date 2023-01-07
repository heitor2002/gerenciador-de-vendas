import { useState } from "react";

const PaymentTable = (props) => {
  const [payment, setPayment] = useState();
  const setDate = () => {
    var day;
    var month;
    var year;
    const createDate = new Date();
    day = createDate.getDate();
    month = createDate.getMonth() + 1;
    year = createDate.getFullYear();
    var printDate = `${day}/${month}/${year}`;
    console.log(printDate)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setDate();
    console.log(payment);
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
              <input
                type="number"
                placeholder="Valor"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
              />
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
