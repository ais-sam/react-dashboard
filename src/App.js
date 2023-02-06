
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  return (
  <div className="font-poppins">
      <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>
      </Routes>
     
      </BrowserRouter>
  </div>
  );
}

export default App;
