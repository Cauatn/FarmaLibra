import LandPage from "@/core/LandPage";
import { Routes as Switch, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" element={<LandPage />} />
      <Route path="/app" element={<></>}></Route>
    </Switch>
  );
};

export { AppRoutes };
