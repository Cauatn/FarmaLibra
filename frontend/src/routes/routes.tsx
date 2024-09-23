import { Routes as Switch, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" element={<></>} />
      <Route path="/app" element={<></>}></Route>
    </Switch>
  );
};

export { AppRoutes };
