import { IoMdClose } from "react-icons/io";

const AllRequests = (props) => {
  var day;
  var month;
  var year;
  const createDate = new Date();
  day = createDate.getDay();
  month = createDate.getMonth() + 1;
  year = createDate.getFullYear();
  var printDate = `${day}/${month}/${year}`;
//   console.log(printDate);

  return (
    <>
      <div className="container-requests">
        <table>
          <tr>
            <th>Nome</th>
            <th>Preço p/ unidade</th>
            <th>Quantidade</th>
            <th>Acumulado</th>
            <th>Excluir</th>
          </tr>
          <tr>
            <td>{props.productName}</td>
            <td>{props.productPrice}</td>
            <td>{props.productQuantity}</td>
            <td>{props.productPrice * props.productQuantity}</td>
            <td>
              <button>
                <IoMdClose />
              </button>
            </td>
          </tr>
        </table>
        <button>Concluir pedido</button>
      </div>
    </>
  );
};

export default AllRequests;
