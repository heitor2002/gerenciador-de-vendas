import { useEffect, useState } from "react";

const fetchClients = (url) => {
  const [clientsInformation, setclientsInformation] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setclientsInformation(data);
      });
  }, [url]);
  return { clientsInformation };
};

export default fetchClients;
