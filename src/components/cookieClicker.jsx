import { useState } from "react";

export default function CookieClicker() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Poeng: {count} </h2>
      <button
        onClick={handleClick}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          outline: "none",
        }}
      >
        <img
          src="/cookie.png"
          alt="cookie"
          style={{
            width: "150px",
          }}
        />
      </button>
    </div>
  );
}
