import { Link } from "react-router-dom";

const CardSingleClientSales = (props) => {
  return (
    <>
      <div className="single-cards" key={props.id}>
        <h2>{props.name}</h2>
        <h2>Apelido: {props.nickname}</h2>
        <h3>Pagamento: {props.status}</h3>
        <Link to={`/sales/${props.id}`}>
          <button>Vender</button>
        </Link>
      </div>
    </>
  );
};

export default CardSingleClientSales;
