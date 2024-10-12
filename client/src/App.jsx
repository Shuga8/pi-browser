import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Landing, Passphrase } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pi-wallet" element={<Passphrase />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
