import { Route, Routes } from "react-router-dom";
import Data from "./pages/Data";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/data" element={<Data />} />
    </Routes>
  );
}

export default App;
