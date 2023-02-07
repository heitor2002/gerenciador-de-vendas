import fetchClients from "../../fetchClients";

const GraphYear = () => {
    const {dataFetchInformations: requests} = fetchClients("http://localhost:3000/requests")
    const {dataFetchInformations: sales} = fetchClients("http://localhost:3000/sales")

    console.log(requests);
    console.log(sales)
    const totalSales = sales.map(item => {
        return item.floatInputPrice * item.floatInputQuantity
    })

    console.log(totalSales)
    return (
        <>
        {/* <h2>Ola mundo</h2> */}
        </>
    )
}

export default GraphYear;