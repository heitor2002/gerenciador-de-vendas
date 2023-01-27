import { useState } from "react";
import { useParams } from "react-router-dom";
import fetchClients from "../../fetchClients";

const PaymentTable = (props) => {
  const { id } = useParams();
  const { dataFetchInformations: paymentHistory } = fetchClients(
    "http://localhost:3000/paymentHistory"
  );
  const { dataFetchInformations: clientsInformation } = fetchClients(
    "http://localhost:3000/clients/" + id
  );
  const clientKeyPaymentHistory = clientsInformation.clientKey;

  const filterKey = paymentHistory.filter(item => {
    return item.clientKeyPaymentHistory == clientKeyPaymentHistory
  })

  const [payment, setPayment] = useState(null);
  const [datePaymentHistory, setDatePaymentHistory] = useState(function () {
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

  const handleSubmitHistoryPayment = (e) => {
    e.preventDefault();
    const dataUpdateHistory = {
      payment,
      datePaymentHistory,
      clientKeyPaymentHistory,
    };
    fetch("http://localhost:3000/paymentHistory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUpdateHistory),
    }).then(() => window.location.reload());
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
            <form>
              <label>R$ </label>
              <input
                type="number"
                placeholder="Valor"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
                required
              />
              <input
                type="submit"
                value="Adicionar"
                onClick={handleSubmitHistoryPayment}
              />
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
