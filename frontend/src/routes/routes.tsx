import Category from "@/core/Category";
import Chat from "@/core/Chat";
import Inicio from "@/core/Inicio";
import LandPage from "@/core/LandPage";
import Login from "@/core/Login";
import Sugestion from "@/core/Sugestion";
import { Routes as Switch, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" element={<LandPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/category" element={<Category />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/sugestion" element={<Sugestion />} />
    </Switch>
  );
};

export { AppRoutes };
