import Balance from "./Balance";
import ExplanatoryCards from "./ExplanatoryCards";
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
        <ExplanatoryCards />
      </div>
    </>
  );
};

export default Analytics;
