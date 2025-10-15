import { useEffect, useState } from "react";
import PropertyList from "./components/PropertyList";
import "./App.css";

function App() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
          const res = await fetch(
            "/api/report_generator/api/suburb/properties?suburb=Belmont+North",
            {
              headers: {
                Authorization: "Bearer test",
                "Content-Type": "application/json",
              },
            }
          );

          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }

      const text = await res.text();

      const sanitized = text
        .replace(/\bNaN\b/g, "null")
        .replace(/\bInfinity\b/g, "null")
        .replace(/\b-Infinity\b/g, "null");

      const data = JSON.parse(sanitized);
      setProperties(data.results);

      } catch (err) {
        console.error("Fetch failed:", err);
        setError("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="loading">Loading data...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="app-container">
      <header>
        <h1>🏡 Microburbs</h1>
        <p>Recent listings in Belmont</p>
      </header>
      <PropertyList properties={properties} />

    </div>
  );
}

export default App;
