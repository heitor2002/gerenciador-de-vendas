import Balance from "./Balance";
import GraphYear from "./GraphYear";

const Analytics = () => {
  return (
    <>
      <div className="container">
        <div className="title-page">
          <center>
            <h2>Visualizar desempenho</h2>
          </center>
        </div>
        <GraphYear />
        <Balance />
      </div>
    </>
  );
};

export default Analytics;
