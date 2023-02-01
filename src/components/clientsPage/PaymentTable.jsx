import { useState } from "react";
import { useParams } from "react-router-dom";
import fetchClients from "../../fetchClients";

const PaymentTable = (props) => {
  const ports = {
    clients: 3000,
    paymentHistory: 3500,
    requests: 4000,
    sales: 4500,
    stock: 5000
  }
  const { id } = useParams();
  const { dataFetchInformations: paymentHistory } = fetchClients(
    `http://localhost:${ports.paymentHistory}/paymentHistory`
  );
  const { dataFetchInformations: clientsInformation } = fetchClients(
    `http://localhost:${ports.clients}/clients/` + id
  );
  const clientKeyPaymentHistory = clientsInformation.clientKey;

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
    fetch(`http://localhost:${ports.paymentHistory}/paymentHistory`, {
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
            R$ {(props.verifyBalance).toFixed(2)}
          </td>
          <td className="payment-buttons">
            <form onSubmit={handleSubmitHistoryPayment}>
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
              />
            </form>
          </td>
          <td style={{ fontWeight: "bold", color: `${props.colorStatus}` }}>
            {props.statusMessage}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default PaymentTable;
