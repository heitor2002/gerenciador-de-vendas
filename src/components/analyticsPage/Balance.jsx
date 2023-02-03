import fetchClients from "../../fetchClients";

const Balance = () => {
    const ports = {
        clients: 3000,
        paymentHistory: 3500,
        requests: 4000,
        sales: 4500,
        stock: 5000,
      };
    const {dataFetchInformations: sales} = fetchClients(`http://localhost:${ports.sales}/sales`)
    const {dataFetchInformations: requests} = fetchClients(`http://localhost:${ports.requests}/requests`)

    const mapAllSales = sales.map(item => {
        return item.floatInputPrice * item.floatInputQuantity
    })
    const someAllSales = mapAllSales.reduce((acc, item) => {
        return acc + item;
    })

    console.log(someAllSales)
    return (
        <>

        </>
    )
}

export default Balance;