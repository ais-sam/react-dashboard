
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterStepOne from "./pages/RegisterStepOne";
import RegisterStepTwo from "./pages/RegisterStepTwo";
import SuccessfulRegistration from "./pages/SuccessfulRegistration";
import AdminListing from "./pages/AdminListing";
import Layout from "./components/global/Layout";

function App() {
  return (
  <div className="font-poppins">
      <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Login/>}/>
          <Route path="register" element={<Layout/>}>
            <Route index element={<RegisterStepOne/>}/>
            <Route path="account-information" element={<RegisterStepTwo/>}/>
            <Route path="success" element={<SuccessfulRegistration/>}/>
          </Route>
          <Route path="admin" element={<AdminListing/>}/>
        </Route>
      </Routes>
     
      </BrowserRouter>
  </div>
  );
}

export default App;
