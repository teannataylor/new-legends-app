import React, { useState } from "react";

function NewLegendForm({ setLegends }) {
  const [formState, setFormState] = useState({});
  function handleChange(e) {
    const key = e.target.name;
    setFormState((prevState) => ({ ...prevState, [key]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(formState),
    };
    fetch("http://localhost:3006/legends", config)
      .then((res) => res.json())
      .then((newLegend) => setLegends((prevState) => [...prevState, newLegend]));
  }
  return (
    <div className="new-legend-form">
      <h2>New Legend</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={formState.name}
          type="text"
          name="name"
          placeholder="Legend name"
        />
        <input
          onChange={handleChange}
          value={formState.image}
          type="text"
          name="image"
          placeholder="Image URL"
        />
        <input
          onChange={handleChange}
          value={formState.likes}
          type="number"
          name="likes"
          placeholder="Likes"
        />
        <button type="submit">Add Legend</button>
      </form>
    </div>
  );
}

export default NewLegendForm;