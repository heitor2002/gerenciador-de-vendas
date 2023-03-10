import { useState } from "react";

const ExplanatoryCards = () => {
  const [explanationArea, setExplanationArea] = useState(0);
  const [explainedText, setExplainedText] = useState([
    {
      titleText: "Soma total de pedidos:",
      paragraphText: "Todos os pedidos realizados serão somados neste tópico, não havendo dedução do valor, pois o mesmo será utilizado como métrica para calcular o saldo total desde o início das vendas.",
    },
    {
      titleText: "Vendas realizadas:",
      paragraphText: "Todas as vendas realizadas serão cadastradas aqui, entretanto, este tópico apresenta os pagamentos realizados pelos clientes mais aqueles que ainda devem ser pagos (valor já pago + valor pendente).",
    },
    {
      titleText: "Pagamentos pendentes:",
      paragraphText: "Pagamento de produtos comprados que ainda não foram pagos.",
    },
    {
      titleText: "Projeção total das vendas:",
      paragraphText: "A soma das vendas realizadas com os pagamentos pendentes.",
    },
    {
      titleText: "Produtos em estoque:",
      paragraphText: "O valor total do estoque atual.",
    },
    {
      titleText: "Saldo total:",
      paragraphText: "A diferença entre produtos vendidos (levando em consideração apenas valores pagos pelos clientes) e os pedidos dos produtos.",
    },
    {
      titleText: "Saldo total projetado:",
      paragraphText: "A diferença entre produtos vendidos (não levando em consideração valores pagos pelos clientes, apenas o preço da venda do produto) e os pedidos dos produtos.",
    },
  ]);
  return (
    <>
      <div className="flex-explanatory-buttons">
        <div className="explanatory-buttons">
          {explainedText.map((item,index) => {
            return <button onClick={() => setExplanationArea(index)}>{item.titleText}</button>
          })}
        </div>
        <div className="explanation-area">
          <h2>{explainedText[explanationArea].titleText}</h2>
          <p>{explainedText[explanationArea].paragraphText}</p>
        </div>
      </div>
    </>
  );
};

export default ExplanatoryCards;
