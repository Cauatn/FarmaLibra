import Chat from "@/core/chat";
import LandPage from "@/core/LandPage";
import Login from "@/core/Login";
import { Routes as Switch, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" element={<LandPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chat" element={<Chat />} />
    </Switch>
  );
};

export { AppRoutes };
