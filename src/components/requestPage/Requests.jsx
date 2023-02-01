import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import fetchClients from "../../fetchClients";
import CardRequest from "./CardRequest";

const Requests = () => {
  const ports = {
    clients: 3000,
    paymentHistory: 3500,
    requests: 4000,
    sales: 4500,
    stock: 5000,
  };
  const { dataFetchInformations: allRequests } = fetchClients(
    `http://localhost:${ports.requests}/requests`
  );

  return (
    <>
      <div className="container">
        <div className="title-page">
          <h2>Pedidos</h2>
        </div>
        <div className="requests">
          <Link to={"/requests/form-requests"}>
            <button className="new-request">
              <BsPlusLg className="icon_plus" />
            </button>
          </Link>
          <div className="all-requests">
            {allRequests.map((data) => {
              return (
                <CardRequest
                  dateRequest={data.dateRequest}
                  addedValue={data.accumulatedRequestValue}
                  id={data.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Requests;
