import { useEffect, useState } from "react";

const fetchClients = (url) => {
  const [dataFetchInformations, setDataFetchInformations] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDataFetchInformations(data);
      });
  }, [url]);
  return { dataFetchInformations };
};

export default fetchClients;
