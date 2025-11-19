import { useState, useEffect } from "react";

export default function CatFacts() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFacts() {
      try {
        const response = await fetch("https://catfact.ninja/facts?limit=5");

        // Sjekk for HTTP-feil som f.eks. 429
        if (!response.ok) {
          throw new Error(`Server responded with ${response.status}`);
        }

        const data = await response.json();

        // Sjekk at API faktisk har data-feltet
        if (!data.data) {
          throw new Error("API returned an unexpected format.");
        }

        setFacts(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
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

      <ul>
        {(facts ?? []).map((fact, index) => (
          <li key={index}>{fact.fact}</li>
        ))}
      </ul>
    </div>
  );
}
