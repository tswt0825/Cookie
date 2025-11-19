import "./App.css";
import CatFacts from "./components/catFacts";
import CookieClicker from "./components/cookieClicker";
import Users from "./components/users";

function App() {
  return (
    <>
      <div className="container">
        <div className="card">
          <CookieClicker />
        </div>
        <div className="card">
          <Users />
        </div>
        <div className="card">
          <CatFacts />
        </div>
      </div>
    </>
  );
}

export default App;
