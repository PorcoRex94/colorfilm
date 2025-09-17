import { Route, Routes } from "react-router-dom";
import { Index } from "./pages/Index";
import { GlobalComponent } from "./components/global-component/GlobalComponent";
import { Preimpresion } from "./pages/Preimpresion";

function App() {
  return (
    <>
      <Routes>
        <Route element={<GlobalComponent />}>
          <Route path="/" element={<Index />} />
          <Route path="/gigantografia" element={<Index />} />
          <Route path="/preimpresion" element={<Preimpresion />} />
          <Route path="/offsetdigital" element={<Index />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
