import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [finalData, setData] = useState("");
  async function getUser() {
    try {
      const response = await axios.post("http://localhost:5000/api/foods", {
        name: "Burger",
        price: 10,
      });
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <h1>{finalData.name}</h1>
    </div>
  );
}

export default App;
