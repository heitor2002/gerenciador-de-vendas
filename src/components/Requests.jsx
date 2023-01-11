import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import CardRequest from "./box-components/CardRequest";

const Requests = () => {
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
            <CardRequest />
          </div>
        </div>
      </div>
    </>
  );
};

export default Requests;
