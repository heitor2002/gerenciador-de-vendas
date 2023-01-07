import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";

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
            <div className="single-request">
              <h3>Data: 31/12/2022</h3>
              <h2>Valor do pedido: R$2000,00</h2>
              <Link to={"/requests/:id"}>
                <button>Detalhes</button>
              </Link>
            </div>
            <div className="single-request">
              <h3>Data: 31/12/2022</h3>
              <h2>Valor do pedido: R$2000,00</h2>
              <Link to={"/requests/:id"}>
                <button>Detalhes</button>
              </Link>
            </div>
            <div className="single-request">
              <h3>Data: 31/12/2022</h3>
              <h2>Valor do pedido: R$2000,00</h2>
              <Link to={"/requests/:id"}>
                <button>Detalhes</button>
              </Link>
            </div>
            <div className="single-request">
              <h3>Data: 31/12/2022</h3>
              <h2>Valor do pedido: R$2000,00</h2>
              <Link to={"/requests/:id"}>
                <button>Detalhes</button>
              </Link>
            </div>
            <div className="single-request">
              <h3>Data: 31/12/2022</h3>
              <h2>Valor do pedido: R$2000,00</h2>
              <Link to={"/requests/:id"}>
                <button>Detalhes</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Requests;
