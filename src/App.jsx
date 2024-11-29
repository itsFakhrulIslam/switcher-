import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ByCategory from './pages/ByCategory';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/category/:categoryID" element={<ByCategory></ByCategory>} />
        <Route path="/details/:postsID" element={<Details></Details>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
