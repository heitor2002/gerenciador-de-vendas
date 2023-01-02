import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <h2>Painel de controle</h2>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/sales"><li>Vendas</li></Link>
          <Link to="/requests"><li>Pedidos</li></Link>
          <Link to="/clients"><li>Clientes</li></Link>
          <Link to="/stock"><li>Estoque</li></Link>
          <Link to="/analytics"><li>Desempenho</li></Link>
        </ul>
      </header>
    </>
  );
};

export default Header;
