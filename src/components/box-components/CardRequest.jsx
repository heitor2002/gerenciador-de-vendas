import { Link } from "react-router-dom";

const CardRequest = (props) => {
  return (
    <>
      <div className="single-request">
        <h3>Data: {props.dateRequest}</h3>
        <h2>Valor do pedido: {props.addedValue}</h2>
        <Link to={"/requests/:"+ props.id}>
          <button>Detalhes</button>
        </Link>
      </div>
    </>
  );
};

export default CardRequest;
