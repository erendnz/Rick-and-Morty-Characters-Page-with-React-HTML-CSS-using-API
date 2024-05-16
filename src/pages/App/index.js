import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CharactersPage from "../Characters";
import "./index.scss";
import Character from "../Character";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Link to="/character">Character</Link> */}
        <Routes>
          <Route path="/" element={<CharactersPage />} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
