import { useState } from "react";

const mockData = [
  { username: "Ola Normann", email: "ola.normann@norge.no" },
  { username: "Torleif", email: "torleif@kodehode.no" },
  { username: "Jan Egil", email: "jan.egil@kodehode.no" },
  { username: "Sander", email: "sander@kodehode.no" },
];

export default function Users() {
  const [users, setUsers] = useState(mockData);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  function handleAddUser() {
    if (username.trim() === "" || email.trim() === "") return;

    const newUser = { username, email };
    setUsers([...users, newUser]);
    setUsername("");
    setEmail("");
  }

  return (
    <div>
      <h2
        style={{
          marginBottom: "1rem",
          color: "white",
          textShadow: "0 0 8px #ffffff",
        }}
      >
        Brukerliste
      </h2>

      <ul style={{ listStyle: "none", padding: 0, marginBottom: "1rem" }}>
        {users.map((user, index) => (
          <li
            key={index}
            style={{
              marginBottom: "0.5rem",
              padding: "0.5rem",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.35)",
              color: "#1b1b1b",
              fontWeight: "500",
            }}
          >
            <strong>{user.username}</strong> – {user.email}
          </li>
        ))}
      </ul>

      <h3
        style={{
          margin: "1rem 0 0.5rem",
          color: "white",
          textShadow: "0 0 6px #ffffff",
        }}
      >
        Legg til ny bruker
      </h3>

      <input
        type="text"
        placeholder="Brukernavn"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          width: "80%",
          padding: "0.7rem",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.6)",
          marginBottom: "0.8rem",
          background: "rgba(255,255,255,0.4)",
          color: "#1b1b1b",
          fontWeight: "500",
        }}
      />
      <br />

      <input
        type="email"
        placeholder="E-post"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "80%",
          padding: "0.7rem",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.6)",
          marginBottom: "0.8rem",
          background: "rgba(255,255,255,0.4)",
          color: "#1b1b1b",
          fontWeight: "500",
        }}
      />
      <br />

      <button
        onClick={handleAddUser}
        style={{
          marginTop: "0.8rem",
          padding: "0.7rem 1.2rem",
          borderRadius: "12px",
          border: "none",
          background: "linear-gradient(135deg, #ffd6e6, #a8cfff)",
          color: "#1b1b1b",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 0 15px rgba(255,255,255,0.5)",
        }}
      >
        Legg til bruker
      </button>
    </div>
  );
}
