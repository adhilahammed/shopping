import { BrowserRouter, Route, Routes } from "react-router";

import ProductList from "./pages/productsview/productslist";

import NotFoundPage from "./pages/notfound/notfound";
import { Login } from "./pages/login/login";
import { Signup } from "./pages/signup/signup";
import { SingleProductView } from "./pages/singleproductview/singleProductView";
import { Authlayout } from "./components/auth/authlayout";

import LoginAlert from "./components/popup/authalert";

const Approuter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<Authlayout />}>
          <Route path="/products/:id" element={<SingleProductView />} />
          <Route path="/" element={<ProductList />} />
          <Route path="/test" element={<LoginAlert />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Approuter;
