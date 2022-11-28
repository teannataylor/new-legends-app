import React from "react";
import NewLegendForm from "./NewLegendForm";
import LegendList from "./LegendList";
import Search from "./Search";

import { useState, useEffect } from "react";

function LegendPage() {
  const [legends, setLegends] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(fetchLegends, []);

  function fetchLegends() {
    fetch("http://localhost:3006/legends")
      .then((res) => res.json())
      .then((data) => setLegends(data));
  }

  const displayLegends = legends.filter((legend) => {
    return legend.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <main>
      <Search setQuery={setQuery} />
      <LegendList legends={displayLegends} />
      <NewLegendForm setLegends={setLegends} />
    </main>
  );
}

export default LegendPage;