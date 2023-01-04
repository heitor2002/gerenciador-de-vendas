import { useEffect, useState } from "react";

const fetchClients = (url) => {
  const [clientsInformation, setClientsInformation] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setClientsInformation(data);
      });
  }, [url]);
  return { clientsInformation };
};

export default fetchClients;
