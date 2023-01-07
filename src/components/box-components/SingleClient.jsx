import { Link } from "react-router-dom";

const SingleClient = (props) => {
  return (
    <>
      <div className="single-cards" key={props.id}>
        <h2>{props.name}</h2>
        <h2>Apelido: {props.nickname}</h2>
        <h3>Pagamento: {props.status}</h3>
        <Link to={`/clientes/${props.id}`}>
          <button>Visualizar</button>
        </Link>
      </div>
    </>
  );
};

export default SingleClient;
