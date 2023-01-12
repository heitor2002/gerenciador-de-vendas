import { useState } from "react";
import { useParams } from "react-router-dom";
import fetchClients from "../../fetchClients";

const PaymentTable = (props) => {
  const { id } = useParams();
  const { clientsInformation } = fetchClients(
    "http://localhost:3000/clients/" + id
  );
  console.log(clientsInformation);

  const [payment, setPayment] = useState(null);
  const [date, setDate] = useState(function () {
    var day;
    var month;
    var year;
    const createDate = new Date();
    day = createDate.getDate();
    month = createDate.getMonth() + 1;
    year = createDate.getFullYear();
    var printDate = `${day}/${month}/${year}`;
    return printDate;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const registeredPayment = { payment, date };
    console.log(registeredPayment);
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
              <label>R$ </label>
              <input
                type="number"
                placeholder="Valor"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
                required
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
