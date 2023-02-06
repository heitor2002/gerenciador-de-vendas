import { useState } from "react";

const ExplanatoryCards = () => {
  const [explanationArea, setExplanationArea] = useState(0);
  const [explainedText, setExplainedText] = useState([
    {
      titleText: "Soma total de pedidos:",
      paragraphText: "Paragraph 1",
    },
    {
      titleText: "Vendas realizadas:",
      paragraphText: "Paragraph 2",
    },
    {
      titleText: "Pagamentos pendentes:",
      paragraphText: "Paragraph 3",
    },
    {
      titleText: "Projeção total das vendas:",
      paragraphText: "Paragraph 4",
    },
    {
      titleText: "Saldo total:",
      paragraphText: "Paragraph 5",
    },
    {
      titleText: "Saldo total projetado:",
      paragraphText: "Paragraph 6",
    },
    {
      titleText: "Produtos em estoque:",
      paragraphText: "Paragraph 7",
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
