import { useEffect, useState } from "react";

export default function CSR() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://629aa176656cea05fc2c3402.mockapi.io/api/categories"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    };

    fetchData().catch((e) => {
      console.error("An error occurred while fetching the data: ", e);
    });
  }, []);

  return (
    <>
      CSR Page
      <div>This is data: </div>
      <div>{JSON.stringify(data)}</div>
    </>
  );
}
