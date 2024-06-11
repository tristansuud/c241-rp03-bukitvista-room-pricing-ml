import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import DetailProperty from "../pages/DetailProperty";
import DetailRoom from "../pages/DetailRoom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail-property/:id" element={<DetailProperty />} />
      <Route path="/detail-property/:id/detail-room" element={<DetailRoom />} />
    </Routes>
  );
};

export default Router;
