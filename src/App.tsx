import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ChefProfile from "./components/chef/ChefProfile";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chef/:id" element={<ChefProfile />} />
        {import.meta.env.VITE_TEMPO && <Route path="/tempobook/*" />}
      </Routes>
    </Suspense>
  );
}

export default App;
