import { useState, useEffect } from "react";
export default function CatFacts() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFacts() {
      try {
        const response = await fetch("https://catfact.ninja/facts?limit=5");

        const data = await response.json();

        setFacts(data.data);

        setLoading(false);
      } catch (err) {
        setError(err.message);

        setLoading(false);
      }
    }

    fetchFacts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Cat Facts</h2>

      {}
      <ul>
        {facts.map((fact, index) => (
          <li key={index}>{fact.fact}</li>
        ))}
      </ul>
    </div>
  );
}
