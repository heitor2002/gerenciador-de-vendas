import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import fetchClients from "../../fetchClients";
import CardRequest from "./CardRequest";

const Requests = () => {
  const { dataFetchInformations } = fetchClients("http://localhost:3000/requests");
  console.log(dataFetchInformations);

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
            {dataFetchInformations.map((data) => {
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
