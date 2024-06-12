import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import DetailProperty from "../pages/DetailProperty";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail-property/:id" element={<DetailProperty />} />
    </Routes>
  );
};

export default Router;
